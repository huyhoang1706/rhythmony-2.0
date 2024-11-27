package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Album;
import com.rhythmony.metadatadgs.codegen.types.SimplifiedAlbum;
import org.springframework.stereotype.Component;

@Component
public class AlbumMapperImpl implements AlbumMapper {
    private final ArtistMapper artistMapper;
    private final TrackMapper trackMapper;

    public AlbumMapperImpl(ArtistMapper artistMapper, TrackMapper trackMapper) {
        this.artistMapper = artistMapper;
        this.trackMapper = trackMapper;
    }

    @Override
    public Album toAlbum(com.rhythmony.metadata.pb.Album album) {
        if (album == null) {
            return null;
        }
        return Album.newBuilder()
                .id(album.getId())
                .title(album.getTitle())
                .image(album.getImage())
                .genres(album.getGenresList())
                .albumType(album.getAlbumType())
                .type(album.getType())
                .releaseDate(album.getReleaseDate())
                .totalTracks(album.getTotalTracks())
                .label(album.getLabel())
                .popularity(album.getPopularity())
                .build();
    }
}
