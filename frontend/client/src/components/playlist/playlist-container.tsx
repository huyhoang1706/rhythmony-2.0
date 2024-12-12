"use client";

import { SongItem } from "@/lib/types";
import PlaylistItem from "./playlist-item";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "@/store/player-slice";
import { RootState } from "@/store/store";
import { playlistActions } from "@/store/playlist-slice";
import usePlayButtonClick from "@/hooks/usePlayButtonClick";

interface Props {
  songItems: SongItem[];
}

export default function PlaylistContainer({ songItems }: Props) {
  const dispatch = useDispatch();
  const { currentPlaylist } = useSelector((state: RootState) => state.playlist);
  const { current } = useSelector((state: RootState) => state.player);
  const handlePlayButtonClick = usePlayButtonClick();

  const playTrackFromPlaylist = (songItems: SongItem, listSongItems: SongItem[]) => {
    if (listSongItems.length === 0) return;
    const index = listSongItems.findIndex((item) => item.track.id === songItems.track.id);
    const playHistory = listSongItems.slice(0, index);
    const nextPlaylist = listSongItems.slice(index + 1);

    dispatch(playerActions.setCurrentTrack(songItems));
    dispatch(playerActions.addToPlayHistory(playHistory));
    dispatch(playerActions.setPlaylistQueue(nextPlaylist));
    dispatch(playerActions.play());
  };

  const isTheSamePlaylist = () => {
    return currentPlaylist?.id === songItems[0].album.id;
  };

  const handlePlay = (songItem: SongItem) => {
    if (current?.track.id === songItem.track.id) {
      dispatch(playerActions.togglePlay());
    }

    if (!current) {
      playTrackFromPlaylist(songItem, songItems);

      dispatch(
        playlistActions.setCurrentPlaylist({
          currentPlaylist: songItem.album,
          playlistType: "album",
        }),
      );
    } else if (isTheSamePlaylist() && current.track.id !== songItem.track.id) {
      playTrackFromPlaylist(songItem, songItems);
    }
  };

  return (
    <div className="flex flex-col" role="presentation">
      {songItems.map((item: SongItem, index: number) => (
        <PlaylistItem
          key={item.track.id}
          songItem={item}
          order={index + 1}
          artists={item.track.artists}
          onClick={() => handlePlayButtonClick(() => handlePlay(item))}
        />
      ))}
    </div>
  );
}
