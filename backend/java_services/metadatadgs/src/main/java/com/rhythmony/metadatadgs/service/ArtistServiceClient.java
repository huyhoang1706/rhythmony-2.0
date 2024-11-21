package com.rhythmony.metadatadgs.service;

import com.rhythmony.metadata.pb.ArtistAPIGrpc;
import com.rhythmony.metadata.pb.ListSeveralArtistsRequest;
import com.rhythmony.metadata.pb.ListSeveralArtistsResp;
import com.rhythmony.metadatadgs.codegen.types.Artist;
import com.rhythmony.metadatadgs.mapper.ArtistMapper;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistServiceClient {
    @GrpcClient("metadata-server")
    private ArtistAPIGrpc.ArtistAPIBlockingStub artistAPIBlockingStub;
    private final ArtistMapper artistMapper;

    public ArtistServiceClient(ArtistMapper artistMapper) {
        this.artistMapper = artistMapper;
    }

    public List<Artist> listArtists(Integer pageSize, Integer pageNo) {
        ListSeveralArtistsResp response = artistAPIBlockingStub.listSeveralArtists(ListSeveralArtistsRequest
                .newBuilder()
                .setPageSize(pageSize)
                .setPageNo(pageNo)
                .build());
        return response.getArtistsList().stream()
                .map(artistMapper::toArtist)
                .toList();
    }
}
