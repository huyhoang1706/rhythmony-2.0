package store

import (
	"context"

	"rhythmony.com/metadata/internal/domain/entities"
)

type GenreRepository struct {
	repo *Repository
}

func NewGenreRepository(repo *Repository) *GenreRepository {
	return &GenreRepository{
		repo: repo,
	}
}

func (r *GenreRepository) FindAllGenres(ctx context.Context) ([]*entities.Genre, error) {
	var genres []*entities.Genre
	if err := r.repo.db.WithContext(ctx).Find(&genres).Error; err != nil {
		return nil, err
	}
	return genres, nil
}
