import { getClient } from "@/lib/apollo-client";
import { Artist, GetAlbumByIdDocument, Track } from "@/generated/graphql";
import Image from "next/image";
import Link from "next/link";
import PlayButton from "@/components/play-button";
import { Clock, Dot, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TrackPresentation from "@/components/track-presentation";
import PlayingAnimation from "@/components/playing-animation";

interface AlbumDetailPageProps {
  params: {
    id: string;
  };
}

export default async function AlbumDetailPage({ params }: AlbumDetailPageProps) {
  const { id } = await params;
  const { data, error } = await getClient().query({
    query: GetAlbumByIdDocument,
    variables: {
      id,
    },
  });

  const date = new Date(data?.album?.releaseDate as string);
  const options = { year: "numeric", month: "short", day: "numeric" };
  //@ts-expect-error
  const formattedDate = date.toLocaleDateString("en-US", options);
  const releaseYear = date.getFullYear();

  if (error) {
    console.error(error);
    return <p className="text-center text-pink-700">Error. Please try again later</p>;
  }
  return (
    <>
      <section className="flex select-none gap-5">
        <div className="relative min-h-[128px] min-w-[128px]">
          <Image
            src={data?.album?.image || ""}
            alt={data?.album?.title}
            width={300}
            height={300}
            className="rounded-md shadow-lg shadow-black"
            priority
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <h5 className="text-sm font-semibold capitalize text-neutral-200 md:text-base lg:text-lg">
              {data?.album?.albumType === "single" ? "single" : data?.album?.type}
            </h5>
            <h1 className="truncate text-2xl font-bold text-white sm:text-4xl md:text-6xl lg:text-8xl">
              {data?.album?.title}
            </h1>
            <div className="flex items-center gap-1 text-neutral-400 lg:text-lg">
              {data?.album?.artists?.map((artist: Artist) => (
                <Link key={artist.id} href={`/artists/${artist.id}`} className="hover:underline">
                  {artist.name}
                </Link>
              ))}
              <Dot />
              {releaseYear}
            </div>
          </div>

          <div className="flex gap-3">
            <PlayButton
              playing={true}
              playingElement={<PlayingAnimation />}
              notPlayingElement={"Play"}
              className="rounded-full bg-rose-500 px-12 py-2 font-bold text-neutral-100 transition-colors hover:bg-rose-600 hover:text-white"
            />

            <button className="rounded-full p-2">
              <Heart className="text-neutral-200" />
            </button>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex items-center gap-5 px-3">
          <div className="w-5 text-end text-lg text-neutral-400">#</div>
          <span className="flex-1 text-lg text-neutral-400">Title</span>
          <span className="text-neutral-400">
            <Clock />
          </span>
        </div>
        <Separator className="my-3 bg-neutral-600" />
        <div className="flex flex-col" role="presentation">
          {data?.album?.tracks.map((track: Track, index: number) => (
            <TrackPresentation
              key={track.id}
              albumId={data?.album?.id}
              image={data?.album?.image}
              track={track}
              title={track.title}
              order={index + 1}
              artists={track.artists}
            />
          ))}
        </div>
      </section>

      <div className="mt-3 text-neutral-400">
        <span>{formattedDate}</span>
        <p className="text-lg">&copy;{data?.album?.label}</p>
      </div>

      <h2 className="mb-3 mt-6 text-2xl font-bold text-white">
        Also From {data?.album?.artists[0]?.name}
      </h2>
    </>
  );
}
