-- +goose Up
-- +goose StatementBegin
CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL UNIQUE
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS genres;
-- +goose StatementEnd
