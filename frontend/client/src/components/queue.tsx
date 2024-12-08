"use client";

import { ListMusic } from "lucide-react";
import QueueContainer from "./queue-container";
import { ScrollArea } from "./ui/scroll-area";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { cn } from "@/lib/utils";

export default function Queue() {
  const { isRightSideBarOpen } = useSelector((state: RootState) => state.appLayout);
  return (
    <aside
      className={cn(
        "h-full w-fit flex-col rounded-lg bg-neutral-900",
        isRightSideBarOpen ? "flex" : "hidden",
      )}
    >
      <div className="flex items-center gap-3 p-5 shadow">
        <ListMusic className="size-6 min-w-6 text-white" />
        <span className="font-bold text-neutral-100">Queue</span>
      </div>

      <ScrollArea className="h-full w-full">
        <h5 className="mb-3 min-w-32 px-5 font-bold text-white">Now Playing</h5>
        <QueueContainer />
      </ScrollArea>
    </aside>
  );
}
