"use client";

import QueueIt from "./queue-it";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function QueueContainer() {
  const { currentPlaylist } = useSelector((state: RootState) => state.playlist);
  const { queues, current } = useSelector((state: RootState) => state.player);

  return (
    <div className="flex w-full flex-col gap-2">
      {current && (
        <div className="px-3">
          <QueueIt removable={false} queueItem={current} />
        </div>
      )}
      <h5 className="px-5 font-bold text-white">Next From {currentPlaylist?.title}</h5>
      <div className="px-3 pb-3">
        {queues.nextFromPlaylist.map((item) => (
          <QueueIt removable={true} key={item.track.id} queueItem={item} />
        ))}
      </div>
    </div>
  );
}
