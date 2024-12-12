import { Album, Track } from "@/generated/graphql";

export interface SongItem {
  track: Track;
  album: Album;
}
