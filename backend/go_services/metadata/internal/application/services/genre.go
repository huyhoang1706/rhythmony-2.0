package services

import (
	"context"
	"rhythmony.com/grpc/generated/pb"

	"rhythmony.com/metadata/internal/infrastructure/store"

	"go.uber.org/zap"
)

type GenreService struct {
	pb.UnimplementedGenreAPIServer
	genreRepo *store.GenreRepository
	logger    *zap.Logger
}

func NewGenreService(genreRepo *store.GenreRepository, logger *zap.Logger) pb.GenreAPIServer {
	return &GenreService{
		genreRepo: genreRepo,
		logger:    logger,
	}
}

func (s *GenreService) ListAllGenres(ctx context.Context, GenreRequest *pb.ListAllGenresRequest) (*pb.ListAllGenresResponse, error) {
	s.logger.Info("Getting all genres")
	genres, err := s.genreRepo.FindAllGenres(ctx)
	if err != nil {
		s.logger.Error("Fail to get all genres", zap.Error(err))
		return nil, err
	}
	var g []*pb.Genre
	for _, e := range genres {
		pbGenre := &pb.Genre{
			Name: e.Name,
		}
		g = append(g, pbGenre)
	}
	return &pb.ListAllGenresResponse{
		Genres: g,
	}, nil
}
