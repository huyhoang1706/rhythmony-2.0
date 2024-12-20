package store

import (
	"context"
	"errors"
	"math"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"

	"go.uber.org/zap"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/domain/repository"
	"rhythmony.com/metadata/internal/domain/vo"
)

type AlbumRepository struct {
	db     *gorm.DB
	logger *zap.Logger
}

func NewAlbumRepository(db *gorm.DB, logger *zap.Logger) repository.IAlbumRepository {
	return &AlbumRepository{
		db:     db,
		logger: logger,
	}
}

func (r *AlbumRepository) Save(ctx context.Context, album *entities.Album) (*entities.Album, error) {
	r.logger.Info("Saving album", zap.Any("album", album))
	if err := r.db.WithContext(ctx).Create(album).Error; err != nil {
		r.logger.Error("Fail to save album", zap.Error(err))
		return nil, err
	}
	return album, nil
}

func (r *AlbumRepository) FindByID(ctx context.Context, id string) (*entities.Album, error) {
	r.logger.Info("Find album by id", zap.String("id", id))
	var album entities.Album
	err := r.db.WithContext(ctx).Model(&entities.Album{}).
		Preload("Genres").
		Where("id = ?", id).First(&album).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		r.logger.Warn("Album not found", zap.String("id", id))
		return nil, err
	}
	if err != nil {
		r.logger.Error("Failed to find album", zap.String("id", id), zap.Error(err))
		return nil, err
	}
	return &album, nil
}

func (r *AlbumRepository) Update(ctx context.Context, album *entities.Album) (*entities.Album, error) {
	r.logger.Info("Update album", zap.Any("artist", album))
	if err := r.db.Session(&gorm.Session{FullSaveAssociations: true}).WithContext(ctx).Updates(album).Error; err != nil {
		r.logger.Error("Fail to update album", zap.String("id", album.ID))
		return nil, err
	}
	return album, nil
}

func (r *AlbumRepository) Delete(ctx context.Context, id string) error {
	r.logger.Info("Delete album by id", zap.String("id", id))
	if err := r.db.WithContext(ctx).Select(clause.Associations).Delete(&entities.Album{}, id).Error; err != nil {
		r.logger.Error("Fail to delete album by id", zap.String("id", id))
		return err
	}
	return nil
}

func (r *AlbumRepository) FindAllByPagination(ctx context.Context, pageSize, pageNo int) (*vo.Page[*entities.Album], error) {
	r.logger.Info("Find albums by pagination", zap.Int("pageSize", pageSize), zap.Int("pageNo", pageNo))
	var albums []*entities.Album
	var totalElements int64

	r.db.WithContext(ctx).Model(&entities.Album{}).Select("id").Count(&totalElements)

	totalPages := int(math.Ceil(float64(totalElements) / float64(pageSize)))

	if err := r.db.WithContext(ctx).Offset((pageNo - 1) * pageSize).Limit(pageSize).
		Preload("Genres").
		Find(&albums).Error; err != nil {
		r.logger.Error("Fail to find albums by pagination")
		return nil, err
	}
	page := vo.Page[*entities.Album]{
		PageSize:      pageSize,
		PageNo:        pageNo,
		TotalPages:    totalPages,
		TotalElements: totalElements,
		Content:       albums,
	}
	return &page, nil
}
