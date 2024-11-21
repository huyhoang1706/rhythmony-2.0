package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Artist;

public interface ArtistMapper {
    Artist toArtist(com.rhythmony.metadata.pb.Artist artistPb);
}
