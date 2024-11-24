-- +goose Up
-- +goose StatementBegin
CREATE TABLE album_tracks (
    album_id VARCHAR(36) NOT NULL,
    track_id VARCHAR(36) NOT NULL,
    disc_number INT
);
ALTER TABLE album_tracks ADD CONSTRAINT fk_album FOREIGN KEY(album_id) REFERENCES albums(id);
ALTER TABLE album_tracks ADD CONSTRAINT fk_track FOREIGN KEY(track_id) REFERENCES tracks(id);
ALTER TABLE album_tracks ADD PRIMARY KEY(album_id, track_id);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS album_tracks;
-- +goose StatementEnd
