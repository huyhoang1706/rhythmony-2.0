"use client";

import { Artist } from "@/generated/graphql";
import useAudioStore from "@/hooks/useAudioStore";
import { QueueItem } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdMoreHoriz } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa6";

interface Props {
  queueItem: QueueItem;
  removable: boolean;
}

export default function QueueIt({ queueItem, removable }: Props) {
  const { setCurrent, removeFromQueue, togglePlay, isPlaying, current } = useAudioStore();

  const playing = queueItem.track.id === current?.track.id && isPlaying;

  const handleClick = () => {
    if (playing) {
      togglePlay();
    } else {
      setCurrent(queueItem);
    }
  };

  return (
    <div className="group flex select-none items-center gap-2 rounded-md p-2 hover:bg-neutral-400/10">
      <div className="relative size-[48px] flex-[48px] flex-shrink-0 flex-grow-0">
        <div
          role="button"
          onClick={handleClick}
          className="absolute left-0 top-0 hidden size-full items-center justify-center bg-neutral-800/50 group-hover:flex"
        >
          {playing ? (
            <FaPause className="size-4 text-neutral-100" />
          ) : (
            <FaPlay className="size-4 text-neutral-100" />
          )}
        </div>
        {queueItem.album.image ? (
          <Image
            src={queueItem.album.image}
            alt={queueItem.track.title}
            width={60}
            height={60}
            className="h-auto max-w-full rounded-md"
          />
        ) : (
          <div className="h-full w-full rounded-md bg-neutral-900"></div>
        )}
      </div>
      <div className="flex min-w-40 flex-1 flex-col">
        <p className="min-w-max font-semibold text-white">{queueItem.track.title}</p>
        {queueItem.track.artists?.map((artist: Artist) => (
          <Link
            key={artist.id}
            href={`/artists/${artist.id}`}
            className="truncate text-sm text-neutral-400 hover:underline"
          >
            {artist.name}
          </Link>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="border-none outline-none">
          <MdMoreHoriz className="size-6 text-neutral-400" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-neutral-800 text-neutral-400">
          <DropdownMenuItem>Add To Playlist</DropdownMenuItem>
          {removable && (
            <DropdownMenuItem onClick={() => removeFromQueue(queueItem)}>
              Remove From Queue
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
