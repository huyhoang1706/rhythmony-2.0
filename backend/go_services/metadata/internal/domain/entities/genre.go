package entities

type Genre struct {
	ID      int64     `gorm:"primaryKey" db:"id"`
	Name    string    `gorm:"column:name;not null;unique;size:25;" db:"name"`
	Artists []*Artist `gorm:"many2many:artist_genres" db:"-"`
	Albums  []*Album  `gorm:"many2many:album_genres" db:"-"`
	Tracks  []*Track  `gorm:"many2many:track_genres" db:"-"`
}

func (g *Genre) GetGenreName() string {
	return g.Name
}
