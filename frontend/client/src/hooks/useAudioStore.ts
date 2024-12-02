import { QueueItem } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AudioStore {
  isShuffle: boolean;
  repeat: "no-repeat" | "repeat" | "repeat-1";
  queue: QueueItem[];
  current: QueueItem | null | undefined;
  volumeStore: number;

  toggleShuffle: () => void;
  handleRepeat: () => void;
  addToQueue: (item: QueueItem) => void;
  removeFromQueue: (trackId: string) => void;
  setCurrent: (item: QueueItem) => void;
  setVolumeStore: (value: number) => void;
}

const useAudioStore = create<AudioStore>()(
  persist(
    (set, get) => {
      const isBrowser = typeof window !== "undefined";
      return {
        isShuffle: false,
        repeat: "no-repeat",
        queue: [],
        current: undefined,
        volumeStore: isBrowser ? parseInt(localStorage.getItem("volumeStore") || "1") : 1,

        toggleShuffle: () => set({ isShuffle: !get().isShuffle }),
        handleRepeat: () =>
          set((state) => ({
            repeat:
              state.repeat === "no-repeat"
                ? "repeat"
                : state.repeat === "repeat"
                  ? "repeat-1"
                  : "no-repeat",
          })),
        addToQueue: (item: QueueItem) => set({ queue: [...get().queue, item] }),
        removeFromQueue: (trackId: string) =>
          set({
            queue: get().queue.filter((item) => item.track.id !== trackId),
          }),
        setCurrent: (item: QueueItem) => set({ current: item }),
        setVolumeStore: (value: number) => set({ volumeStore: value }),
      };
    },
    { name: "player-storage" },
  ),
);

export default useAudioStore;
