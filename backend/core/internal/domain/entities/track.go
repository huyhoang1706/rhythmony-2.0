package entities

import (
	"gorm.io/gorm"
	"rhythmony/core/internal/domain/vo"
	"time"

	"github.com/oklog/ulid/v2"
)

type Track struct {
	ID         string         `gorm:"primaryKey"`
	CreatedAt  time.Time      `gorm:"column:created_at"`
	UpdatedAt  time.Time      `gorm:"column:updated_at"`
	DeletedAt  gorm.DeletedAt `gorm:"index"`
	Title      string         `gorm:"column:title;not null;size:60"`
	DiscNumber int            `gorm:"column:disc_number;not null"`
	DurationMs *int           `gorm:"column:duration_ms"`
	Explicit   *bool          `gorm:"column:explicit"`
	Type       vo.Type        `gorm:"column:type"`
	Lyrics     string         `gorm:"column:lyrics;type:TEXT"`
	Popularity int            `gorm:"column:popularity"`
	Albums     []*Album       `gorm:"many2many:album_tracks"`
	Artists    []*Artist      `gorm:"many2many:artist_tracks"`
}

func NewTrack(title string, artists []*Artist) *Track {
	return &Track{
		ID:      ulid.Make().String(),
		Title:   title,
		Artists: artists,
		Type:    vo.TRACK,
	}
}
