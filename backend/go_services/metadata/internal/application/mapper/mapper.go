package mapper

import (
	"time"

	"rhythmony.com/grpc/generated/pb"
	"rhythmony.com/metadata/internal/application/utils"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/domain/vo"
)

func MapToGenrePb(genre *entities.Genre) *pb.Genre {
	if genre == nil {
		return nil
	}
	return &pb.Genre{Name: genre.Name}
}

func MapToArtistPb(artist *entities.Artist) *pb.Artist {
	if artist == nil {
		return nil
	}
	var genres []string
	for _, genre := range artist.Genres {
		genres = append(genres, genre.GetGenreName())
	}
	return &pb.Artist{
		Id:         artist.ID,
		Name:       artist.Name,
		Bio:        artist.Bio,
		Type:       string(vo.ARTIST),
		Image:      utils.GetURL(artist.Image),
		Popularity: artist.Popularity,
		Genres:     genres,
	}
}

func MapToTrackPb(track *entities.Track) *pb.Track {
	if track == nil {
		return nil
	}

	var genres []string
	for _, genre := range track.Genres {
		genres = append(genres, genre.GetGenreName())
	}

	return &pb.Track{
		Id:         track.ID,
		Title:      track.Title,
		DurationMs: track.DurationMs,
		Explicit:   track.Explicit,
		Type:       string(vo.TRACK),
		Popularity: int32(track.Popularity),
		Lyrics:     track.Lyrics,
		AudioUrl:   utils.GetURL(track.AudioURL),
		Genres:     genres,
	}
}

func MapToAlbumPb(album *entities.Album) *pb.Album {
	if album == nil {
		return nil
	}

	var genres []string
	for _, genre := range album.Genres {
		genres = append(genres, genre.GetGenreName())
	}

	return &pb.Album{
		Id:          album.ID,
		Title:       album.Title,
		AlbumType:   string(album.AlbumType),
		TotalTracks: int32(album.TotalTracks),
		ReleaseDate: album.ReleaseDate.Format(time.UnixDate),
		Type:        string(vo.ALBUM),
		Image:       utils.GetURL(album.Image),
		Popularity:  int32(album.Popularity),
		Label:       album.Label,
		Genres:      genres,
	}
}
