package entities

type AlbumType string

const (
	FullAlbum    AlbumType = "album"
	Complilation AlbumType = "complilation"
	Single       AlbumType = "single"
)

type Album struct {
	ID        string    `json:"id,omitempty"`
	Title     string    `json:"title"`
	AlbumType AlbumType `json:"album_type"`
}
