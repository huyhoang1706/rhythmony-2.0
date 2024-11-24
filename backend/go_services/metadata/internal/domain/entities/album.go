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
	ID          string         `gorm:"primaryKey" db:"id"`
	CreatedAt   time.Time      `gorm:"column:created_at" db:"created_at"`
	UpdatedAt   time.Time      `gorm:"column:updated_at" db:"updated_at"`
	DeletedAt   gorm.DeletedAt `gorm:"column:deleted_at;index" db:"deleted_at"`
	Title       string         `gorm:"column:title;not null;size:60" db:"title"`
	AlbumType   AlbumType      `gorm:"column:album_type;size:15" db:"album_type"`
	TotalTracks int32          `gorm:"column:total_tracks" db:"total_tracks"`
	ReleaseDate time.Time      `gorm:"column:release_date;not null" db:"release_date"`
	Type        vo.Type        `gorm:"-" db:"-"`
	Image       string         `gorm:"column:image" db:"image"`
	Label       string         `gorm:"column:label" db:"label"`
	Popularity  int32          `gorm:"column:popularity" db:"popularity"`
	Genres      []*Genre       `gorm:"many2many:album_genres" db:"-"`
	Artists     []*Artist      `gorm:"many2many:album_artists" db:"-"`
	Tracks      []*Track       `gorm:"many2many:album_tracks" db:"-"`
}

type AlbumTrack struct {
	AlbumID    string `gorm:"primaryKey" db:"album_id"`
	TrackID    string `gorm:"primaryKey" db:"track_id"`
	DiscNumber int32  `gorm:"column:disc_number" db:"disc_number"`
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
