"use client";

import { Shuffle, ChevronFirst, ChevronLast, Repeat, Repeat1, ListMusic } from "lucide-react";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useEffect } from "react";
import { Artist } from "@/generated/graphql";

import useAudioStore from "@/hooks/useAudioStore";
import AudioSeekBar from "./audio-seek-bar";
import AudioVolumeControl from "./audio-volume-control";
import AudioPlayerButton from "./audio-player-button";

import Image from "next/image";
import Link from "next/link";

export default function Player() {
  const { load, loop } = useGlobalAudioPlayer();

  const { current, volumeStore, isShuffle, toggleShuffle, queue, repeat, handleRepeat } =
    useAudioStore();

  useEffect(() => {
    if (current) {
      if (!current.track.audioUrl) {
        nextTrack();
        return;
      }
      load(current.track.audioUrl, {
        autoplay: true,
        html5: true,
        format: "mp3",
        initialVolume: volumeStore / 100,
        onend: () => handleTrackEnd(),
      });
    }
  }, [current, load, queue]);

  useEffect(() => {
    if (repeat === "repeat-1") {
      loop(true);
    } else {
      loop(false);
    }
  }, [repeat, handleRepeat, loop]);

  const handleTrackEnd = () => {};

  const nextTrack = () => {};

  return (
    <footer className="h-[80px]">
      <div className="flex h-full w-full items-center justify-between rounded-lg bg-gradient-to-b from-white/10 px-5">
        <div className="flex items-center gap-3">
          {current?.image ? (
            <Image
              src={current?.image}
              alt="art"
              width={60}
              height={60}
              className="aspect-square rounded-md shadow-md shadow-black"
            />
          ) : (
            <div className="size-[60px] rounded-md bg-neutral-800"></div>
          )}

          <div className="flex flex-col">
            <Link href={`#`} className="text-white">
              {current?.track.title}
            </Link>
            <div className="flex max-w-[200px] gap-1 overflow-hidden text-neutral-400">
              {current?.track?.artists?.map((artist: Artist) => (
                <Link
                  href={`/artists/${artist.id}`}
                  key={artist.id}
                  className="text-sm hover:underline"
                >
                  {artist.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-auto flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-3">
            <button className="transport-button" onClick={toggleShuffle}>
              <Shuffle className={`${isShuffle ? "text-rose-500" : "text-neutral-400"}`} />
            </button>
            <button>
              <ChevronFirst className="transport-button size-8 text-neutral-400" />
            </button>
            <AudioPlayerButton />
            <button className="transport-button">
              <ChevronLast className="size-8 text-neutral-400" />
            </button>
            <button className="transport-button" onClick={() => handleRepeat()}>
              {repeat === "no-repeat" && <Repeat className="text-neutral-400" />}
              {repeat === "repeat" && <Repeat className="text-rose-500" />}
              {repeat === "repeat-1" && <Repeat1 className="text-rose-500" />}
            </button>
          </div>
          <AudioSeekBar />
        </div>
        <div className="flex items-center gap-2">
          <button>
            <ListMusic className="size-6 text-neutral-400" />
          </button>
          <AudioVolumeControl />
        </div>
      </div>
    </footer>
  );
}
