"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavigationButton() {
  const router = useRouter();

  return (
    <div className="space-x-4">
      <button
        onClick={() => {
          router.back();
        }}
        className="rounded-full bg-neutral-400/40 p-2 transition-colors hover:bg-neutral-400/50"
      >
        <ChevronLeft className="text-neutral-200" />
      </button>
      <button
        onClick={() => {
          router.forward();
        }}
        className="rounded-full bg-neutral-400/40 p-2 transition-colors hover:bg-neutral-400/50"
      >
        <ChevronRight className="text-neutral-200" />
      </button>
    </div>
  );
}
