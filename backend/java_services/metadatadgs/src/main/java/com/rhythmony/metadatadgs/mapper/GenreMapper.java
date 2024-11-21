package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Genre;

public interface GenreMapper {
    Genre toGenre(com.rhythmony.metadata.pb.Genre genrePb);
}
