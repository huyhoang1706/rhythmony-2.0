package entities

import (
	"time"

	"rhythmony.com/metadata/internal/domain/vo"

	"gorm.io/gorm"

	"github.com/oklog/ulid/v2"
)

type AlbumType string

const (
	FullAlbum   AlbumType = "album"
	Compilation AlbumType = "compilation"
	Single      AlbumType = "single"
)

type Album struct {
	ID          string         `gorm:"primaryKey"`
	CreatedAt   time.Time      `gorm:"column:created_at"`
	UpdatedAt   time.Time      `gorm:"column:updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at;index"`
	Title       string         `gorm:"column:title;not null;size:50"`
	AlbumType   AlbumType      `gorm:"column:album_type;size:15"`
	TotalTracks int            `gorm:"column:total_tracks"`
	ReleaseDate time.Time      `gorm:"column:release_date;not null"`
	Type        vo.Type        `gorm:"column:type;size:10"`
	Image       string         `gorm:"column:image"`
	Genres      []*Genre       `gorm:"many2many:album_genres"`
	Label       string         `gorm:"column:label"`
	Popularity  int            `gorm:"column:popularity"`
	Artists     []*Artist      `gorm:"many2many:album_artists"`
	Tracks      []*Track       `gorm:"many2many:album_tracks"`
}

func NewAlbum(title string, albumType AlbumType, releaseDate time.Time, artists []*Artist, image string, label string) *Album {
	return &Album{
		ID:          ulid.Make().String(),
		Title:       title,
		AlbumType:   albumType,
		ReleaseDate: releaseDate,
		Artists:     artists,
		Image:       image,
		Label:       label,
		Type:        vo.ALBUM,
	}
}
