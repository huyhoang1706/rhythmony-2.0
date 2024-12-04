"use client";

import { useState } from "react";

interface Props {
  lyrics?: string;
}

export default function Lyrics({ lyrics }: Props) {
  const [showAllLyrics, setShowAllLyrics] = useState(false);
  const toggleLyrics = () => setShowAllLyrics(!showAllLyrics);
  const formattedLyrics = lyrics?.split("\n");
  return (
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
  );
}
