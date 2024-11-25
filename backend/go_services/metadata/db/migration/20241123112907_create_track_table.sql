-- +goose Up
-- +goose StatementBegin
CREATE TABLE tracks (
    id VARCHAR(36) PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ,
    deleted_at TIMESTAMPTZ,
    audio_url VARCHAR(255),
    title VARCHAR(60) NOT NULL,
    duration_ms INT,
    explicit BOOLEAN,
    lyrics TEXT,
    popularity INT
);
CREATE INDEX idx_tracks_deleted_at ON tracks (deleted_at); 
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS tracks;
-- +goose StatementEnd
