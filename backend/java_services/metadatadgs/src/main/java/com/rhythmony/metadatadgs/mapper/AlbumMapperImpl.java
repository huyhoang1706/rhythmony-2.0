package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Album;
import org.springframework.stereotype.Component;


@Component
public class AlbumMapperImpl implements AlbumMapper {
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
