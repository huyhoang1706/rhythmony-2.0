-- +goose Up
-- +goose StatementBegin
ALTER TABLE album_tracks
    RENAME COLUMN disc_number TO track_order;
ALTER TABLE album_tracks ADD COLUMN created_at TIMESTAMPTZ;
ALTER TABLE album_tracks ADD COLUMN updated_at TIMESTAMPTZ;
ALTER TABLE album_tracks ADD COLUMN deleted_at TIMESTAMPTZ;
CREATE INDEX idx_album_tracks_deleted_at ON album_tracks(deleted_at);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP INDEX IF EXISTS idx_album_tracks_deleted_at;
ALTER TABLE album_tracks DROP COLUMN deleted_at;
ALTER TABLE album_tracks DROP COLUMN updated_at;
ALTER TABLE album_tracks DROP COLUMN created_at;
ALTER TABLE album_tracks RENAME COLUMN track_order TO disc_number;
-- +goose StatementEnd
