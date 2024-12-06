import { Album, Track } from "@/generated/graphql";

export interface QueueItem {
  track: Track;
  album: Album;
}
