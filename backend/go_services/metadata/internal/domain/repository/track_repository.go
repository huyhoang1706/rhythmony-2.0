package repository

import (
	"rhythmony.com/metadata/internal/domain/entities"
)

type TrackRepository interface {
	ICrudRepository[*entities.Track, string]
	IPagingRepository[*entities.Track]
}
