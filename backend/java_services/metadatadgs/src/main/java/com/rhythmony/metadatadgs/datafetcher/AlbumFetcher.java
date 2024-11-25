package com.rhythmony.metadatadgs.datafetcher;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsQuery;
import com.netflix.graphql.dgs.InputArgument;
import com.rhythmony.metadatadgs.codegen.types.Album;
import com.rhythmony.metadatadgs.service.AlbumServiceClient;

import java.util.List;

@DgsComponent
public class AlbumFetcher {
    private final AlbumServiceClient albumServiceClient;

    public AlbumFetcher(AlbumServiceClient albumServiceClient) {
        this.albumServiceClient = albumServiceClient;
    }

    @DgsQuery
    public List<Album> albums(@InputArgument Integer pageSize, @InputArgument Integer pageNo) {
        if (pageSize == null || pageSize <= 0) {
            pageSize = 10;
        }
        if (pageNo == null || pageNo <= 0) {
            pageNo = 1;
        }
        return albumServiceClient.listAlbums(pageSize, pageNo);
    }

    @DgsQuery
    public Album album(@InputArgument String id) {
        return albumServiceClient.getAlbumById(id);
    }
}
