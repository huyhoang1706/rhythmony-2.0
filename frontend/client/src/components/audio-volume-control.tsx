"use client";

import { Volume2Icon, VolumeX } from "lucide-react";
import React, { RefObject, useState } from "react";
import { Slider } from "./ui/slider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { playerActions } from "@/store/player-slice";

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function AudioVolumeControl({ audioRef }: Props) {
  const dispatch = useDispatch();
  const { volume } = useSelector((state: RootState) => state.player);
  const [prevVolume, setPrevVolume] = useState(volume);
  const isMuted = audioRef?.current?.volume === 0;

  const setVolume = (value: number) => {
    dispatch(playerActions.setVolume(value));
  };

  const toggleMute = () => {
    if (!audioRef?.current) return;
    if (!isMuted) {
      audioRef.current.volume = 0;
      setVolume(0);
    } else {
      audioRef.current.volume = prevVolume / 100;
      setVolume(prevVolume);
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button onClick={toggleMute}>
        {isMuted ? (
          <VolumeX className="size-6 text-neutral-400" />
        ) : (
          <Volume2Icon className="size-6 text-neutral-400" />
        )}
      </button>

      <Slider
        value={[isMuted ? 0 : volume]}
        onValueChange={(value) => {
          setPrevVolume(value[0]);
          setVolume(value[0]);
          if (audioRef?.current) {
            audioRef.current.volume = value[0] / 100;
          }
        }}
        defaultValue={[volume]}
        step={1}
        max={100}
        className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28"
      />
    </div>
  );
}
