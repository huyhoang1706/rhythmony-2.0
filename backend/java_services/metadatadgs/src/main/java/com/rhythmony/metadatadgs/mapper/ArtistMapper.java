package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Artist;
import com.rhythmony.metadatadgs.codegen.types.SimplifiedArtist;

public interface ArtistMapper {
    Artist toArtist(com.rhythmony.metadata.pb.Artist artistPb);
}
