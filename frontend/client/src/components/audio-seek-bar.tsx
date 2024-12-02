"use client";

import { useEffect, useRef, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Slider } from "./ui/slider";
import { convertMsToMinutesAndSeconds } from "@/lib/utils";

export default function AudioSeekBar() {
  const frameRef = useRef<number>();
  const [currentTime, setCurrentTime] = useState(0);
  const { getPosition, seek, duration } = useGlobalAudioPlayer();

  useEffect(() => {
    const animate = () => {
      setCurrentTime(getPosition());
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [getPosition]);

  const formatDuration = (seconds: number) => {
    const roundedSeconds = Math.round(seconds);
    const minutes = Math.floor(roundedSeconds / 60);
    const remainingSeconds = roundedSeconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center gap-2">
      <div className="w-10 text-end text-sm text-neutral-400">{formatDuration(currentTime)}</div>
      <Slider
        value={[currentTime]}
        onValueChange={(value) => {
          seek(value[0]);
        }}
        max={duration || 100}
        step={1}
        className="w-[200px] hover:cursor-grab active:cursor-grabbing sm:w-[280px] md:w-[320px] lg:w-[440px] xl:w-[520px]"
      />
      <div className="w-10 text-sm text-neutral-400">{formatDuration(duration)}</div>
    </div>
  );
}
