package com.rhythmony.metadatadgs.service;

import com.rhythmony.metadata.pb.GenreAPIGrpc;
import com.rhythmony.metadata.pb.ListAllGenresRequest;
import com.rhythmony.metadata.pb.ListAllGenresResponse;
import com.rhythmony.metadatadgs.codegen.types.Genre;
import com.rhythmony.metadatadgs.mapper.GenreMapper;
import net.devh.boot.grpc.client.inject.GrpcClient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreServiceClient {
    @GrpcClient("metadata-server")
    private GenreAPIGrpc.GenreAPIBlockingStub genreAPIBlockingStub;
    private final GenreMapper mapper;

    public GenreServiceClient(GenreMapper mapper) {
        this.mapper = mapper;
    }

    public List<Genre> listAllGenres() {
        ListAllGenresResponse response = genreAPIBlockingStub.listAllGenres(ListAllGenresRequest.newBuilder().build());
        return response.getGenresList()
                .stream()
                .map(mapper::toGenre)
                .toList();
    }
}
