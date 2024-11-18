package services

import (
	"rhythmony/core/internal/domain/vo"
)

type ITrackService interface {
	GetAllTracks() error
	GetAllTracksByPagination(pageSize, pageNo int) (*vo.Page, error)
	GetTrackById(id string) error
	CreateTrack() error
	UpdateTrack() error
	DeleteTrack(id string) error
}
