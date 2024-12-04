"use client";

import { useEffect, useRef, useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Slider } from "./ui/slider";
import useAudioStore from "@/hooks/useAudioStore";
import { convertMsToMinutesAndSeconds } from "@/lib/utils";

export default function AudioSeekBar() {
  const frameRef = useRef<number>();
  const { current } = useAudioStore();
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
    <div className="flex w-full items-center gap-2">
      <div className="w-10 text-end text-sm text-neutral-400">{formatDuration(currentTime)}</div>
      <Slider
        value={[currentTime]}
        onValueChange={(value) => {
          seek(value[0]);
        }}
        max={duration === 0 ? current?.track.durationMs! : duration}
        step={1}
        className="hover:cursor-grab active:cursor-grabbing"
      />
      <div className="w-10 text-sm text-neutral-400">
        {duration === 0
          ? convertMsToMinutesAndSeconds(current?.track.durationMs!)
          : formatDuration(duration)}
      </div>
    </div>
  );
}
