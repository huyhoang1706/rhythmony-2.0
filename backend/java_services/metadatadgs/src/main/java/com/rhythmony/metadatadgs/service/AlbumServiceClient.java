package com.rhythmony.metadatadgs.service;

import com.rhythmony.metadata.pb.AlbumAPIGrpc;
import com.rhythmony.metadata.pb.GetAlbumRequest;
import com.rhythmony.metadata.pb.GetAlbumResponse;
import com.rhythmony.metadata.pb.ListSeveralAlbumsRequest;
import com.rhythmony.metadatadgs.codegen.types.Album;
import com.rhythmony.metadatadgs.mapper.AlbumMapper;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumServiceClient {
    private final AlbumMapper albumMapper;

    public AlbumServiceClient(AlbumMapper albumMapper) {
        this.albumMapper = albumMapper;
    }

    @GrpcClient("metadata-server")
    private AlbumAPIGrpc.AlbumAPIBlockingStub albumAPIBlockingStub;

    public List<Album> listAlbums(Integer pageSize, Integer pageNo) {
        ListSeveralAlbumsRequest request = ListSeveralAlbumsRequest.newBuilder()
                .setPageSize(pageSize)
                .setPageNo(pageNo)
                .build();
        return albumAPIBlockingStub.listSeveralAlbums(request).getAlbumsList().stream()
                .map(albumMapper::toAlbum)
                .toList();
    }

    public Album getAlbumById(String id) {
        GetAlbumRequest request = GetAlbumRequest.newBuilder()
                .setId(id)
                .build();
        GetAlbumResponse response = albumAPIBlockingStub.getAlbumById(request);
        return albumMapper.toAlbum(response.getAlbum());
    }

    public Album createAlbum() {
        return null;
    }

    public Album updateAlbum(String id) {
        return null;
    }

    public String deleteAlbum(String id) {
        return null;
    }
}
