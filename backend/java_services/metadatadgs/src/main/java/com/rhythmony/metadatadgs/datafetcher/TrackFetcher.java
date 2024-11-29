package com.rhythmony.metadatadgs.datafetcher;

import com.netflix.graphql.dgs.*;
import com.rhythmony.metadatadgs.codegen.types.Artist;
import com.rhythmony.metadatadgs.codegen.types.Track;
import com.rhythmony.metadatadgs.service.ArtistServiceClient;
import com.rhythmony.metadatadgs.service.TrackServiceClient;

import java.util.List;

@DgsComponent
public class TrackFetcher {
    private final TrackServiceClient trackServiceClient;
    private final ArtistServiceClient artistServiceClient;

    public TrackFetcher(TrackServiceClient trackServiceClient, ArtistServiceClient artistServiceClient) {
        this.trackServiceClient = trackServiceClient;
        this.artistServiceClient = artistServiceClient;
    }

    @DgsQuery
    public List<Track> tracks(@InputArgument Integer pageSize, @InputArgument Integer pageNo) {
        if (pageSize == null || pageSize < 0) {
            pageSize = 10;
        }
        if (pageNo == null || pageNo < 0) {
            pageNo = 0;
        }
        return trackServiceClient.listSeveralTracks(pageSize, pageNo);
    }

    @DgsQuery
    public Track track(@InputArgument String id) {
        return trackServiceClient.getTrack(id);
    }

    @DgsData(parentType = "Track")
    public List<Artist> artists(DgsDataFetchingEnvironment dfe) {
        Track track = dfe.getSourceOrThrow();
        return artistServiceClient.listArtistsByTrackId(track.getId());
    }
}
