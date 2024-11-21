package com.rhythmony.metadata.datafetcher;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.rhythmony.metadata.codegen.types.Genre;

import java.util.List;

@DgsComponent
public class MetadataFetcher {
    @DgsQuery
    public List<Genre> genres() {
        return null;
    }
}
