"use client";

import { QueueItem } from "@/lib/types";
import PlaylistItem from "./playlist-item";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "@/store/player-slice";
import { RootState } from "@/store/store";
import { playlistActions } from "@/store/playlist-slice";

interface Props {
  queueItems: QueueItem[];
}

export default function PlaylistContainer({ queueItems }: Props) {
  const dispatch = useDispatch();
  const { currentPlaylist } = useSelector((state: RootState) => state.playlist);
  const { current } = useSelector((state: RootState) => state.player);

  const playTrackFromPlaylist = (queueItem: QueueItem, listQueueItems: QueueItem[]) => {
    if (listQueueItems.length === 0) return;
    const index = listQueueItems.findIndex((item) => item.track.id === queueItem.track.id);
    const playHistory = listQueueItems.slice(0, index);
    const nextPlaylist = listQueueItems.slice(index + 1);

    dispatch(playerActions.setCurrentTrack(queueItem));
    dispatch(playerActions.addToPlayHistory(playHistory));
    dispatch(playerActions.setPlaylistQueue(nextPlaylist));
    dispatch(playerActions.play());
  };

  const isTheSamePlaylist = () => {
    return currentPlaylist?.id === queueItems[0].album.id;
  };

  const handleClick = (queueItem: QueueItem) => {
    if (current?.track.id === queueItem.track.id) {
      dispatch(playerActions.togglePlay());
    }

    if (!current) {
      playTrackFromPlaylist(queueItem, queueItems);

      dispatch(
        playlistActions.setCurrentPlaylist({
          currentPlaylist: queueItem.album,
          playlistType: "album",
        }),
      );
    } else if (isTheSamePlaylist() && current.track.id !== queueItem.track.id) {
      playTrackFromPlaylist(queueItem, queueItems);
    }
  };

  return (
    <div className="flex flex-col" role="presentation">
      {queueItems.map((item: QueueItem, index: number) => (
        <PlaylistItem
          key={item.track.id}
          queueItem={item}
          order={index + 1}
          artists={item.track.artists}
          onClick={() => handleClick(item)}
        />
      ))}
    </div>
  );
}
