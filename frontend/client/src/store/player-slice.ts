import { SongItem } from "@/lib/types";
import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

export type RepeatMode = "off" | "one" | "all";
export type PlaybackStatus = "idle" | "playing" | "paused" | "loading";

export interface PlayerState {
  queues: {
    nextInQueue: SongItem[];
    nextFromPlaylist: SongItem[];
    playHistory: SongItem[];
    originalNextFromPlaylist: SongItem[];
  };
  current: SongItem | null;
  isPlaying: boolean;
  playbackStatus: PlaybackStatus;
  repeatMode: RepeatMode;
  shuffleEnabled: boolean;
  volume: number;
}

const playerSlice = createSlice({
  name: "player",
  initialState: {
    queues: {
      nextInQueue: [],
      nextFromPlaylist: [],
      playHistory: [],
      originalNextFromPlaylist: [],
    },
    current: null,
    isPlaying: false,
    playbackStatus: "idle",
    repeatMode: "off",
    shuffleEnabled: false,
    volume: 100,
    prevVolume: 100,
  } as PlayerState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<SongItem>) => {
      // const nextFromPlaylist = state.queues.nextFromPlaylist;
      // if (nextFromPlaylist.length !== 0) {
      //   const index = nextFromPlaylist.indexOf(action.payload);
      //   if (index > -1) {
      //     state.queues.nextFromPlaylist =
      //   }
      // }
      state.current = action.payload;
    },
    play: (state) => {
      state.isPlaying = true;
      state.playbackStatus = "playing";
    },
    pause: (state) => {
      state.isPlaying = false;
      state.playbackStatus = "paused";
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
      state.playbackStatus = state.isPlaying ? "playing" : "paused";
    },
    setPlaylistQueue: (state, action: PayloadAction<SongItem[]>) => {
      state.queues.nextFromPlaylist = action.payload;
      state.queues.originalNextFromPlaylist = [...action.payload];
    },
    addToPlayHistory: (state, action: PayloadAction<SongItem[]>) => {
      state.queues.playHistory = action.payload;
    },
    addToQueue: (
      state,
      action: PayloadAction<{ item: SongItem; queueType: keyof PlayerState["queues"] }>,
    ) => {
      const { item, queueType } = action.payload;
      state.queues[queueType].push(item);
    },
    removeFromQueue: (
      state,
      action: PayloadAction<{ trackId: string; queueType: keyof PlayerState["queues"] }>,
    ) => {
      const { trackId, queueType } = action.payload;
      state.queues[queueType] = state.queues[queueType].filter((item) => item.track.id !== trackId);
    },
    resetQueue: (state) => {
      if (state.queues.nextFromPlaylist.length === 0) {
        const history = state.queues.playHistory.slice(1);
        if (state.current) {
          state.queues.nextFromPlaylist = [...history, state.current];
        }
        state.current = state.queues.playHistory[0];
      }
    },
    skipToNext: (state) => {
      const getNextTrack = () => {
        if (state.queues.nextInQueue.length > 0) {
          const [nextTrack, ...remainingTracks] = state.queues.nextInQueue;
          state.queues.nextInQueue = remainingTracks;
          return nextTrack;
        } else if (state.queues.nextFromPlaylist.length > 0) {
          const [nextTrack, ...remainingTracks] = state.queues.nextFromPlaylist;
          state.queues.nextFromPlaylist = remainingTracks;
          return nextTrack;
        }
        return null;
      };

      if (state.repeatMode === "all" && state.queues.nextFromPlaylist.length === 0) {
        const history = state.queues.playHistory.slice(1);
        if (state.current) {
          state.queues.nextFromPlaylist = [...history, state.current];
        }
        state.current = state.queues.playHistory[0];
        state.queues.playHistory = [];
        return;
      }

      const nextTrack = getNextTrack();
      if (nextTrack) {
        if (state.current) {
          state.queues.playHistory.push(state.current);
        }
        state.current = nextTrack;
      }
    },
    skipToPrevious: (state) => {
      if (state.repeatMode === "all" && state.queues.playHistory.length === 0) {
        if (state.current) {
          const remainingTracks = state.queues.nextFromPlaylist;
          const playHistory = [state.current, ...remainingTracks];
          state.current = remainingTracks[remainingTracks.length - 1];
          state.queues.nextFromPlaylist = [];
          state.queues.playHistory = playHistory;
          return;
        }
      }
      if (state.queues.playHistory.length > 0) {
        if (state.current) {
          state.queues.nextFromPlaylist.unshift(state.current);
        }
        const previousTrack = state.queues.playHistory.pop();
        if (previousTrack) {
          state.current = previousTrack;
        }
      }
    },
    setPlaybackStatus: (state, action: PayloadAction<PlaybackStatus>) => {
      state.playbackStatus = action.payload;
    },
    setRepeatMode: (state, action: PayloadAction<RepeatMode>) => {
      state.repeatMode = action.payload;
    },
    toggleShuffle: (state) => {
      // TODO: restore the index of current
      if (state.shuffleEnabled) {
        state.queues.nextFromPlaylist = [...state.queues.originalNextFromPlaylist];
      } else {
        // When turning shuffle on, save current order as original and then shuffle
        state.queues.originalNextFromPlaylist = [...state.queues.nextFromPlaylist];
        const queue = [...state.queues.nextFromPlaylist];
        for (let i = queue.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [queue[i], queue[j]] = [queue[j], queue[i]];
        }
        state.queues.nextFromPlaylist = queue;
      }
      state.shuffleEnabled = !state.shuffleEnabled;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
