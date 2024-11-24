package store

import (
	"context"

	"gorm.io/gorm"
	"rhythmony.com/metadata/internal/domain/entities"
)

type GenreRepository struct {
	db *gorm.DB
}

func NewGenreRepository(db *gorm.DB) *GenreRepository {
	return &GenreRepository{
		db: db,
	}
}

func (r *GenreRepository) FindAllGenres(ctx context.Context) ([]*entities.Genre, error) {
	var genres []*entities.Genre
	if err := r.db.WithContext(ctx).Find(&genres).Error; err != nil {
		return nil, err
	}
	return genres, nil
}
