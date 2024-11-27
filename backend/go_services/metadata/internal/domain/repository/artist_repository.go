package repository

import (
	"context"

	"rhythmony.com/metadata/internal/domain/entities"
)

type IArtistRepository interface {
	ICrudRepository[*entities.Artist, string]
	IPagingRepository[*entities.Artist]
	FindAllByAlbumId(ctx context.Context, albumId string) ([]*entities.Artist, error)
	FindAllByTrackId(ctx context.Context, trackId string) ([]*entities.Artist, error)
}
