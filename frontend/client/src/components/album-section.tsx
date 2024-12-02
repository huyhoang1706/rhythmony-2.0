"use client";

import { Skeleton } from "./ui/skeleton";
import MediaItem from "./media-item";
import { Album, useGetSeveralAlbumQuery } from "@/generated/graphql";

interface Props {
  pageSize: number;
  pageNo: number;
}

export default function AlbumSection({ pageSize, pageNo }: Props) {
  const { data, loading, error } = useGetSeveralAlbumQuery({
    variables: {
      pageSize,
      pageNo,
    },
  });

  if (loading)
    return (
      <section>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="flex flex-col items-center space-y-3 p-4">
              <Skeleton className="aspect-square w-full rounded-md bg-neutral-500" />
              <Skeleton className="h-4 w-full rounded-full bg-neutral-500" />
              <Skeleton className="h-4 w-full rounded-full bg-neutral-500" />
            </div>
          ))}
        </div>
      </section>
    );
  if (error) return <section className="text-pink-700">Error: {error.message}</section>;

  return (
    <section className="text-neutral-400">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
        {data?.albums?.map(
          (album) =>
            album && (
              <MediaItem
                key={album.id}
                id={album.id}
                title={album.title}
                image={album.image}
                artists={album.artists}
                type="album"
              />
            ),
        )}
      </div>
    </section>
  );
}
