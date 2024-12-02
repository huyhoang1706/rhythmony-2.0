"use client";

import { Pause, Play } from "lucide-react";
import Link from "next/link";
import PlayingAnimation from "./playing-animation";
import { cn } from "@/lib/utils";
import useAudioStore from "@/hooks/useAudioStore";
import { convertMsToMinutesAndSeconds } from "@/lib/utils";
import { Artist, Maybe, Track } from "@/generated/graphql";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import { useStore } from "@/hooks/useStore";

interface Props {
  albumId: string;
  image: string;
  track: Track;
  title: string;
  order: number;
  isPlaying?: boolean;
  artists?: Maybe<Array<Artist>>;
}

export default function TrackPresentation({
  albumId,
  track,
  title,
  order,
  isPlaying,
  artists,
  image,
}: Props) {
  const { setCurrent } = useAudioStore();
  const { play, pause } = useGlobalAudioPlayer();
  return (
    <div
      role="presentation"
      className="group flex select-none items-center justify-between gap-5 rounded-md px-3 py-1 hover:bg-neutral-300/10"
    >
      <div className="flex items-center gap-5">
        <div className="relative w-5 group-hover:hidden">
          {isPlaying ? (
            <PlayingAnimation background="bg-rose-500" />
          ) : (
            <div className="text-end text-neutral-400">{order}</div>
          )}
        </div>

        <div className="hidden w-5 justify-end text-neutral-400 group-hover:flex">
          {isPlaying ? (
            <button onClick={pause}>
              <Pause className="size-4 text-rose-500" />
            </button>
          ) : (
            <button
              onClick={() => {
                setCurrent({ track: track, image: image });
                play();
              }}
            >
              <Play className="size-4 text-neutral-200" />
            </button>
          )}
        </div>
        <div className="flex flex-col">
          <Link
            href={`${albumId}/tracks/${track?.id}`}
            className={cn("text-lg hover:underline", isPlaying ? "text-rose-500" : "text-white")}
          >
            {title}
          </Link>
          {artists?.map((artist) => (
            <Link
              key={artist.id}
              href={`/artists/${artist.id}`}
              className="text-neutral-400 hover:underline"
            >
              {artist.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="text-neutral-400">{convertMsToMinutesAndSeconds(track?.durationMs || 0)}</div>
    </div>
  );
}
