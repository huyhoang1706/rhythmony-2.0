package store

import (
	"context"
	"errors"
	"fmt"
	"math"

	"go.uber.org/zap"
	"gorm.io/gorm"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/domain/repository"
	"rhythmony.com/metadata/internal/domain/vo"
)

type ArtistRepository struct {
	repo   *Repository
	logger *zap.Logger
}

func NewArtistRepository(repo *Repository, logger *zap.Logger) repository.IArtistRepository {
	return &ArtistRepository{
		repo:   repo,
		logger: logger,
	}
}

func (r *ArtistRepository) Save(ctx context.Context, artist *entities.Artist) (*entities.Artist, error) {
	r.logger.Info("Saving artist ...")
	if err := r.repo.db.WithContext(ctx).Create(artist).Error; err != nil {
		return nil, err
	}
	return artist, nil
}

func (r *ArtistRepository) FindByID(ctx context.Context, id string) (*entities.Artist, error) {
	r.logger.Info("Find artist by id", zap.String("id", id))
	var artist entities.Artist
	err := r.repo.db.WithContext(ctx).Where("id = ?", id).First(&artist).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		r.logger.Warn("Artist not found", zap.String("id", id))
		return nil, fmt.Errorf("artist with ID %s not found: %w", id, err)
	}
	if err != nil {
		r.logger.Error("Failed to find artist", zap.String("id", id), zap.Error(err))
		return nil, fmt.Errorf("failed to find artist with ID %s: %w", id, err)
	}
	return &artist, nil
}

func (r *ArtistRepository) Update(ctx context.Context, artist *entities.Artist) (*entities.Artist, error) {
	r.logger.Info("Update artist ...")
	if err := r.repo.db.WithContext(ctx).Updates(artist).Error; err != nil {
		r.logger.Error("Fail to update artist", zap.String("id", artist.ID))
		return nil, err
	}
	return artist, nil
}

func (r *ArtistRepository) Delete(ctx context.Context, id string) error {
	r.logger.Info("Delete artist by id", zap.String("id", id))
	if err := r.repo.db.WithContext(ctx).Delete(&entities.Artist{}, id).Error; err != nil {
		r.logger.Error("Fail to delete artist by id", zap.String("id", id))
		return err
	}
	return nil
}

func (r *ArtistRepository) FindAllByPagination(ctx context.Context, pageSize, pageNo int) (*vo.Page, error) {
	r.logger.Info("Find by pagination", zap.Int("pageSize", pageSize), zap.Int("pageNo", pageNo))
	var artists []*entities.Artist
	var totalElements int64

	r.repo.db.WithContext(ctx).Model(&entities.Artist{}).Count(&totalElements)

	totalPages := int(math.Ceil(float64(totalElements) / float64(pageSize)))

	if err := r.repo.db.WithContext(ctx).Offset((pageNo - 1) * pageSize).Limit(pageSize).Find(&artists).Error; err != nil {
		r.logger.Error("Fail to find artists by pagination")
		return nil, err
	}
	page := vo.Page{
		PageSize:      pageSize,
		PageNo:        pageNo,
		TotalPages:    totalPages,
		TotalElements: totalElements,
		Content:       artists,
	}
	return &page, nil
}
