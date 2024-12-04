"use client";

import { cn } from "@/lib/utils";
import PlayingAnimation from "./playing-animation";
import { QueueItem } from "@/lib/types";
import useAudioStore from "@/hooks/useAudioStore";
interface Props {
  queueItems: QueueItem[];
  notPlayingElement: React.ReactNode;
  className?: string;
}

export default function PlayButton({ notPlayingElement, className, queueItems }: Props) {
  const { playPlaylist, isPlaying, togglePlay, current } = useAudioStore();
  const playing = isPlaying && queueItems.some((item) => item.track.id === current?.track.id);

  const handleClick = () => {
    if (!playing) {
      playPlaylist(queueItems, 0);
    } else {
      togglePlay();
    }
  };
  return (
    <button onClick={handleClick} className={cn("relative", className)}>
      {playing ? <PlayingAnimation /> : notPlayingElement}
    </button>
  );
}
