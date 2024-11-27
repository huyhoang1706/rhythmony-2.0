package com.rhythmony.metadatadgs.datafetcher;

import com.netflix.graphql.dgs.*;
import com.rhythmony.metadatadgs.codegen.types.*;
import com.rhythmony.metadatadgs.service.AlbumServiceClient;
import com.rhythmony.metadatadgs.service.ArtistServiceClient;
import com.rhythmony.metadatadgs.service.TrackServiceClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@DgsComponent
public class AlbumFetcher {
    private final AlbumServiceClient albumServiceClient;
    private final ArtistServiceClient artistServiceClient;
    private final TrackServiceClient trackServiceClient;

    private static final Logger logger = LoggerFactory.getLogger(AlbumFetcher.class);

    public AlbumFetcher(
            AlbumServiceClient albumServiceClient,
            ArtistServiceClient artistServiceClient,
            TrackServiceClient trackServiceClient) {
        this.albumServiceClient = albumServiceClient;
        this.artistServiceClient = artistServiceClient;
        this.trackServiceClient = trackServiceClient;
    }

    @DgsQuery
    public List<Album> albums(@InputArgument Integer pageSize, @InputArgument Integer pageNo) {
        if (pageSize == null || pageSize <= 0) {
            pageSize = 10;
        }
        if (pageNo == null || pageNo <= 0) {
            pageNo = 1;
        }
        logger.info("Fetching album");
        return albumServiceClient.listAlbums(pageSize, pageNo);
    }

    @DgsQuery
    public Album album(@InputArgument String id) {
        return albumServiceClient.getAlbumById(id);
    }

    @DgsData(parentType = "Album")
    public List<Artist> artists(DgsDataFetchingEnvironment dfe) {
        Album album = dfe.getSourceOrThrow();
        logger.info("Fetching artists for album: {}", album.getId());
        return artistServiceClient.listArtistsByAlbumId(album.getId());
    }

    @DgsData(parentType = "Album")
    public List<Track> tracks(DgsDataFetchingEnvironment dfe) {
        Album album = dfe.getSourceOrThrow();
        logger.info("Fetching tracks for album: {}", album.getId());
        return trackServiceClient.listTracksByAlbumId(album.getId());
    }
}
