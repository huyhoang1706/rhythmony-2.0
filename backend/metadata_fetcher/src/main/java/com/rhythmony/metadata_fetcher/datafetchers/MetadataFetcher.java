package com.rhythmony.metadata_fetcher.datafetchers;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.rhythmony.metadata_fetcher.codegen.types.Genre;
import com.rhythmony.metadata_fetcher.mapper.GenreMapper;
import com.rhythmony.metadata_fetcher.services.GenreClientService;
import lombok.RequiredArgsConstructor;

import java.util.List;

@DgsComponent
@RequiredArgsConstructor
public class MetadataFetcher {
    private final GenreClientService genreClientService;
    private final GenreMapper mapper;

    @DgsQuery
    public List<Genre> genres() {
        return genreClientService.getGenres().stream().map(mapper::mapGenre).toList();
    }
}
