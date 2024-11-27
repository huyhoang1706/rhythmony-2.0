package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.SimplifiedTrack;
import com.rhythmony.metadatadgs.codegen.types.Track;

public interface TrackMapper {
    Track toTrack(com.rhythmony.metadata.pb.Track track);
}
