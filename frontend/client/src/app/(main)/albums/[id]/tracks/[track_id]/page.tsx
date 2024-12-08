import Image from "next/image";
import Link from "next/link";
import { Artist, GetTrackDetailDocument } from "@/generated/graphql";
import { getClient } from "@/lib/apollo-client";
import { Dot, Heart } from "lucide-react";
import Gradient from "@/components/gradient";
import TrackPlayButton from "./track-play-button";
import Lyrics from "./lyrics";

interface Props {
  params: {
    id: string;
    track_id: string;
  };
}

export default async function TrackDetailPage({ params }: Props) {
  const { id, track_id } = await params;
  const { data, error } = await getClient().query({
    query: GetTrackDetailDocument,
    variables: {
      trackId: track_id,
      albumId: id,
    },
  });

  const date = new Date(data?.album?.releaseDate);
  const releaseYear = date.getFullYear();

  if (error) {
    console.error("error", error);
    return <p className="text-center text-pink-700">Error. Please try again later</p>;
  }

  return (
    <>
      <Gradient className="absolute left-0 top-0" idSelector="album-cover" />
      <section className="relative z-20 flex select-none gap-5">
        <div className="relative aspect-square min-w-[128px] max-w-[232px]">
          <Image
            id="album-cover"
            src={data?.album?.image!}
            alt={data?.track?.title}
            width={600}
            height={600}
            className="rounded-md shadow-lg shadow-black"
            priority
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <h5 className="text-sm font-semibold capitalize text-neutral-200 md:text-base lg:text-lg">
              {"song"}
            </h5>
            <h1 className="z-20 truncate text-2xl font-bold text-white sm:text-4xl md:text-6xl lg:text-8xl">
              {data?.track?.title}
            </h1>
            <div className="flex items-center gap-1 text-white lg:text-lg">
              {data?.track?.artists?.map((artist: Artist) => (
                <Link key={artist.id} href={`/artists/${artist.id}`} className="hover:underline">
                  {artist.name}
                </Link>
              ))}
              <Dot />
              {releaseYear}
            </div>
          </div>

          <div className="flex gap-3">
            <TrackPlayButton queueItem={{ track: data?.track, album: data?.album }} />

            <button className="rounded-full p-2">
              <Heart className="text-neutral-200" />
            </button>
          </div>
        </div>
      </section>

      <section role="document" className="relative z-20 mt-5 text-neutral-200">
        <h3 className="mb-3 text-4xl font-bold text-white">Lyrics</h3>
        {!data?.track?.lyrics ? (
          "Sorry we don't have lyrics for this song"
        ) : (
          <Lyrics lyrics={data?.track?.lyrics} />
        )}
      </section>

      <section className="relative z-20 mt-5">
        <h3 className="mb-3 text-xl font-bold text-white">
          More Songs By {data?.track?.artists[0]?.name}
        </h3>
      </section>
    </>
  );
}
