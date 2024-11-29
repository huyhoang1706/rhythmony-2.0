package com.rhythmony.metadatadgs.mapper;

import com.rhythmony.metadatadgs.codegen.types.Track;
import org.springframework.stereotype.Component;

@Component
public class TrackMapperImpl implements TrackMapper {
    @Override
    public Track toTrack(com.rhythmony.metadata.pb.Track track) {
        if (track == null) {
            return null;
        }
        return Track.newBuilder()
                .id(track.getId())
                .title(track.getTitle())
                .type(track.getType())
                .audioUrl(track.getAudioUrl())
                .durationMs(track.getDurationMs())
                .explicit(track.getExplicit())
                .lyrics(track.getLyrics())
                .popularity(track.getPopularity())
                .genres(track.getGenresList())
                .build();
    }
}
