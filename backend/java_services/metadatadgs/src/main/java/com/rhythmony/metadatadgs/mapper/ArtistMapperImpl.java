package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Artist;
import org.springframework.stereotype.Component;

@Component
public class ArtistMapperImpl implements ArtistMapper {
    @Override
    public Artist toArtist(com.rhythmony.metadata.pb.Artist artistPb) {
        if (artistPb == null) {
            return null;
        }
        return Artist.newBuilder()
                .id(artistPb.getId())
                .name(artistPb.getName())
                .bio(artistPb.getBio())
                .image(artistPb.getImage())
                .popularity(artistPb.getPopularity())
                .type(artistPb.getType())
                .build();
    }
}
