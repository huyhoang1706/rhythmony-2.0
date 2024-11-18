package repository

import (
	"rhythmony/core/internal/domain/entities"
)

type IAlbumRepository interface {
	ICrudRepository[*entities.Album, string]
	IPagingRepository[*entities.Album, string]
}
