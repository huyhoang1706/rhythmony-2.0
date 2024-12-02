package services

import (
	"context"

	"go.uber.org/zap"
	"rhythmony.com/grpc/generated/pb"
	"rhythmony.com/metadata/internal/application/mapper"
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
		Artist: mapper.MapToArtistPb(artist),
	}, nil
}

func (s *ArtistService) ListSeveralArtists(ctx context.Context, request *pb.ListSeveralArtistsRequest) (*pb.ListSeveralArtistsResp, error) {
	s.logger.Info("Get several artists", zap.Uint64("pageSize", request.GetPageSize()), zap.Uint64("pageNo", request.GetPageNo()))

	artistPage, err := s.artistRepository.FindAllByPagination(ctx, int(request.GetPageSize()), int(request.GetPageNo()))
	if err != nil {
		return nil, err
	}
	var res []*pb.Artist
	for _, e := range artistPage.Content {
		artistPb := mapper.MapToArtistPb(e)
		res = append(res, artistPb)
	}
	return &pb.ListSeveralArtistsResp{
		Artists:       res,
		PageSize:      uint64(artistPage.PageSize),
		PageNo:        uint64(artistPage.PageNo),
		TotalPages:    uint64(artistPage.TotalPages),
		TotalElements: uint64(artistPage.TotalElements),
	}, nil
}

func (s *ArtistService) CreateArtist(ctx context.Context, request *pb.CreateArtistRequest) (*pb.CreateArtistResponse, error) {
	s.logger.Info("Create artist", zap.String("name", request.GetName()), zap.String("bio", request.GetBio()))

	artist := entities.NewArtist(request.GetName(), request.GetBio())

	artist, err := s.artistRepository.Save(ctx, artist)
	if err != nil {
		return nil, err
	}
	return &pb.CreateArtistResponse{
		Artist:  mapper.MapToArtistPb(artist),
		Message: "Create artist successfully",
	}, nil
}
func (s *ArtistService) UpdateArtist(ctx context.Context, request *pb.UpdateArtistRequest) (*pb.UpdateArtistResponse, error) {
	s.logger.Info("Update artist", zap.String("id", request.GetId()),
		zap.String("name", request.GetName()),
		zap.String("bio", request.GetBio()))
	artist, err := s.artistRepository.FindByID(ctx, request.GetId())
	if err != nil {
		s.logger.Error("Cannot find artist by id", zap.String("id", request.GetId()))
		return &pb.UpdateArtistResponse{Message: "Fail to update artist"}, err
	}

	artist, err = s.artistRepository.Update(ctx, artist)
	if err != nil {
		return &pb.UpdateArtistResponse{Message: "Fail to update artist"}, err
	}
	return &pb.UpdateArtistResponse{
		Artist:  mapper.MapToArtistPb(artist),
		Message: "Update artist successfully",
	}, nil
}
func (s *ArtistService) DeleteArtist(ctx context.Context, request *pb.DeleteArtistRequest) (*pb.DeleteArtistResponse, error) {
	s.logger.Info("Delete artist", zap.String("id", request.Id))

	if err := s.artistRepository.Delete(ctx, request.GetId()); err != nil {
		return &pb.DeleteArtistResponse{Message: "Fail to delete artist"}, err
	}
	return &pb.DeleteArtistResponse{Message: "Delete artist successfully"}, nil
}

func (s *ArtistService) ListArtistsByAlbumId(ctx context.Context, request *pb.ListArtistsByAlbumIdRequest) (*pb.ListArtistsByAlbumIdResponse, error) {
	s.logger.Info("List artists by", zap.String("albumId", request.GetAlbumId()))

	artists, err := s.artistRepository.FindAllByAlbumId(ctx, request.GetAlbumId())
	if err != nil {
		return nil, err
	}

	var res []*pb.Artist
	for _, artist := range artists {
		res = append(res, mapper.MapToArtistPb(artist))
	}

	return &pb.ListArtistsByAlbumIdResponse{
		Artists: res,
	}, nil
}

func (s *ArtistService) ListArtistsByTrackId(ctx context.Context, request *pb.ListArtistsByTrackIdRequest) (*pb.ListArtistsByTrackIdResponse, error) {
	s.logger.Info("List artist by", zap.String("trackId", request.GetTrackId()))

	artists, err := s.artistRepository.FindAllByTrackId(ctx, request.GetTrackId())

	if err != nil {
		return nil, err
	}

	var res []*pb.Artist
	for _, artist := range artists {
		res = append(res, mapper.MapToArtistPb(artist))
	}

	return &pb.ListArtistsByTrackIdResponse{
		Artist: res,
	}, nil
}
