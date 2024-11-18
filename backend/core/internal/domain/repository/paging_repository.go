package repository

import (
	"context"
	"rhythmony/core/internal/domain/vo"
)

type IPagingRepository[T any, ID Serializable] interface {
	FindAllByPagination(ctx context.Context, pageSize, pageNo int) (*vo.Page, error)
}
