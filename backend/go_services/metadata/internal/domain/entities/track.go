package entities

import (
	"time"

	"rhythmony.com/metadata/internal/domain/vo"

	"github.com/oklog/ulid/v2"
	"gorm.io/gorm"
)

type Track struct {
	ID         string         `gorm:"primaryKey" db:"id"`
	CreatedAt  time.Time      `gorm:"column:created_at" db:"created_at"`
	UpdatedAt  time.Time      `gorm:"column:updated_at" db:"updated_at"`
	DeletedAt  gorm.DeletedAt `gorm:"column:deleted_at;index" db:"deleted_at"`
	AudioURL   string         `gorm:"column:audio_url" db:"audio_url"`
	Title      string         `gorm:"column:title;not null;size:60" db:"title"`
	DurationMs *int32         `gorm:"column:duration_ms" db:"duration_ms"`
	Explicit   *bool          `gorm:"column:explicit" db:"explicit"`
	Type       vo.Type        `gorm:"-" db:"-"`
	Lyrics     string         `gorm:"column:lyrics;type:TEXT" db:"lyrics"`
	Popularity int32          `gorm:"column:popularity" db:"popularity"`
	IsFeatured bool           `gorm:"column:is_featured" db:"is_featured"`
	Genres     []*Genre       `gorm:"many2many:track_genres" db:"-"`
	Albums     []*Album       `gorm:"many2many:album_tracks" db:"-"`
	Artists    []*Artist      `gorm:"many2many:artist_tracks" db:"-"`
}

func NewTrack(title string, explicit *bool, lyrics string, artists []*Artist) *Track {
	return &Track{
		ID:         ulid.Make().String(),
		Title:      title,
		Artists:    artists,
		Explicit:   explicit,
		Lyrics:     lyrics,
		Type:       vo.TRACK,
		IsFeatured: false,
	}
}
