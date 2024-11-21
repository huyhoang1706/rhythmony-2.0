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
        return artistServiceClient.listArtists(pageSize, pageNo);
    }
}
