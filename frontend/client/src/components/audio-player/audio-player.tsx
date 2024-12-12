"use client";

import { ListMusic } from "lucide-react";
import { useRef } from "react";
import { Artist } from "@/generated/graphql";

import Image from "next/image";
import Link from "next/link";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import AudioPlayerControl from "./audio-player-control";
import AudioVolumeControl from "./audio-volume-control";
import { toggleOpenRightSideBar } from "@/store/app-layout-slice";
import { cn } from "@/lib/utils";

export default function AudioPlayer() {
  const dispatch = useDispatch();
  const { isRightSideBarOpen } = useSelector((state: RootState) => state.appLayout);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { current } = useSelector((state: RootState) => state.player);

  return (
    <footer className="h-[80px]">
      <audio ref={audioRef} src={current?.track.audioUrl!} preload="auto" hidden />
      <div className="grid h-full w-full grid-cols-3 items-center rounded-lg bg-gradient-to-b from-white/10 px-2">
        <div className="flex items-center gap-3">
          {current?.album?.image ? (
            <Image
              src={current?.album.image}
              alt="art"
              width={60}
              height={60}
              className="aspect-square rounded-md shadow-md shadow-black"
            />
          ) : (
            <div className="size-[60px] rounded-md bg-neutral-800"></div>
          )}

          <div className="flex flex-col">
            <Link href={`#`} className="truncate text-white">
              {current?.track.title}
            </Link>
            <div className="flex max-w-[200px] gap-1 overflow-hidden text-neutral-400">
              {current?.track?.artists?.map((artist: Artist) => (
                <Link
                  href={`/artists/${artist.id}`}
                  key={artist.id}
                  className="truncate text-sm hover:underline"
                >
                  {artist.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <AudioPlayerControl audioRef={audioRef} />

        <div className="flex items-center justify-end gap-2">
          <button onClick={() => dispatch(toggleOpenRightSideBar())}>
            <ListMusic
              className={cn(
                "size-6 transition-colors",
                isRightSideBarOpen ? "text-rose-500" : "text-neutral-400",
              )}
            />
          </button>
          <AudioVolumeControl audioRef={audioRef} />
        </div>
      </div>
    </footer>
  );
}
