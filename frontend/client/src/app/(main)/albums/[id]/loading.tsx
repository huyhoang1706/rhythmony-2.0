import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@radix-ui/react-separator";
import { Clock } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <>
      <div className="flex select-none gap-5">
        <Skeleton className="h-[300px] w-[300px] bg-neutral-600" />
        <div className="flex flex-col justify-between">
          <div className="space-y-3">
            <Skeleton className="h-5 w-[100px] rounded-full bg-neutral-600 md:w-[160px] lg:w-[320px]" />
            <Skeleton className="h-10 w-[200px] rounded-full bg-neutral-600 md:w-[260px] lg:w-[520px]" />
            <Skeleton className="h-5 w-[100px] rounded-full bg-neutral-600 md:w-[160px] lg:w-[320px]" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-10 w-20 rounded-full bg-neutral-600 md:w-28 lg:w-36" />
            <Skeleton className="size-10 rounded-full bg-neutral-600" />
          </div>
        </div>
      </div>
      <section className="mt-5 px-5">
        <div className="flex items-center gap-5 px-3">
          <div className="w-5 text-end text-lg text-neutral-400">#</div>
          <span className="flex-1 text-lg text-neutral-400">Title</span>
          <span className="text-neutral-400">
            <Clock />
          </span>
        </div>
        <Separator className="my-3 bg-neutral-600" />
      </section>
    </>
  );
}
