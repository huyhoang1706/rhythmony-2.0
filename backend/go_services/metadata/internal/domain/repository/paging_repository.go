package repository

import (
	"context"

	"rhythmony.com/metadata/internal/domain/vo"
)

type IPagingRepository[T any] interface {
	FindAllByPagination(ctx context.Context, pageSize, pageNo int) (*vo.Page[T], error)
}
