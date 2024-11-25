-- +goose Up
-- +goose StatementBegin
CREATE TABLE album_genres (
    album_id VARCHAR(36) NOT NULL,
    genre_id BIGINT NOT NULL
);
ALTER TABLE album_genres ADD CONSTRAINT fk_album FOREIGN KEY(album_id) REFERENCES albums(id);
ALTER TABLE album_genres ADD CONSTRAINT fk_genre FOREIGN KEY(genre_id) REFERENCES genres(id);
ALTER TABLE album_genres ADD PRIMARY KEY(album_id, genre_id);

CREATE TABLE artist_genres(
    artist_id VARCHAR(36) NOT NULL,
    genre_id BIGINT NOT NULL
);
ALTER TABLE artist_genres ADD CONSTRAINT fk_artist FOREIGN KEY(artist_id) REFERENCES artists(id);
ALTER TABLE artist_genres ADD CONSTRAINT fk_genre FOREIGN KEY(genre_id) REFERENCES genres(id);
ALTER TABLE artist_genres ADD PRIMARY KEY(artist_id, genre_id);

CREATE TABLE track_genres(
    track_id VARCHAR(36) NOT NULL,
    genre_id BIGINT NOT NULL
);
ALTER TABLE track_genres ADD CONSTRAINT fk_track FOREIGN KEY(track_id) REFERENCES tracks(id);
ALTER TABLE track_genres ADD CONSTRAINT fk_genre FOREIGN KEY(genre_id) REFERENCES genres(id);
ALTER TABLE track_genres ADD PRIMARY KEY(track_id, genre_id);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE IF EXISTS album_genres;
DROP TABLE IF EXISTS artist_genres;
DROP TABLE IF EXISTS track_genres;
-- +goose StatementEnd
