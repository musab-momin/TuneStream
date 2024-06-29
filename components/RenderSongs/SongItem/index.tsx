"use client";

import { useLoadPoster } from "@/hooks/useLoadPoster";
import { Song } from "@/types/general";
import Image from "next/image";
import React from "react";

const SongItem = ({
  songDetails,
  handleClick,
}: {
  songDetails?: Song;
  handleClick?: (id: number) => void;
}) => {
  const posterPath = useLoadPoster(songDetails?.poster_url!);
  return (
    <div
      className="
    flex
    items-center
    gap-x-3
    cursor-pointer
    hover:bg-neutral-800/50
    w-full
    p-2
    rounded-md
  "
      onClick={() => handleClick && handleClick(songDetails?.id!)}
    >
      <div
        className="
      relative
      rounded-md
      min-h-[48px]
      min-w-[48px]
      overflow-hidden
    "
      >
        <Image
          src={posterPath || ""}
          alt="song_poster"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{songDetails?.title}</p>
        <p className="text-neutral-400 text-sm truncate">
          {songDetails?.singer}
        </p>
      </div>
    </div>
  );
};

export default SongItem;
