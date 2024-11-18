package repository

import (
	"rhythmony/core/internal/domain/entities"
)

type TrackRepository interface {
	ICrudRepository[*entities.Track, string]
	IPagingRepository[*entities.Track, string]
}
