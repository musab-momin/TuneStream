"use client";

import { Song } from "@/types/general";
import React from "react";

const SongList = ({
  songs,
  children,
}: {
  songs: Song[];
  children: React.ReactNode;
}) => {
  const handleClick = (songId: number) => {};

  return (
    <div className="flex flex-wrap justify-start gap-x-5 my-4">
      {songs?.map((song) => {
        // <SongCard key={song?.id} songDetails={song} handleClick={handleClick} />
        return React.cloneElement(children as React.ReactElement<any>, {
          key: song?.id,
          songDetails: song,
          handleClick: handleClick,
        });
      })}
    </div>
  );
};

export default SongList;
