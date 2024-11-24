package services

import (
	"context"

	"go.uber.org/zap"
	"rhythmony.com/grpc/generated/pb"
	"rhythmony.com/metadata/internal/application/mapper"
	"rhythmony.com/metadata/internal/domain/entities"
	"rhythmony.com/metadata/internal/infrastructure/store"
)

type TrackService struct {
	pb.UnimplementedTrackAPIServer
	trackRepository *store.TrackRepository
	logger          *zap.Logger
}

func NewTrackService(trackRepository *store.TrackRepository, logger *zap.Logger) pb.TrackAPIServer {
	return &TrackService{
		trackRepository: trackRepository,
		logger:          logger,
	}
}

func (s *TrackService) GetTrackById(ctx context.Context, request *pb.GetTrackByIdRequest) (*pb.GetTrackByIdResponse, error) {
	s.logger.Info("Get track by id", zap.String("id", request.GetId()))

	track, err := s.trackRepository.FindByID(ctx, request.GetId())
	if err != nil {
		return nil, err
	}

	return &pb.GetTrackByIdResponse{Track: mapper.MapToTrackPb(track)}, nil
}

func (s *TrackService) ListSeveralTracks(ctx context.Context, request *pb.ListSeveralTracksRequest) (*pb.ListSeveralTracksResponse, error) {
	s.logger.Info("List several tracks", zap.Uint64("pageSize", request.GetPageSize()), zap.Uint64("pageNo", request.GetPageNo()))

	trackPage, err := s.trackRepository.FindAllByPagination(ctx, int(request.GetPageSize()), int(request.GetPageNo()))
	if err != nil {
		return nil, err
	}
	var res []*pb.Track
	for _, e := range trackPage.Content {
		res = append(res, mapper.MapToTrackPb(e))
	}
	return &pb.ListSeveralTracksResponse{Tracks: res}, nil
}

func (s *TrackService) CreateTrack(ctx context.Context, request *pb.CreateTrackRequest) (*pb.CreateTrackResponse, error) {
	s.logger.Info("Create track",
		zap.String("title", request.GetTitle()),
		zap.Int32("disc_number", request.GetDiscNumber()),
		zap.Bool("explicit", request.GetExplicit()),
		zap.String("lyrics", request.GetLyrics()),
	)
	track := entities.NewTrack(request.GetTitle(), request.Explicit, request.GetLyrics(), nil)
	savedTrack, err := s.trackRepository.Save(ctx, track)
	if err != nil {
		return nil, err
	}
	return &pb.CreateTrackResponse{
		Track:   mapper.MapToTrackPb(savedTrack),
		Message: "Create track successfully",
	}, nil
}

func (s *TrackService) UpdateTrack(ctx context.Context, request *pb.UpdateTrackRequest) (*pb.UpdateTrackResponse, error) {
	return nil, nil
}

func (s *TrackService) DeleteTrack(ctx context.Context, request *pb.DeleteTrackRequest) (*pb.DeleteTrackResponse, error) {
	return nil, nil
}
