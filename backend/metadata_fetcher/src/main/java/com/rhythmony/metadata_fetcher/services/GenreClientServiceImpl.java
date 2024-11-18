package com.rhythmony.metadata_fetcher.services;

import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class GenreClientServiceImpl implements GenreClientService {
    @Value("${metadata.grpc.service.host}")
    private String metaDataServiceHost;
    @Value("${metadata.grpc.service.port}")
    private int metaDataServicePort;

    public List<pb.Genre> getGenres() {
        ManagedChannel channel = ManagedChannelBuilder.forAddress(metaDataServiceHost, metaDataServicePort)
                .usePlaintext().build();
        pb.GenreServiceGrpc.GenreServiceBlockingStub stub = pb.GenreServiceGrpc.newBlockingStub(channel);
        pb.GenreRequest request = pb.GenreRequest.newBuilder().build();
        log.info("Sending request to metadata service");
        pb.GenreResponse response = stub.getGenres(request);
        return response.getGenresList();
    }
}
