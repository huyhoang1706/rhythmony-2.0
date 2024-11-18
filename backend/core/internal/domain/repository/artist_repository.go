package repository

import (
	"rhythmony/core/internal/domain/entities"
)

type IArtistRepository interface {
	ICrudRepository[*entities.Artist, string]
	IPagingRepository[*entities.Artist, string]
}
