package repository

import (
	"rhythmony.com/metadata/internal/domain/entities"
)

type IAlbumRepository interface {
	ICrudRepository[*entities.Album, string]
	IPagingRepository[*entities.Album, string]
}
