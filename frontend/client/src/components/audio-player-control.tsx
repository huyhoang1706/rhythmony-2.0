"use client";

import { playerActions } from "@/store/player-slice";
import { RootState } from "@/store/store";
import { ChevronFirst, ChevronLast, Repeat, Repeat1, Shuffle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import AudioPlayerButton from "./audio-player-button";
import AudioSeekBar from "./audio-seek-bar";
import { RefObject, useEffect } from "react";

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function AudioPlayerControl({ audioRef }: Props) {
  const dispatch = useDispatch();
  const { current, queues, isPlaying, repeatMode, shuffleEnabled } = useSelector(
    (state: RootState) => state.player,
  );

  const handleNextTrack = () => {
    dispatch(playerActions.skipToNext());
  };

  const handlePreviousTrack = () => {
    dispatch(playerActions.skipToPrevious());
  };

  const handleRepeatToggle = () => {
    const nextRepeatMode = repeatMode === "off" ? "all" : repeatMode === "all" ? "one" : "off";
    dispatch(playerActions.setRepeatMode(nextRepeatMode));
  };

  const handleShuffleToggle = () => {
    dispatch(playerActions.toggleShuffle());
  };

  useEffect(() => {
    const audioElement = audioRef?.current;
    if (!audioElement || !current) return;

    if (isPlaying) {
      audioElement.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    } else {
      audioElement.pause();
    }

    const handleEnded = () => {
      switch (repeatMode) {
        case "one":
          audioElement.currentTime = 0;
          audioElement.play().catch((error) => {
            console.error("Playback failed:", error);
          });
          break;
        case "all":
          if (
            current &&
            queues.nextFromPlaylist.length === 0 &&
            queues.nextInQueue.length === 0 &&
            queues.playHistory.length === 0
          ) {
            audioElement.currentTime = 0;
            audioElement.play().catch((error) => {
              console.error("Playback failed:", error);
            });
            break;
          }
          dispatch(playerActions.skipToNext());
          break;
        default:
          if (queues.nextInQueue.length === 0 && queues.nextFromPlaylist.length === 0) {
            dispatch(playerActions.pause());
            return;
          }
          dispatch(playerActions.skipToNext());
      }
    };
    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, [current, isPlaying, repeatMode, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="flex items-center gap-3">
        <button className="transport-button" onClick={handleShuffleToggle}>
          <Shuffle className={`${shuffleEnabled ? "text-rose-500" : "text-neutral-400"}`} />
        </button>
        <button onClick={handlePreviousTrack} className="transport-button">
          <ChevronFirst className="size-8 text-neutral-400" />
        </button>
        <AudioPlayerButton />
        <button onClick={handleNextTrack} className="transport-button">
          <ChevronLast className="size-8 text-neutral-400" />
        </button>
        <button className="transport-button" onClick={handleRepeatToggle}>
          {repeatMode === "off" && <Repeat className="text-neutral-400" />}
          {repeatMode === "all" && <Repeat className="text-rose-500" />}
          {repeatMode === "one" && <Repeat1 className="text-rose-500" />}
        </button>
      </div>
      <AudioSeekBar audioRef={audioRef} />
    </div>
  );
}
