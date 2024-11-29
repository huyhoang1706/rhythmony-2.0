package com.rhythmony.metadatadgs.service;

import com.rhythmony.metadata.pb.*;
import com.rhythmony.metadatadgs.codegen.types.Track;
import com.rhythmony.metadatadgs.mapper.TrackMapper;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrackServiceClient {
    @GrpcClient("metadata-server")
    private TrackAPIGrpc.TrackAPIBlockingStub trackAPIBlockingStub;
    private final TrackMapper trackMapper;

    public TrackServiceClient(TrackMapper trackMapper) {
        this.trackMapper = trackMapper;
    }

    public List<Track> listSeveralTracks(Integer pageSize, Integer pageNo) {
        ListSeveralTracksRequest request = ListSeveralTracksRequest.newBuilder()
                .setPageSize(pageSize)
                .setPageNo(pageNo)
                .build();
        ListSeveralTracksResponse response = trackAPIBlockingStub.listSeveralTracks(request);
        return response.getTracksList().stream()
                .map(trackMapper::toTrack)
                .toList();
    }

    public List<Track> listTracksByAlbumId(String albumId) {
        ListTracksByAlbumIdRequest request = ListTracksByAlbumIdRequest.newBuilder()
                .setAlbumId(albumId)
                .build();
        ListTracksByAlbumIdResponse response = trackAPIBlockingStub.listTracksByAlbumId(request);
        return response.getTracksList().stream()
                .map(trackMapper::toTrack)
                .toList();
    }

    public Track getTrack(String trackId) {
        GetTrackByIdRequest request = GetTrackByIdRequest.newBuilder()
                .setId(trackId)
                .build();
        GetTrackByIdResponse response = trackAPIBlockingStub.getTrackById(request);
        return trackMapper.toTrack(response.getTrack());
    }
}
