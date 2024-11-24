package store

import (
	"context"
	"errors"
	"math"

	"go.uber.org/zap"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/domain/repository"
	"rhythmony.com/metadata/internal/domain/vo"
)

type TrackRepository struct {
	db     *gorm.DB
	logger *zap.Logger
}

func NewTrackRepository(db *gorm.DB, logger *zap.Logger) repository.ITrackRepository {
	return &TrackRepository{
		db:     db,
		logger: logger,
	}
}

func (r *TrackRepository) Save(ctx context.Context, track *entities.Track) (*entities.Track, error) {
	r.logger.Info("Saving track", zap.Any("track", track))
	if err := r.db.WithContext(ctx).Create(track).Error; err != nil {
		r.logger.Error("Fail to save track", zap.Error(err))
		return nil, err
	}
	return track, nil
}

func (r *TrackRepository) FindByID(ctx context.Context, id string) (*entities.Track, error) {
	r.logger.Info("Find album by id", zap.String("id", id))
	var track entities.Track
	err := r.db.WithContext(ctx).Where("id = ?", id).First(&track).Error
	if errors.Is(err, gorm.ErrRecordNotFound) {
		r.logger.Warn("Track not found", zap.String("id", id))
		return nil, err
	}
	if err != nil {
		r.logger.Error("Failed to find track", zap.String("id", id), zap.Error(err))
		return nil, err
	}
	return &track, nil
}

func (r *TrackRepository) Update(ctx context.Context, track *entities.Track) (*entities.Track, error) {
	r.logger.Info("Update track", zap.Any("track", track))
	if err := r.db.Session(&gorm.Session{FullSaveAssociations: true}).WithContext(ctx).Updates(track).Error; err != nil {
		r.logger.Error("Fail to update track", zap.String("id", track.ID))
		return nil, err
	}
	return track, nil
}

func (r *TrackRepository) Delete(ctx context.Context, id string) error {
	r.logger.Info("Delete track by id", zap.String("id", id))
	if err := r.db.WithContext(ctx).Select(clause.Associations).Delete(&entities.Track{}, id).Error; err != nil {
		r.logger.Error("Fail to delete track by id", zap.String("id", id))
		return err
	}
	return nil
}

func (r *TrackRepository) FindAllByPagination(ctx context.Context, pageSize, pageNo int) (*vo.Page[*entities.Track], error) {
	r.logger.Info("Find albums by pagination", zap.Int("pageSize", pageSize), zap.Int("pageNo", pageNo))
	var tracks []*entities.Track
	var totalElements int64

	r.db.WithContext(ctx).Model(&entities.Album{}).Select("id").Count(&totalElements)

	totalPages := int(math.Ceil(float64(totalElements) / float64(pageSize)))

	if err := r.db.WithContext(ctx).Offset((pageNo - 1) * pageSize).Limit(pageSize).Find(&tracks).Error; err != nil {
		r.logger.Error("Fail to find albums by pagination")
		return nil, err
	}
	page := vo.Page[*entities.Track]{
		PageSize:      pageSize,
		PageNo:        pageNo,
		TotalPages:    totalPages,
		TotalElements: totalElements,
		Content:       tracks,
	}
	return &page, nil
}
