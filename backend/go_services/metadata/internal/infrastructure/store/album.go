package store

import (
	"context"

	"go.uber.org/zap"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/domain/repository"
	"rhythmony.com/metadata/internal/domain/vo"
)

type AlbumRepository struct {
	repo   *Repository
	logger *zap.Logger
}

func NewAlbumRepository(repo *Repository, logger *zap.Logger) repository.IAlbumRepository {
	return &AlbumRepository{
		repo:   repo,
		logger: logger,
	}
}

func (a *AlbumRepository) Save(ctx context.Context, album *entities.Album) (*entities.Album, error) {
	//entities.AlbumODO implement me
	panic("implement me")
}

func (a *AlbumRepository) FindByID(ctx context.Context, id string) (*entities.Album, error) {
	//entities.AlbumODO implement me
	panic("implement me")
}

func (a *AlbumRepository) Update(ctx context.Context, entity *entities.Album) (*entities.Album, error) {
	//entities.AlbumODO implement me
	panic("implement me")
}

func (a *AlbumRepository) Delete(ctx context.Context, id string) error {
	//entities.AlbumODO implement me
	panic("implement me")
}

func (a *AlbumRepository) FindAllByPagination(ctx context.Context, pageSize, pageNo int) (*vo.Page, error) {
	//TODO implement me
	panic("implement me")
}
