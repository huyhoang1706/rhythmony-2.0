package services

import (
	"context"

	"go.uber.org/zap"
	"rhythmony.com/grpc/generated/pb"
	"rhythmony.com/metadata/internal/application/mapper"
	"rhythmony.com/metadata/internal/domain/repository"
)

type AlbumService struct {
	pb.UnimplementedAlbumAPIServer
	logger          *zap.Logger
	albumRepository repository.IAlbumRepository
	trackRepository repository.ITrackRepository
}

func NewAlbumService(
	albumRepository repository.IAlbumRepository,
	trackRepository repository.ITrackRepository,
	logger *zap.Logger) pb.AlbumAPIServer {
	return &AlbumService{
		albumRepository: albumRepository,
		trackRepository: trackRepository,
		logger:          logger,
	}
}

func (s *AlbumService) GetAlbumById(ctx context.Context, request *pb.GetAlbumRequest) (*pb.GetAlbumResponse, error) {
	s.logger.Info("Get album by id", zap.String("id", request.GetId()))
	album, err := s.albumRepository.FindByID(ctx, request.GetId())
	if err != nil {
		s.logger.Error("Album not found", zap.Error(err))
		return nil, err
	}

	return &pb.GetAlbumResponse{
		Album: mapper.MapToAlbumPb(album),
	}, nil
}

func (s *AlbumService) ListSeveralAlbums(ctx context.Context, request *pb.ListSeveralAlbumsRequest) (*pb.ListSeveralAlbumsResponse, error) {
	s.logger.Info("List several albums", zap.Uint("pageSize", uint(request.GetPageSize())), zap.Uint("pageNo", uint(request.GetPageNo())))

	albumPage, err := s.albumRepository.FindAllByPagination(ctx, int(request.GetPageSize()), int(request.GetPageNo()))
	if err != nil {
		s.logger.Error("Fail to fetch albums", zap.Error(err))
		return nil, err
	}

	var res []*pb.Album
	for _, album := range albumPage.Content {
		res = append(res, mapper.MapToAlbumPb(album))
	}

	return &pb.ListSeveralAlbumsResponse{
		PageSize:      uint64(albumPage.PageSize),
		PageNo:        uint64(albumPage.PageNo),
		TotalPages:    uint64(albumPage.TotalPages),
		TotalElements: uint64(albumPage.TotalElements),
		Albums:        res,
	}, nil
}

func (s *AlbumService) CreateAlbum(ctx context.Context, request *pb.CreateAlbumRequest) (*pb.CreateAlbumResponse, error) {
	panic("TODO")
}

func (s *AlbumService) UpdateAlbum(ctx context.Context, request *pb.UpdateAlbumRequest) (*pb.UpdateAlbumResponse, error) {
	panic("TODO")
}

func (s *AlbumService) DeleteAlbum(ctx context.Context, request *pb.DeleteAlbumRequest) (*pb.DeleteAlbumResponse, error) {
	panic("TODO")
}
