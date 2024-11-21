package com.rhythmony.metadatadgs.datafetcher;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.rhythmony.metadatadgs.codegen.types.Genre;
import com.rhythmony.metadatadgs.service.GenreServiceClient;

import java.util.List;

@DgsComponent
public class GenreFetcher {
    private final GenreServiceClient genreServiceClient;

    public GenreFetcher(GenreServiceClient genreServiceClient) {
        this.genreServiceClient = genreServiceClient;
    }

    @DgsQuery
    public List<Genre> genres() {
        return genreServiceClient.listAllGenres();
    }
}
