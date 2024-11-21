package services

import (
	"context"
	"go.uber.org/zap"
	"rhythmony.com/grpc/generated/pb"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/domain/repository"
)

type ArtistService struct {
	pb.UnimplementedArtistAPIServer
	artistRepository repository.IArtistRepository
	logger           *zap.Logger
}

func NewArtistService(artistRepository repository.IArtistRepository, logger *zap.Logger) pb.ArtistAPIServer {
	return &ArtistService{
		artistRepository: artistRepository,
		logger:           logger,
	}
}

func (s *ArtistService) GetArtistById(ctx context.Context, request *pb.GetArtistRequest) (*pb.GetArtistResponse, error) {
	s.logger.Info("Get artist by id", zap.String("id", request.GetId()))

	artist, err := s.artistRepository.FindByID(ctx, request.GetId())
	if err != nil {
		return nil, err
	}

	return &pb.GetArtistResponse{
		Artist: mapToArtistPb(artist),
	}, nil
}

func (s *ArtistService) ListSeveralArtists(ctx context.Context, request *pb.ListSeveralArtistsRequest) (*pb.ListSeveralArtistsResp, error) {
	s.logger.Info("Get several artists", zap.Uint64("pageSize", request.GetPageSize()), zap.Uint64("pageNo", request.GetPageNo()))

	artists, err := s.artistRepository.FindAllByPagination(ctx, int(request.GetPageSize()), int(request.GetPageNo()))
	if err != nil {
		return nil, err
	}
	var res []*pb.Artist
	for _, e := range artists.Content {
		artistPb := mapToArtistPb(e)
		res = append(res, artistPb)
	}
	return &pb.ListSeveralArtistsResp{Artists: res}, nil
}

func mapToArtistPb(artist *entities.Artist) *pb.Artist {
	return &pb.Artist{
		Id:         artist.ID,
		Name:       artist.Name,
		Bio:        artist.Bio,
		Type:       string(artist.Type),
		Image:      artist.Image,
		Popularity: artist.Popularity,
	}
}
