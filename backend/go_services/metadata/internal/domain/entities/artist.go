package entities

import (
	"time"

	"rhythmony.com/metadata/internal/domain/vo"

	"github.com/oklog/ulid/v2"
	"gorm.io/gorm"
)

type Artist struct {
	ID         string         `gorm:"primaryKey"`
	CreatedAt  time.Time      `gorm:"column:created_at"`
	UpdatedAt  time.Time      `gorm:"column:updated_at"`
	DeletedAt  gorm.DeletedAt `gorm:"index"`
	Name       string         `gorm:"column:name;size:50;not null"`
	Bio        string         `gorm:"column:bio;type:TEXT"`
	Image      string         `gorm:"column:image"`
	Type       vo.Type        `gorm:"column:type"`
	Popularity int            `gorm:"column:popularity"`
	Genres     []*Genre       `gorm:"many2many:artist_genres"`
	Albums     []*Album       `gorm:"many2many:album_artists"`
	Tracks     []*Track       `gorm:"many2many:artist_tracks"`
}

func NewArtist(name, bio, image string) *Artist {
	return &Artist{
		ID:    ulid.Make().String(),
		Name:  name,
		Bio:   bio,
		Image: image,
		Type:  vo.ARTIST,
	}
}
