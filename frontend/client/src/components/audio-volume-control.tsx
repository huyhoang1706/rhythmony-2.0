"use client";

import useAudioStore from "@/hooks/useAudioStore";
import { Volume2Icon, VolumeX } from "lucide-react";
import React, { useState } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { Slider } from "./ui/slider";

export default function AudioVolumeControl() {
  const { volume, setVolume } = useGlobalAudioPlayer();
  const { volumeStore, setVolumeStore } = useAudioStore();
  const [prevVolume, setPrevVolume] = useState(volumeStore);
  const isMuted = volume === 0;

  const toggleMute = () => {
    if (!isMuted) {
      setVolume(0);
      setVolumeStore(0);
    } else {
      setVolume(prevVolume / 100);
      setVolumeStore(prevVolume);
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
        value={[isMuted ? 0 : volumeStore]}
        onValueChange={(value) => {
          setVolume(value[0] / 100);
          setPrevVolume(value[0]);
          setVolumeStore(value[0]);
        }}
        defaultValue={[volumeStore]}
        step={1}
        max={100}
        className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28"
      />
    </div>
  );
}
