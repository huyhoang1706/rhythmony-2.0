package com.rhythmony.metadatadgs.datafetcher;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;
import com.rhythmony.metadatadgs.codegen.types.Artist;
import com.rhythmony.metadatadgs.service.ArtistServiceClient;

import java.util.List;

@DgsComponent
public class ArtistFetcher {
    private final ArtistServiceClient artistServiceClient;

    public ArtistFetcher(ArtistServiceClient artistServiceClient) {
        this.artistServiceClient = artistServiceClient;
    }

    @DgsQuery
    public List<Artist> artists(@InputArgument Integer pageSize, @InputArgument Integer pageNo) {
        if (pageSize == null || pageSize <= 0) {
            pageSize = 10;
        }
        if (pageNo == null || pageNo <= 0) {
            pageNo = 1;
        }
        return artistServiceClient.listArtists(pageSize, pageNo);
    }

    @DgsQuery
    public Artist artist(@InputArgument String id) {
        return artistServiceClient.getArtistById(id);
    }
}
