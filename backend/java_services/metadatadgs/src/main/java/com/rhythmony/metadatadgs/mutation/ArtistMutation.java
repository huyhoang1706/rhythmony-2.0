package com.rhythmony.metadatadgs.mutation;

import com.netflix.graphql.dgs.DgsComponent;
import com.netflix.graphql.dgs.DgsMutation;
import com.netflix.graphql.dgs.InputArgument;
import com.rhythmony.metadatadgs.codegen.types.Artist;
import com.rhythmony.metadatadgs.codegen.types.ArtistInput;
import com.rhythmony.metadatadgs.service.ArtistServiceClient;

@DgsComponent
public class ArtistMutation {
    private final ArtistServiceClient artistServiceClient;

    public ArtistMutation(ArtistServiceClient artistServiceClient) {
        this.artistServiceClient = artistServiceClient;
    }

    @DgsMutation
    public Artist createArtist(@InputArgument("artist") ArtistInput artist) {
        return artistServiceClient.createArtist(artist);
    }

    @DgsMutation
    public Artist updateArtist(@InputArgument("id") String id, @InputArgument("artist") ArtistInput artist) {
        return artistServiceClient.updateArtist(id, artist);
    }

    @DgsMutation
    public String deleteArtist(@InputArgument("id") String id) {
        return artistServiceClient.deleteArtist(id);
    }
}
