import { Song } from "@/types/general";
import React from "react";

const RenderSongs = async ({
  fetchFunc,
  render,
}: {
  fetchFunc: () => Promise<Song[]>;
  render: (songs: Song[]) => React.ReactNode;
}) => {
  const songsList = await fetchFunc();

  return <>{render(songsList)}</>;
};

export default RenderSongs;
