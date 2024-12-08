"use client";

import { RefObject, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  audioRef: RefObject<HTMLAudioElement | null>;
}

export default function AudioSeekBar({ audioRef }: Props) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { current } = useSelector((state: RootState) => state.player);

  useEffect(() => {
    const audio = audioRef?.current;
    if (!audio || !current) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [current, audioRef]);

  const handleSeek = (value: number[]) => {
    if (audioRef?.current) {
      audioRef.current.currentTime = value[0];
    }
  };

  const formatDuration = (seconds: number) => {
    const roundedSeconds = Math.round(seconds);
    const minutes = Math.floor(roundedSeconds / 60);
    const remainingSeconds = roundedSeconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex w-full items-center gap-2">
      <div className="w-10 text-end text-sm text-neutral-400">{formatDuration(currentTime)}</div>
      <Slider
        value={[currentTime]}
        onValueChange={handleSeek}
        max={duration}
        step={1}
        className="hover:cursor-grab active:cursor-grabbing"
      />
      <div className="w-10 text-sm text-neutral-400">{formatDuration(duration)}</div>
    </div>
  );
}
