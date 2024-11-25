-- +goose Up
-- +goose StatementBegin
CREATE TABLE album_artists (
    album_id VARCHAR(36) NOT NULL,
    artist_id VARCHAR(36) NOT NULL
);
ALTER TABLE album_artists ADD CONSTRAINT fk_album FOREIGN KEY(album_id) REFERENCES albums(id);
ALTER TABLE album_artists ADD CONSTRAINT fk_artist FOREIGN KEY(artist_id) REFERENCES artists(id);
ALTER TABLE album_artists ADD PRIMARY KEY(album_id, artist_id);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS album_artists;
-- +goose StatementEnd
