"use client";

import { cn } from "@/lib/utils";
import PlayingAnimation from "../playing-animation";
import { SongItem } from "@/lib/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { playlistActions } from "@/store/playlist-slice";
import { playerActions } from "@/store/player-slice";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";

interface Props {
  songItems: SongItem[];
  notPlayingElement: React.ReactNode;
  className?: string;
}

export default function PlayPlaylistButton({ notPlayingElement, className, songItems }: Props) {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: RootState) => state.player);
  const { currentPlaylist } = useSelector((state: RootState) => state.playlist);
  const isSamePlaylist = currentPlaylist?.id === songItems[0].album.id;
  const playing = isPlaying && isSamePlaylist;
  const handlePlayButtonClick = usePlayButtonClick();
  const handlePlay = () => {
    if (!currentPlaylist || !isSamePlaylist) {
      dispatch(
        playlistActions.setCurrentPlaylist({
          currentPlaylist: songItems[0].album,
          playlistType: "album",
        }),
      );
      dispatch(playerActions.setPlaylistQueue(songItems.slice(1)));
      dispatch(playerActions.setCurrentTrack(songItems[0]));
      dispatch(playerActions.play());
    } else {
      dispatch(playerActions.togglePlay());
    }
  };
  return (
    <button
      onClick={() => handlePlayButtonClick(handlePlay)}
      className={cn("relative border-none outline-none", className)}
    >
      {playing ? <PlayingAnimation /> : notPlayingElement}
    </button>
  );
}
