"use client";

import { Artist } from "@/generated/graphql";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  title: string;
  image?: string | null;
  artists?: Artist[] | null;
  type: "album" | "track";
  onClick?: (id: string) => void;
}

export default function MediaItem({ id, title, image, artists, type }: Props) {
  const router = useRouter();

  const navigateTo = () => {
    if (type === "album") {
      router.push(`/albums/${id}`);
    } else {
      router.push(`/songs/${id}`);
    }
  };

  return (
    <div
      role="button"
      className="flex flex-col items-center rounded-md bg-neutral-400/5 p-4 hover:bg-neutral-400/10"
      onClick={() => navigateTo()}
    >
      <Image src={image || ""} alt={title} width={200} height={200} className="mb-1 rounded-md" />
      <h5 className="font-2xl font-semibold text-white">{title}</h5>
      {artists?.map((artist) => (
        <a href="#" key={artist.id} className="text-center">
          {artist.name}
        </a>
      ))}
    </div>
  );
}
