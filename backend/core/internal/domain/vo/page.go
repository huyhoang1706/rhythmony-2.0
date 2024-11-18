package vo

type Page struct {
	PageSize      int
	PageNo        int
	TotalPages    int
	TotalElements int64
	Content       interface{}
}
