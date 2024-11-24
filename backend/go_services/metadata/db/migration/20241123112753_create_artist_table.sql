-- +goose Up
-- +goose StatementBegin
CREATE TABLE artists (
    id VARCHAR(36) PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ,
    deleted_at TIMESTAMPTZ,
    name VARCHAR(50) NOT NULL,
    bio TEXT,
    image VARCHAR(255),
    popularity INT,
    total_followers BIGINT
);
CREATE INDEX idx_artist_deleted_at ON artists (deleted_at);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS artists;
-- +goose StatementEnd
