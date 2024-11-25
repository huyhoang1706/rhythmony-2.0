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
                .albumType(album.getAlbumType())
                .type(album.getType())
                .releaseDate(album.getReleaseDate().toString())
                .totalTracks(album.getTotalTracks())
                .label(album.getLabel())
                .popularity(album.getPopularity())
                .build();
    }
}
