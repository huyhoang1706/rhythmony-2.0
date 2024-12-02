import { Track } from "@/generated/graphql";

export interface QueueItem {
  track: Track;
  image: string | null | undefined;
}
