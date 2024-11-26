package repository

import (
	"context"

	"rhythmony.com/metadata/internal/domain/entities"
)

type ITrackRepository interface {
	ICrudRepository[*entities.Track, string]
	IPagingRepository[*entities.Track]
	FindTracksByAlbumId(ctx context.Context, albumId string) ([]*entities.Track, error)
}
