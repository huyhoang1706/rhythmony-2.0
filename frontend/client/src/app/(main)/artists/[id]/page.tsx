import { getClient } from "@/lib/apollo-client";
import { Artist, GetArtistDetailsDocument } from "@/generated/graphql";
import Image from "next/image";
import Gradient from "@/components/gradient";

interface Props {
  params: {
    id: string;
  };
}

export default async function ArtistDetailPage({ params }: Props) {
  const { id } = await params;
  const { data, error } = await getClient().query({
    query: GetArtistDetailsDocument,
    variables: {
      id,
    },
  });

  const artist = data?.artist as Artist;

  if (error) {
    console.error(error);
    return (
      <p className="text-center text-pink-700">Error while fetching data. Please try again later</p>
    );
  }

  return (
    <>
      <Gradient className="absolute left-0 top-0" idSelector="artist-avatar" />
      <section className="flex select-none gap-5">
        <div className="relative aspect-square min-w-[128px] max-w-[300px]">
          <Image
            id="artist-avatar"
            src={artist.image!}
            alt={artist.name}
            width={600}
            height={600}
            className="rounded-full"
          />
        </div>
        <div className="relative z-20 flex flex-col justify-between">
          <div className="space-y-3">
            <h5 className="text-sm font-semibold capitalize text-neutral-200 md:text-base lg:text-lg">
              Artist
            </h5>
            <h1 className="truncate text-2xl font-bold text-white sm:text-4xl md:text-6xl lg:text-8xl">
              {artist.name}
            </h1>
          </div>
          <div className="flex gap-5">
            <button>Play</button>
            <button className="rounded-full border border-rose-500 px-4 py-2 text-rose-500 transition-colors hover:border-rose-600 hover:text-rose-600">
              Following
            </button>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-xl font-bold text-white">About</h3>
        <p>{artist.bio}</p>
      </section>
    </>
  );
}
