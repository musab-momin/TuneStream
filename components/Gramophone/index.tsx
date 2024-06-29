"use client";

import React from "react";
import Controls from "./Controls";
import SongItem from "../RenderSongs/SongItem";

import { useAppSelector } from "@/hooks/useRedux";

const Gramophone = () => {
  const { id, songInfo } = useAppSelector((state) => state.songs.activeSong);

  if (!id || !songInfo) {
    return null;
  }

  return (
    <div
      className="
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[80px]
        px-4
      "
    >
      <div className="grid grid-cols-2 md:grid-cols-3 h-full">
        <div className="flex w-full jusitfy-start">
          <div className="flex items-center gap-x-4">
            <SongItem songDetails={songInfo} />
          </div>
        </div>

        <Controls songUrl={songInfo?.file_url} />
      </div>
    </div>
  );
};

export default Gramophone;
