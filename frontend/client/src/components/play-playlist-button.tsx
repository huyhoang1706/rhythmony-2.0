"use client";

import { cn } from "@/lib/utils";
import PlayingAnimation from "./playing-animation";
import { QueueItem } from "@/lib/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { playlistActions } from "@/store/playlist-slice";
import { playerActions } from "@/store/player-slice";

interface Props {
  queueItems: QueueItem[];
  notPlayingElement: React.ReactNode;
  className?: string;
}

export default function PlayPlaylistButton({ notPlayingElement, className, queueItems }: Props) {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: RootState) => state.player);
  const { currentPlaylist } = useSelector((state: RootState) => state.playlist);
  const isSamePlaylist = currentPlaylist?.id === queueItems[0].album.id;
  const playing = isPlaying && isSamePlaylist;

  const handleClick = () => {
    if (!currentPlaylist) {
      dispatch(
        playlistActions.setCurrentPlaylist({
          currentPlaylist: queueItems[0].album,
          playlistType: "album",
        }),
      );
      dispatch(playerActions.setPlaylistQueue(queueItems.slice(1)));
      dispatch(playerActions.setCurrentTrack(queueItems[0]));
      dispatch(playerActions.play());
    } else {
      dispatch(playerActions.togglePlay());
    }
  };
  return (
    <button onClick={handleClick} className={cn("relative border-none outline-none", className)}>
      {playing ? <PlayingAnimation /> : notPlayingElement}
    </button>
  );
}
