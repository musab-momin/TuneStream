"use client";

import { useLoadPoster } from "@/hooks/useLoadPoster";
import { Song } from "@/types/general";
import Image from "next/image";
import React from "react";
import PlayButton from "../PlayButton";

const SongCard = ({
  songDetails,
  handleClick,
}: {
  songDetails?: Song;
  handleClick?: (id: number) => void;
}) => {
  const { id, title, poster_url, singer } = songDetails || {};

  const posterPath = useLoadPoster(poster_url!);

  return (
    <div
      className="
      relative 
      group
      flex
      flex-col
      justify-center
      items-center
      rounded-md
      overflow-hidden
      gap-x-4
      bg-neutral-400/5
      cursor-pointer
      hover:bg-neutral-400/10
      transition
      p-3
      w-[23%]
    "
      onClick={() => handleClick && handleClick(id!)}
    >
      <div
        className="
        relative
        aspect-square
        w-full
        h-full
        rounded-md
        overflow-hidden
      "
      >
        <Image
          className="object-cover"
          src={posterPath || ""}
          alt="song_poster"
          fill
        />
      </div>
      <div
        className="
          flex 
          flex-col
          items-start
          w-full
          p-4
          gap-y-1
        "
      >
        <p className="font-semibold truncate w-full">{title}</p>
        <p
          className="
          text-neutral-400
          text-sm
          pb-4
          w-full
          truncate
        "
        >
          By {singer}
        </p>
      </div>
      <div
        className="
        absolute
        bottom-24
        right-5
      "
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default SongCard;
