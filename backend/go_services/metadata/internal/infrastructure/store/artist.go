package store

import (
	"context"
	"errors"
	"math"

	"gorm.io/gorm/clause"

	"go.uber.org/zap"
	"gorm.io/gorm"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/domain/repository"
	"rhythmony.com/metadata/internal/domain/vo"
)

type ArtistRepository struct {
	db     *gorm.DB
	logger *zap.Logger
}

func NewArtistRepository(db *gorm.DB, logger *zap.Logger) repository.IArtistRepository {
	return &ArtistRepository{
		db:     db,
		logger: logger,
	}
}

func (r *ArtistRepository) Save(ctx context.Context, artist *entities.Artist) (*entities.Artist, error) {
	r.logger.Info("Saving artist", zap.Any("artist", artist))
	if err := r.db.WithContext(ctx).Create(artist).Error; err != nil {
		r.logger.Error("Fail to save artist", zap.Error(err))
		return nil, err
	}
	return artist, nil
}

func (r *ArtistRepository) FindByID(ctx context.Context, id string) (*entities.Artist, error) {
	r.logger.Info("Find artist by id", zap.String("id", id))
	var artist entities.Artist
	err := r.db.WithContext(ctx).Where("id = ?", id).First(&artist).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		r.logger.Warn("Artist not found", zap.String("id", id))
		return nil, err
	}
	if err != nil {
		r.logger.Error("Failed to find artist", zap.String("id", id), zap.Error(err))
		return nil, err
	}
	return &artist, nil
}

func (r *ArtistRepository) Update(ctx context.Context, artist *entities.Artist) (*entities.Artist, error) {
	r.logger.Info("Update artist", zap.Any("artist", artist))
	if err := r.db.Session(&gorm.Session{FullSaveAssociations: true}).WithContext(ctx).Updates(artist).Error; err != nil {
		r.logger.Error("Fail to update artist", zap.String("id", artist.ID))
		return nil, err
	}
	return artist, nil
}

func (r *ArtistRepository) Delete(ctx context.Context, id string) error {
	r.logger.Info("Delete artist by id", zap.String("id", id))
	if err := r.db.WithContext(ctx).Select(clause.Associations).Delete(&entities.Artist{}, id).Error; err != nil {
		r.logger.Error("Fail to delete artist by id", zap.String("id", id))
		return err
	}
	return nil
}

func (r *ArtistRepository) FindAllByPagination(ctx context.Context, pageSize, pageNo int) (*vo.Page[*entities.Artist], error) {
	r.logger.Info("Find artists by pagination", zap.Int("pageSize", pageSize), zap.Int("pageNo", pageNo))
	var artists []*entities.Artist
	var totalElements int64

	r.db.WithContext(ctx).Model(&entities.Artist{}).Select("id").Count(&totalElements)

	totalPages := int(math.Ceil(float64(totalElements) / float64(pageSize)))

	if err := r.db.WithContext(ctx).Offset((pageNo - 1) * pageSize).Limit(pageSize).Find(&artists).Error; err != nil {
		r.logger.Error("Fail to find artists by pagination")
		return nil, err
	}
	page := vo.Page[*entities.Artist]{
		PageSize:      pageSize,
		PageNo:        pageNo,
		TotalPages:    totalPages,
		TotalElements: totalElements,
		Content:       artists,
	}
	return &page, nil
}
