"use client";

import { useEffect } from "react";
import { CirclePause, CirclePlay } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { playerActions } from "@/store/player-slice";

export default function AudioPlayerButton() {
  const dispatch = useDispatch();
  const { isPlaying, playbackStatus } = useSelector((state: RootState) => state.player);

  const handlePlayPause = () => {
    dispatch(playerActions.togglePlay());
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();

        handlePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePlayPause]);

  return (
    <button
      onClick={handlePlayPause}
      disabled={playbackStatus === "idle" || playbackStatus === "loading"}
      className="transport-button size-8 text-neutral-400"
    >
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
