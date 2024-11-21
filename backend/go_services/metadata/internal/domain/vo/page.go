package vo

type Page[T any] struct {
	PageSize      int
	PageNo        int
	TotalPages    int
	TotalElements int64
	Content       []T
}
