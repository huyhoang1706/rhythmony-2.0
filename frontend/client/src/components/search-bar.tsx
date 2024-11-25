"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  return (
    <div className="relative flex w-full max-w-lg rounded-full border border-neutral-400 px-3 py-1">
      <SearchIcon className="mr-2 text-neutral-200" />
      <input
        className="h-full w-full border-none bg-transparent text-white outline-none"
        placeholder="What do you want to play?"
        onFocus={() => {
          router.push("/search");
        }}
      />
    </div>
  );
}
