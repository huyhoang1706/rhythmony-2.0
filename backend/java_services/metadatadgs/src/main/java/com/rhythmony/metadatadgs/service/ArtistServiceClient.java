package com.rhythmony.metadatadgs.service;

import com.rhythmony.metadata.pb.*;
import com.rhythmony.metadatadgs.codegen.types.Artist;
import com.rhythmony.metadatadgs.codegen.types.ArtistInput;
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

    public Artist getArtistById(String id) {
        GetArtistResponse response = artistAPIBlockingStub.getArtistById(GetArtistRequest.newBuilder()
                .setId(id)
                .build());
        return artistMapper.toArtist(response.getArtist());
    }

    public Artist createArtist(ArtistInput artistInput) {
        CreateArtistRequest request = CreateArtistRequest.newBuilder()
                .setName(artistInput.getName())
                .setBio(artistInput.getBio())
                .build();
        CreateArtistResponse response = artistAPIBlockingStub.createArtist(request);
        return artistMapper.toArtist(response.getArtist());
    }

    public Artist updateArtist(String id, ArtistInput artistInput) {
        UpdateArtistRequest request = UpdateArtistRequest.newBuilder()
                .setId(id)
                .setName(artistInput.getName())
                .setBio(artistInput.getBio())
                .build();
        UpdateArtistResponse response = artistAPIBlockingStub.updateArtist(request);
        return artistMapper.toArtist(response.getArtist());
    }

    public String deleteArtist(String id) {
        DeleteArtistRequest request = DeleteArtistRequest.newBuilder()
                .setId(id)
                .build();
        DeleteArtistResponse response = artistAPIBlockingStub.deleteArtist(request);
        return response.getMessage();
    }
}
