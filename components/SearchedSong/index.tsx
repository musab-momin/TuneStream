"use client";

import React from "react";
import SongList from "../RenderSongs/SongList";
import SongCard from "../RenderSongs/SongCard";
import { useAppSelector } from "@/hooks/useRedux";

const SearchedSong = () => {
  const songList = useAppSelector((state) => state.songs?.searchedSongs);

  return (
    <div className="px-4">
      {songList?.length ? (
        <SongList songs={songList}>
          <SongCard />
        </SongList>
      ) : (
        <div className="my-10  md:p-4">
          <h2>Search something...</h2>
        </div>
      )}
    </div>
  );
};

export default SearchedSong;
