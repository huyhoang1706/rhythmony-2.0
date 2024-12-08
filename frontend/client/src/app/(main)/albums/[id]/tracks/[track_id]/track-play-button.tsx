"use client";

import PlayingAnimation from "@/components/playing-animation";
import { QueueItem } from "@/lib/types";
import { playerActions } from "@/store/player-slice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  queueItem: QueueItem;
}
export default function TrackPlayButton({ queueItem }: Props) {
  const dispatch = useDispatch();
  const { isPlaying, current } = useSelector((state: RootState) => state.player);
  const playing = isPlaying && current === queueItem;

  const handleClick = () => {
    if (current !== queueItem) {
      // dispatch(playerActions);
      dispatch(playerActions.setCurrentTrack(queueItem));
      dispatch(playerActions.play());
      return;
    } else {
      dispatch(playerActions.togglePlay());
    }
  };

  return (
    <button
      className="relative w-[132px] rounded-full bg-rose-500 py-2 font-bold text-neutral-100 transition-colors hover:bg-rose-600 hover:text-white"
      onClick={handleClick}
    >
      {playing ? <PlayingAnimation /> : "Play"}
    </button>
  );
}
