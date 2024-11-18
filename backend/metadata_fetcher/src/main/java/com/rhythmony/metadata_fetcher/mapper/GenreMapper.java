package com.rhythmony.metadata_fetcher.mapper;

import com.rhythmony.metadata_fetcher.codegen.types.Genre;
import org.springframework.stereotype.Component;

@Component
public class GenreMapper {
    public Genre mapGenre(pb.Genre genre) {
        if (genre == null) {
            return null;
        }
        return Genre.newBuilder()
                .name(genre.getName())
                .build();
    }
}
