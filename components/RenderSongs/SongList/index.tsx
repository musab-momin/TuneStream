"use client";

import React from "react";
import { setActiveSong } from "@/features/songs/songs-slice";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Song } from "@/types/general";
import { getSongsById } from "@/actions/getSongById";
import { openModal } from "@/features/modal/modal-slice";

const SongList = ({
  songs,
  children,
}: {
  songs: Song[];
  children: React.ReactNode;
}) => {
  const user = useAppSelector((state) => state.user?.user);
  const dispatch = useAppDispatch();

  const handleClick = async (songId: number) => {
    if (!user) {
      dispatch(openModal("AUTH"));
      return;
    }
    const data = await getSongsById(songId);
    dispatch(setActiveSong({ id: songId, songInfo: data }));
  };

  return (
    <div className="flex flex-wrap justify-between md:justify-start gap-5 my-4">
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
