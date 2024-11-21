package entities

type Genre struct {
	ID      int64     `gorm:"primaryKey"`
	Name    string    `gorm:"column:name;not null;unique;size:25;"`
	Artists []*Artist `gorm:"many2many:artist_genres"`
	Albums  []*Album  `gorm:"many2many:album_genres"`
}
