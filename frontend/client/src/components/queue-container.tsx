"use client";

import useAudioStore from "@/hooks/useAudioStore";
import QueueIt from "./queue-it";

export default function QueueContainer() {
  const { queue, current, currentIndex } = useAudioStore();
  const list = queue.slice(currentIndex + 1, queue.length);

  return (
    <div className="flex h-full w-full flex-col gap-2">
      {current && (
        <div className="px-3">
          <QueueIt removable={false} queueItem={current} />
        </div>
      )}
      <h5 className="px-5 font-bold text-white">Next</h5>
      <div className="px-3 pb-3">
        {list.map((item) => (
          <QueueIt removable={true} key={item.track.id} queueItem={item} />
        ))}
      </div>
    </div>
  );
}
