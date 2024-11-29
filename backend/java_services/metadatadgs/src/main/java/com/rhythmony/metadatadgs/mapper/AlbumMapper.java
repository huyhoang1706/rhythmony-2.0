package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Album;

public interface AlbumMapper {
    Album toAlbum(com.rhythmony.metadata.pb.Album album);
}
