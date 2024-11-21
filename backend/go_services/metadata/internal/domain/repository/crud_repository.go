package repository

import (
	"context"
	"github.com/google/uuid"
)

type Serializable interface {
	string | int | int16 | int32 | int64 | uuid.UUID
}

type ICrudRepository[T any, ID Serializable] interface {
	Save(ctx context.Context, entity T) (T, error)
	FindByID(ctx context.Context, id ID) (T, error)
	Update(ctx context.Context, entity T) (T, error)
	Delete(ctx context.Context, id ID) error
}
