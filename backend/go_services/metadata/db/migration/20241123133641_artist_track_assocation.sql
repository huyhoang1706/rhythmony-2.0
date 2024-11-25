-- +goose Up
-- +goose StatementBegin
CREATE TABLE artist_tracks (
    artist_id VARCHAR(36) NOT NULL,
    track_id VARCHAR(36) NOT NULL
);
ALTER TABLE artist_tracks ADD CONSTRAINT fk_artist FOREIGN KEY(artist_id) REFERENCES artists(id);
ALTER TABLE artist_tracks ADD CONSTRAINT fk_track FOREIGN KEY(track_id) REFERENCES tracks(id);
ALTER TABLE artist_tracks ADD PRIMARY KEY(artist_id, track_id);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS artist_tracks;
-- +goose StatementEnd
