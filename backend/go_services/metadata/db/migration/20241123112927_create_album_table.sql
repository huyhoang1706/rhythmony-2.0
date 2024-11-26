-- +goose Up
-- +goose StatementBegin
CREATE TABLE albums (
    id VARCHAR(36) PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ,
    deleted_at TIMESTAMPTZ,
    title VARCHAR(60) NOT NULL,
    album_type VARCHAR(15),
    total_tracks INT,
    release_date TIMESTAMPTZ NOT NULL,
    image VARCHAR(255),
    label VARCHAR(255),
    popularity INT
);
CREATE INDEX idx_albums_deleted_at ON albums (deleted_at);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
-- +goose StatementEnd
