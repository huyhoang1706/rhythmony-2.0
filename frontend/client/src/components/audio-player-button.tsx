"use client";

import { useEffect } from "react";
import { CirclePause, CirclePlay } from "lucide-react";
import useAudioStore from "@/hooks/useAudioStore";

export default function AudioPlayerButton() {
  const { isPlaying, togglePlay } = useAudioStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();

        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePlay]);

  return (
    <button onClick={togglePlay} className="transport-button size-8 text-neutral-400">
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        key={isPlaying ? "pause" : "play"}
      >
        {isPlaying ? (
          <CirclePause className="size-8 text-rose-500" />
        ) : (
          <CirclePlay className="size-8 text-rose-500" />
        )}
      </div>
    </button>
  );
}
