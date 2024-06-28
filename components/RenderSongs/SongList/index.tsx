"use client";

import { Song } from "@/types/general";
import React from "react";
import SongCard from "../SongCard";

const SongList = ({ songs }: { songs: Song[] }) => {
  const handleClick = (songId: number) => {};

  return (
    <div className="flex flex-wrap justify-between my-4">
      {songs?.map((song) => (
        <SongCard key={song?.id} songDetails={song} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default SongList;
