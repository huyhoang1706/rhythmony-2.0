"use client";

import { useGenresQuery } from "@/generated/graphql";
import { Genre } from "@/lib/types";

export default function Genres() {
  const { loading, error, data } = useGenresQuery();

  const formatGenre = (genre: string) => {
    return genre
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.genres.map((genre: Genre) => (
        <div
          key={genre.name}
          className="flex aspect-square items-center justify-center p-4 text-lg font-bold"
        >
          {formatGenre(genre.name)}
        </div>
      ))}
    </div>
  );
}
