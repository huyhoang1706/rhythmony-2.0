package repository

import (
	"rhythmony.com/metadata/internal/domain/entities"
)

type IArtistRepository interface {
	ICrudRepository[*entities.Artist, string]
	IPagingRepository[*entities.Artist, string]
}
