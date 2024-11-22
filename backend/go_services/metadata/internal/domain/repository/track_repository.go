package repository

import (
	"rhythmony.com/metadata/internal/domain/entities"
)

type ITrackRepository interface {
	ICrudRepository[*entities.Track, string]
	IPagingRepository[*entities.Track]
}
