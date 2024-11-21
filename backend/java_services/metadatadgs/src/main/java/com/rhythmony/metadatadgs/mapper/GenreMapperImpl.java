package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Genre;
import org.springframework.stereotype.Component;

@Component
public class GenreMapperImpl implements GenreMapper {

    @Override
    public Genre toGenre(com.rhythmony.metadata.pb.Genre genrePb) {
        if (genrePb == null) {
            return null;
        }
        return Genre.newBuilder()
                .name(genrePb.getName())
                .build();
    }
}
