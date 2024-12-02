"use client";

import { fetchTrackDetail } from "@/graphql/queries/track";
import { useQuery } from "@apollo/client";
import Loading from "../../loading";
import Image from "next/image";
import Link from "next/link";
import { Dot, Heart } from "lucide-react";
import { Artist, Track } from "@/lib/types";
import useAudioStore from "@/hooks/useAudioStore";
import { useState } from "react";
import PlayButton from "@/components/play-button";
import PlayingAnimation from "@/components/playing-animation";

interface Props {
  albumId: string;
  trackId: string;
}

export default function TrackDetail({ albumId, trackId }: Props) {
  const { loading, error, data } = useQuery(fetchTrackDetail, {
    variables: {
      trackId,
      albumId,
    },
  });
  const [showAllLyrics, setShowAllLyrics] = useState(false);
  const {
    isPlaying,
    setCurrentTrack,
    currentTrack,
    togglePlay,
    setQueue,
    setCurrentArtCover,
    isLoading,
  } = useAudioStore();
  const track = data?.track as Track | undefined;
  const albumImage = data?.album?.image as string;

  const date = new Date(data?.album?.releaseDate);
  const releaseYear = date.getFullYear();

  const isCurrentTrackPlaying = track?.id === currentTrack?.id;
  const lyrics = track?.lyrics;
  const formattedLyrics = lyrics?.split("\n");

  const toggleLyrics = () => setShowAllLyrics(!showAllLyrics);

  const handlePlay = () => {
    if (!track) return;
    if (isCurrentTrackPlaying) {
      togglePlay();
    } else {
      setCurrentTrack(track);
      setQueue([track]);
      setCurrentArtCover(albumImage);
    }
  };

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-pink-700">{error.message}</p>;
  return (
    <>
      <section className="flex select-none gap-5">
        <Image
          src={albumImage || ""}
          alt={data?.track?.title}
          width={300}
          height={300}
          className="rounded-md shadow-lg shadow-black"
          priority
        />
        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <h5 className="text-lg font-semibold capitalize text-neutral-200">song</h5>
            <h1 className="truncate text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {track?.title}
            </h1>
            <div className="flex items-center gap-1 text-sm text-neutral-400 sm:text-sm md:text-base lg:text-lg">
              {track?.artists?.map((artist: Artist) => (
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
              playing={isCurrentTrackPlaying && isPlaying && !isLoading}
              playingElement={<PlayingAnimation />}
              notPlayingElement={"Play"}
              className="rounded-full bg-rose-500 px-12 py-2 font-bold text-neutral-100 transition-colors hover:bg-rose-600 hover:text-white"
              onClick={() => handlePlay()}
            />

            <button className="rounded-full p-2">
              <Heart className="text-neutral-200" />
            </button>
          </div>
        </div>
      </section>
      <section role="document" className="mt-5 text-neutral-200">
        <h3 className="mb-3 text-4xl font-bold text-white">Lyrics</h3>
        {!track?.lyrics ? (
          "Sorry we don't have lyrics for this song"
        ) : (
          <>
            {formattedLyrics
              ?.slice(0, showAllLyrics ? formattedLyrics.length : 20)
              .map((lyric, index) => <p key={index}>{lyric}</p>)}
            {formattedLyrics && formattedLyrics.length > 20 && (
              <button onClick={toggleLyrics} className="mt-3 block text-rose-500 hover:underline">
                {showAllLyrics ? "Show Less" : "Show More"}
              </button>
            )}
          </>
        )}
      </section>

      <section className="mt-5">
        <h3 className="mb-3 text-xl font-bold text-white">
          More Tracks By {data?.track?.artists[0]?.name}
        </h3>
      </section>
    </>
  );
}
