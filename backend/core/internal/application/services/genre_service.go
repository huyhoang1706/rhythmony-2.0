package services

import (
	"context"
	"rhythmony/core/internal/infrastructure/store"
	pb "rhythmony/core/proto"

	"go.uber.org/zap"
)

type GenreService struct {
	pb.UnimplementedGenreServiceServer
	genreRepo *store.GenreRepository
	logger    *zap.Logger
}

func NewGenreService(genreRepo *store.GenreRepository, logger *zap.Logger) pb.GenreServiceServer {
	return &GenreService{
		genreRepo: genreRepo,
		logger:    logger,
	}
}

func (s *GenreService) GetGenres(ctx context.Context, GenreRequest *pb.GenreRequest) (*pb.GenreResponse, error) {
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
	return &pb.GenreResponse{
		Genres: g,
	}, nil
}
