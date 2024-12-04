import { ListMusic } from "lucide-react";
import QueueContainer from "./queue-container";

export default function Queue() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 p-5 shadow">
        <ListMusic className="size-6 min-w-6 text-white" />
        <span className="font-bold text-neutral-100">Queue</span>
      </div>

      <div className="custom-scroll-bar h-full w-full overflow-y-auto">
        <h5 className="mb-3 min-w-32 px-5 font-bold text-white">Now Playing</h5>
        <QueueContainer />
      </div>
    </div>
  );
}
