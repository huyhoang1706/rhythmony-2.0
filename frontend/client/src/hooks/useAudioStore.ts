// import { QueueItem } from "@/lib/types";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// //Need to implement 2 queue for shuffle
// interface AudioStore {
//   isPlaying: boolean;
//   isShuffle: boolean;
//   repeat: "no-repeat" | "repeat" | "repeat-1";
//   queue: QueueItem[];
//   current: QueueItem | null | undefined;
//   prev: QueueItem | null | undefined;
//   volumeStore: number;
//   currentIndex: number;

//   togglePlay: () => void;
//   toggleShuffle: () => void;
//   handleRepeat: () => void;
//   setQueue: (items: QueueItem[]) => void;
//   addToQueue: (item: QueueItem) => void;
//   removeFromQueue: (item: QueueItem) => void;
//   clearQueue: () => void;
//   playPlaylist: (items: QueueItem[], index: number) => void;
//   setCurrent: (item: QueueItem) => void;
//   setVolumeStore: (value: number) => void;
//   playNext: () => void;
//   playPrevious: () => void;
// }

// const useAudioStore = create<AudioStore>()(
//   persist(
//     (set, get) => {
//       const isBrowser = typeof window !== "undefined";
//       return {
//         isPlaying: false,
//         isShuffle: false,
//         repeat: "no-repeat",
//         queue: [],
//         current: undefined,
//         prev: undefined,
//         volumeStore: isBrowser ? parseInt(localStorage.getItem("volumeStore") || "100") : 100,
//         currentIndex: -1,

//         togglePlay: () => set({ isPlaying: !get().isPlaying }),
//         toggleShuffle: () => set({ isShuffle: !get().isShuffle }),
//         handleRepeat: () =>
//           set((state) => ({
//             repeat:
//               state.repeat === "no-repeat"
//                 ? "repeat"
//                 : state.repeat === "repeat"
//                   ? "repeat-1"
//                   : "no-repeat",
//           })),
//         setQueue: (items: QueueItem[]) =>
//           set({
//             queue: items,
//             current: get().current || get().queue[0],
//             currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex,
//           }),
//         addToQueue: (item: QueueItem) => {
//           const exists = get().queue.some((queueItem) => queueItem.track.id === item.track.id);
//           if (!exists) {
//             set({ queue: [...get().queue, item] });
//           }
//         },
//         removeFromQueue: (item: QueueItem) => {
//           const { queue, currentIndex } = get();

//           const indexToRemove = queue.findIndex((e) => e.track.id === item.track.id);

//           if (indexToRemove === -1) return;

//           const newQueue = queue.filter((_, index) => index !== indexToRemove);

//           let newIndex = currentIndex;
//           if (indexToRemove < currentIndex) {
//             newIndex -= 1;
//           }

//           set({
//             queue: newQueue,
//             currentIndex: newIndex,
//             current: newQueue[newIndex],
//           });
//         },
//         clearQueue: () =>
//           set({
//             queue: [],
//             current: undefined,
//             currentIndex: -1,
//           }),
//         playPlaylist: (items: QueueItem[], index = 0) => {
//           if (items.length === 0) return;
//           set({
//             queue: items,
//             current: items[index],
//             currentIndex: index,
//             isPlaying: true,
//           });
//         },
//         setCurrent: (item: QueueItem) => {
//           if (!item) return;

//           const index = get().queue.findIndex((e) => e.track.id === item.track.id);
//           set({
//             current: item,
//             currentIndex: index !== -1 ? index : get().currentIndex,
//             isPlaying: true,
//           });
//         },
//         setVolumeStore: (value: number) => set({ volumeStore: value }),
//         playNext: () => {
//           const { currentIndex, queue, repeat } = get();
//           const nextIndex = currentIndex + 1;
//           if (nextIndex < queue.length) {
//             set({
//               current: queue[nextIndex],
//               currentIndex: nextIndex,
//               isPlaying: true,
//             });
//           } else {
//             if (repeat === "repeat") {
//               if (queue.length <= 1) return;
//               set({
//                 current: queue[0],
//                 currentIndex: 0,
//                 isPlaying: true,
//               });
//             } else {
//               set({
//                 isPlaying: false,
//               });
//             }
//           }
//         },
//         playPrevious: () => {
//           const { currentIndex, queue, repeat } = get();
//           const previousIndex = currentIndex - 1;
//           if (previousIndex >= 0) {
//             set({
//               current: queue[previousIndex],
//               currentIndex: previousIndex,
//               isPlaying: true,
//             });
//           } else {
//             if (repeat === "repeat") {
//               if (queue.length <= 1) return;
//               const index = queue.length - 1;
//               set({
//                 current: queue[index],
//                 currentIndex: index,
//                 isPlaying: true,
//               });
//             } else {
//               set({
//                 isPlaying: false,
//               });
//             }
//           }
//         },
//       };
//     },
//     {
//       name: "player-storage",
//       partialize: (state) => {
//         // Exclude `isPlaying` from the persisted state
//         const { isPlaying, ...rest } = state;
//         return rest;
//       },
//     },
//   ),
// );

// export default useAudioStore;
