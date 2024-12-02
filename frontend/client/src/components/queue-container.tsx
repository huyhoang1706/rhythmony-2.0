"use client";

import useAudioStore from "@/hooks/useAudioStore";
import { Artist } from "@/lib/types";
import Link from "next/link";

export default function QueueContainer() {
  const { queue } = useAudioStore();
  return (
    <div className="flex h-full w-full flex-col flex-nowrap overflow-hidden">
      {queue.map((track) => (
        <div key={track.id} className="flex items-center gap-5">
          <div className="relative size-[48px] flex-[48px] flex-shrink-0 flex-grow-0"></div>
          <div className="flex flex-col flex-nowrap">
            <p className="min-w-max font-semibold text-white">{track.title}</p>
            {track.artists?.map((artist: Artist) => (
              <Link
                key={artist.id}
                href={`/artists/${artist.id}`}
                className="truncate text-sm text-neutral-400 hover:underline"
              >
                {artist.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
