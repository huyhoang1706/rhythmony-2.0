package entities

import (
	"time"

	"rhythmony.com/metadata/internal/domain/vo"

	"github.com/oklog/ulid/v2"
	"gorm.io/gorm"
)

type Artist struct {
	ID         string         `gorm:"primaryKey" db:"id"`
	CreatedAt  time.Time      `gorm:"column:created_at" db:"created_at"`
	UpdatedAt  time.Time      `gorm:"column:updated_at" db:"updated_at"`
	DeletedAt  gorm.DeletedAt `gorm:"column:deleted_at;index" db:"deleted_at"`
	Name       string         `gorm:"column:name;size:50;not null" db:"name"`
	Bio        string         `gorm:"column:bio;type:TEXT" db:"bio"`
	Image      string         `gorm:"column:image" db:"image"`
	Type       vo.Type        `gorm:"-" db:"-"`
	Popularity int32          `gorm:"column:popularity" db:"popularity"`
	Genres     []*Genre       `gorm:"many2many:artist_genres" db:"-"`
	Albums     []*Album       `gorm:"many2many:album_artists" db:"-"`
	Tracks     []*Track       `gorm:"many2many:artist_tracks" db:"-"`
}

func NewArtist(name, bio string) *Artist {
	return &Artist{
		ID:   ulid.Make().String(),
		Name: name,
		Bio:  bio,
		Type: vo.ARTIST,
	}
}
