"use client";

import React from "react";
import { setActiveSong } from "@/features/songs/songs-slice";
import { useAppDispatch } from "@/hooks/useRedux";
import { Song } from "@/types/general";
import { getSongsById } from "@/actions/getSongById";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";

const SongList = ({
  songs,
  children,
}: {
  songs: Song[];
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();

  const handleClick = async (songId: number) => {
    const data = await getSongsById(songId);
    dispatch(setActiveSong({ id: songId, songInfo: data }));
  };

  const handleClickWithAuth = useIsAuthenticated(handleClick);

  return (
    <div className="flex flex-wrap justify-between md:justify-start gap-5 my-4">
      {songs?.map((song) => {
        return React.cloneElement(children as React.ReactElement<any>, {
          key: song?.id,
          songDetails: song,
          handleClick: handleClickWithAuth,
        });
      })}
    </div>
  );
};

export default SongList;
