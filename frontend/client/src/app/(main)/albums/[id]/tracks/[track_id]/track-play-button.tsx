"use client";

import PlayingAnimation from "@/components/playing-animation";
import useAudioStore from "@/hooks/useAudioStore";
import { QueueItem } from "@/lib/types";

interface Props {
  queueItem: QueueItem;
}
export default function TrackPlayButton({ queueItem }: Props) {
  const { isPlaying, current, setCurrent, togglePlay, clearQueue } = useAudioStore();
  const playing = isPlaying && current === queueItem;

  const handleClick = () => {
    if (playing) {
      togglePlay();
    } else {
      clearQueue();
      setCurrent(queueItem);
    }
  };

  return (
    <button
      className="relative rounded-full bg-rose-500 px-12 py-2 font-bold text-neutral-100 transition-colors hover:bg-rose-600 hover:text-white"
      onClick={handleClick}
    >
      {playing ? <PlayingAnimation /> : "Play"}
    </button>
  );
}
