"use client";

import { CirclePause, CirclePlay } from "lucide-react";
import { useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

export default function AudioPlayerButton() {
  const { togglePlayPause, playing, isReady } = useGlobalAudioPlayer();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (isReady) {
          togglePlayPause();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePlayPause, isReady]);

  return (
    <button
      onClick={togglePlayPause}
      disabled={!isReady}
      className="transport-button size-8 text-neutral-400"
    >
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        key={playing ? "pause" : "play"}
      >
        {playing ? (
          <CirclePause className="size-8 text-rose-500" />
        ) : (
          <CirclePlay className="size-8 text-rose-500" />
        )}
      </div>
    </button>
  );
}
