package services

import (
	"go.uber.org/zap"
	"rhythmony/core/internal/domain/entities"
	"rhythmony/core/internal/domain/repository"
)

type IArtistService interface {
	CreateArtist() (*entities.Artist, error)
}

type ArtistService struct {
	artistRepository repository.IArtistRepository
	logger           *zap.Logger
}

func NewArtistService(artistRepository repository.IArtistRepository, logger *zap.Logger) IArtistService {
	return &ArtistService{
		artistRepository: artistRepository,
		logger:           logger,
	}
}

func (a *ArtistService) CreateArtist() (*entities.Artist, error) {
	//TODO implement me
	panic("implement me")
}
