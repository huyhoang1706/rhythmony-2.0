"use client";

import Link from "next/link";
import PlayingAnimation from "./playing-animation";

import { FaPause, FaPlay } from "react-icons/fa6";
import { convertMsToMinutesAndSeconds } from "@/lib/utils";
import { Artist, Maybe, Track } from "@/generated/graphql";
import { QueueItem } from "@/lib/types";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdMoreHoriz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { playerActions } from "@/store/player-slice";
import { playlistActions } from "@/store/playlist-slice";

interface Props {
  queueItem: QueueItem;
  order: number;
  artists?: Maybe<Array<Artist>>;
  onClick: () => void;
}

export default function PlaylistItem({ queueItem, order, artists, onClick }: Props) {
  const { current, isPlaying } = useSelector((state: RootState) => state.player);

  const playing =
    isPlaying &&
    queueItem.track.id === current?.track.id &&
    queueItem.album.id === current?.album.id;
  const track = queueItem.track;
  const album = queueItem.album;

  return (
    <div
      role="presentation"
      className="group flex select-none items-center justify-between gap-5 rounded-md px-3 py-1 hover:bg-neutral-300/10"
    >
      <div className="flex items-center gap-5">
        <div className="relative w-5 group-hover:hidden">
          {playing ? (
            <PlayingAnimation background="bg-rose-500" />
          ) : (
            <div className="text-end text-neutral-400">{order}</div>
          )}
        </div>

        <div className="hidden w-5 justify-end text-neutral-400 group-hover:flex">
          <button onClick={onClick}>
            {playing ? (
              <FaPause className="size-4 text-rose-500" />
            ) : (
              <FaPlay className="size-4 text-neutral-200" />
            )}
          </button>
        </div>
        <div className="flex flex-col">
          <Link
            href={`${album.id}/tracks/${track.id}`}
            className={cn(
              "text-base hover:underline lg:text-lg",
              playing ? "text-rose-500" : "text-white",
            )}
          >
            {track.title}
          </Link>
          {artists?.map((artist) => (
            <Link
              key={artist.id}
              href={`/artists/${artist.id}`}
              className="text-sm text-neutral-400 hover:underline lg:text-base"
            >
              {artist.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="text-neutral-400">
          {convertMsToMinutesAndSeconds(track?.durationMs || 0)}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="border-none outline-none">
            <MdMoreHoriz className="size-6 text-neutral-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-neutral-800 text-neutral-400">
            <DropdownMenuItem>Add To Playlist</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Add To Queue</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
