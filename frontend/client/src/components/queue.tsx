import { ListMusic } from "lucide-react";
import QueueContainer from "./queue-container";

export default function Queue() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <ListMusic className="size-6 min-w-6 text-white" />
        <span className="font-bold text-neutral-100">Queue</span>
      </div>

      <h5 className="mb-3 mt-5 min-w-32 font-bold text-white">Now Playing</h5>
      {/* <QueueContainer /> */}
    </div>
  );
}
