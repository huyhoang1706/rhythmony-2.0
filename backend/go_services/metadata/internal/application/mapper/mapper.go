package mapper

import (
	"sync"

	"google.golang.org/protobuf/types/known/timestamppb"
	"rhythmony.com/grpc/generated/pb"
	"rhythmony.com/metadata/internal/domain/entities"
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
	return &pb.Artist{
		Id:         artist.ID,
		Name:       artist.Name,
		Bio:        artist.Bio,
		Type:       string(artist.Type),
		Image:      artist.Image,
		Popularity: artist.Popularity,
	}
}

func MapToTrackPb(track *entities.Track) *pb.Track {
	if track == nil {
		return nil
	}
	artists := mapArtistsConcurrently(track.Artists)
	albums := mapAlbumsConcurrently(track.Albums)
	return &pb.Track{
		Id:         track.ID,
		Title:      track.Title,
		DurationMs: int32(*track.DurationMs),
		Explicit:   track.Explicit,
		Type:       track.Title,
		Popularity: int32(track.Popularity),
		Artists:    artists,
		Albums:     albums,
	}
}

func MapToAlbumPb(album *entities.Album) *pb.Album {
	if album == nil {
		return nil
	}
	artists := mapArtistsConcurrently(album.Artists)
	genres := mapGenresConcurrently(album.Genres)
	tracks := mapTracksConcurrently(album.Tracks)
	return &pb.Album{
		Id:          album.ID,
		Title:       album.Title,
		AlbumType:   string(album.AlbumType),
		TotalTracks: int32(album.TotalTracks),
		ReleaseDate: timestamppb.New(album.ReleaseDate),
		Type:        string(album.Type),
		Image:       album.Image,
		Popularity:  uint32(album.Popularity),
		Label:       album.Label,
		Artists:     artists,
		Genres:      genres,
		Tracks:      tracks,
	}
}

func mapArtistsConcurrently(artists []*entities.Artist) []*pb.Artist {
	var wg sync.WaitGroup
	result := make([]*pb.Artist, len(artists))
	for i, artist := range artists {
		wg.Add(1)
		go func(i int, artist *entities.Artist) {
			defer wg.Done()
			result[i] = MapToArtistPb(artist)
		}(i, artist)
	}
	wg.Wait()
	return result
}

func mapAlbumsConcurrently(albums []*entities.Album) []*pb.Album {
	var wg sync.WaitGroup
	result := make([]*pb.Album, len(albums))
	for i, album := range albums {
		wg.Add(1)
		go func(i int, album *entities.Album) {
			defer wg.Done()
			result[i] = MapToAlbumPb(album)
		}(i, album)
	}
	wg.Wait()
	return result
}

func mapGenresConcurrently(genres []*entities.Genre) []*pb.Genre {
	var wg sync.WaitGroup
	result := make([]*pb.Genre, len(genres))
	for i, genre := range genres {
		wg.Add(1)
		go func(i int, genre *entities.Genre) {
			defer wg.Done()
			result[i] = MapToGenrePb(genre)
		}(i, genre)
	}
	wg.Wait()
	return result
}

func mapTracksConcurrently(tracks []*entities.Track) []*pb.Track {
	var wg sync.WaitGroup
	result := make([]*pb.Track, len(tracks))
	for i, track := range tracks {
		wg.Add(1)
		go func(i int, track *entities.Track) {
			defer wg.Done()
			result[i] = MapToTrackPb(track)
		}(i, track)
	}
	wg.Wait()
	return result
}
