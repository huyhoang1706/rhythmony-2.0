import { Album } from "@/generated/graphql";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PlaylistType = "playlist" | "album";

export interface PlaylistState {
  currentPlaylist: Album | null;
  playlistType: PlaylistType | null;
}

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    currentPlaylist: null,
    playlistType: null,
  } as PlaylistState,
  reducers: {
    setCurrentPlaylist: (
      state,
      action: PayloadAction<{ currentPlaylist: Album; playlistType: PlaylistType }>,
    ) => {
      const { currentPlaylist, playlistType } = action.payload;
      state.currentPlaylist = currentPlaylist;
      state.playlistType = playlistType;
    },
    clearCurrentPlaylist: (state) => {
      state.currentPlaylist = null;
    },
  },
});

export const playlistActions = playlistSlice.actions;
export default playlistSlice.reducer;
