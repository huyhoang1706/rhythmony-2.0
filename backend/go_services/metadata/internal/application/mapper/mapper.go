package mapper

import (
	"sync"

	"google.golang.org/protobuf/types/known/timestamppb"
	"rhythmony.com/grpc/generated/pb"
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
		Image:      artist.Image,
		Popularity: artist.Popularity,
		Genres:     genres,
	}
}

func MapToTrackPb(track *entities.Track) *pb.Track {
	if track == nil {
		return nil
	}
	artists := mapSimplifiedArtistConcurrently(track.Artists)
	albums := mapSimplifiedAlbumsConcurrently(track.Albums)

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
		AudioUrl:   track.AudioURL,
		Artists:    artists,
		Albums:     albums,
		Genres:     genres,
	}
}

func MapToAlbumPb(album *entities.Album) *pb.Album {
	if album == nil {
		return nil
	}
	artists := mapSimplifiedArtistConcurrently(album.Artists)
	tracks := mapSimplifiedTracksConcurrently(album.Tracks)

	var genres []string
	for _, genre := range album.Genres {
		genres = append(genres, genre.GetGenreName())
	}

	return &pb.Album{
		Id:          album.ID,
		Title:       album.Title,
		AlbumType:   string(album.AlbumType),
		TotalTracks: int32(album.TotalTracks),
		ReleaseDate: timestamppb.New(album.ReleaseDate),
		Type:        string(vo.ALBUM),
		Image:       album.Image,
		Popularity:  uint32(album.Popularity),
		Label:       album.Label,
		Artists:     artists,
		Genres:      genres,
		Tracks:      tracks,
	}
}

func mapToSimplifiedTrackPb(track *entities.Track) *pb.SimplifiedTrack {
	if track == nil {
		return nil
	}

	var genres []string
	for _, genre := range track.Genres {
		genres = append(genres, genre.GetGenreName())
	}

	artist := mapSimplifiedArtistConcurrently(track.Artists)

	return &pb.SimplifiedTrack{
		Id:         track.ID,
		Title:      track.Title,
		AudioUrl:   track.AudioURL,
		DurationMs: track.DurationMs,
		Explicit:   track.Explicit,
		Lyrics:     track.Lyrics,
		Genres:     genres,
		Artists:    artist,
	}
}

func mapToSimplifiedAlbumPb(album *entities.Album) *pb.SimplifiedAlbum {
	if album == nil {
		return nil
	}
	return &pb.SimplifiedAlbum{
		Id:          album.ID,
		Title:       album.Title,
		AlbumType:   string(album.AlbumType),
		TotalTracks: album.TotalTracks,
		ReleaseDate: timestamppb.New(album.ReleaseDate),
		Image:       album.Image,
		Label:       album.Label,
	}
}

func mapSimplifiedArtistConcurrently(artists []*entities.Artist) []*pb.SimplifiedArtist {
	var wg sync.WaitGroup
	result := make([]*pb.SimplifiedArtist, len(artists))
	for i, artist := range artists {
		wg.Add(1)
		go func(i int, artist *entities.Artist) {
			defer wg.Done()
			result[i] = mapToSimplifiedArtistPb(artist)
		}(i, artist)
	}
	wg.Wait()
	return result
}

func mapToSimplifiedArtistPb(artist *entities.Artist) *pb.SimplifiedArtist {
	if artist == nil {
		return nil
	}
	return &pb.SimplifiedArtist{
		Id:   artist.ID,
		Name: artist.Name,
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

func mapSimplifiedAlbumsConcurrently(albums []*entities.Album) []*pb.SimplifiedAlbum {
	var wg sync.WaitGroup
	result := make([]*pb.SimplifiedAlbum, len(albums))
	for i, album := range albums {
		wg.Add(1)
		go func(i int, album *entities.Album) {
			defer wg.Done()
			result[i] = mapToSimplifiedAlbumPb(album)
		}(i, album)
	}
	wg.Wait()
	return result
}

func mapSimplifiedTracksConcurrently(tracks []*entities.Track) []*pb.SimplifiedTrack {
	var wg sync.WaitGroup
	result := make([]*pb.SimplifiedTrack, len(tracks))
	for i, track := range tracks {
		wg.Add(1)
		go func(i int, track *entities.Track) {
			defer wg.Done()
			result[i] = mapToSimplifiedTrackPb(track)
		}(i, track)
	}
	wg.Wait()
	return result
}
