package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Album;
import com.rhythmony.metadatadgs.codegen.types.SimplifiedAlbum;

public interface AlbumMapper {
    Album toAlbum(com.rhythmony.metadata.pb.Album album);
}
