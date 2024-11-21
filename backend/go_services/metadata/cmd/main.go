package main

import (
	"context"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
	"net/http"
	"os"
	"rhythmony.com/grpc/generated/pb"

	"rhythmony.com/metadata/internal/application/services"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/infrastructure"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.uber.org/fx"
	"go.uber.org/zap"
	"google.golang.org/grpc"
	"gorm.io/gorm"
)

const (
	DefaultPort     = "8080"
	DefaultGRPCPort = "9090"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	app := fx.New(
		fx.Provide(zap.NewProduction),
		fx.Provide(ProvideGrpcServer),
		infrastructure.Modules,
		services.Modules,
		fx.Invoke(
			StartServer,
			StartGRPCServer,
			//api.MigrationSchema,
		),
	)
	app.Run()
}

func StartServer(lc fx.Lifecycle, logger *zap.Logger) *gin.Engine {
	port := os.Getenv("PORT")
	if port == "" {
		port = DefaultPort
	}
	r := gin.Default()
	r.GET("/heath", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "healthy"})
	})
	srv := &http.Server{Addr: ":" + port, Handler: r}

	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			ln, err := net.Listen("tcp", srv.Addr)
			if err != nil {
				logger.Error("Fail to listen on port " + srv.Addr)
				return err
			}
			go func() {
				logger.Info("Starting Gin server at " + srv.Addr)
				if err := srv.Serve(ln); err != nil {
					logger.Error("Gin error", zap.Error(err))
				}
			}()
			return nil
		},
		OnStop: func(ctx context.Context) error {
			return srv.Shutdown(ctx)
		},
	})
	return r
}

func ProvideGrpcServer(genreAPIServer pb.GenreAPIServer, artistAPIServer pb.ArtistAPIServer) *grpc.Server {
	server := grpc.NewServer()
	_ = reflection.GRPCServer(server)
	pb.RegisterGenreAPIServer(server, genreAPIServer)
	pb.RegisterArtistAPIServer(server, artistAPIServer)
	return server
}

func StartGRPCServer(lc fx.Lifecycle, server *grpc.Server, logger *zap.Logger) *grpc.Server {
	grpcPort := os.Getenv("GRPC_PORT")
	if grpcPort == "" {
		grpcPort = DefaultGRPCPort
	}

	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			listener, err := net.Listen("tcp", ":"+grpcPort)
			if err != nil {
				logger.Error("Failed to listen on gRPC port", zap.String("port", grpcPort), zap.Error(err))
				return err
			}

			go func() {
				logger.Info("Starting gRPC server", zap.String("port", grpcPort))
				if err := server.Serve(listener); err != nil {
					logger.Error("gRPC server error", zap.Error(err))
				}
			}()
			return nil
		},
		OnStop: func(ctx context.Context) error {
			logger.Info("Shutting down gRPC server")
			server.GracefulStop()
			return nil
		},
	})
	return server
}

func MigrationSchema(lc fx.Lifecycle, db *gorm.DB) {
	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			if err := db.AutoMigrate(
				&entities.Artist{},
				&entities.Album{},
				&entities.Genre{},
				&entities.Track{}); err != nil {
				return err
			}
			return nil
		},
	})
}
