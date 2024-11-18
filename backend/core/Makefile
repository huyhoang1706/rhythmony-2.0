build:
	go build cmd/api/main.go

run:
	go run cmd/api/main.go

watch:
	air

generate:
	@protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    proto/*.proto