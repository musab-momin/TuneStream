import { Song } from "@/types/general";
import React from "react";

const RenderSongs = async ({
  fetchFunc,
  render,
  fallBackComponent = <></>,
}: {
  fetchFunc: () => Promise<Song[]>;
  fallBackComponent?: React.ReactElement<any>;
  render: (songs: Song[]) => React.ReactNode;
}) => {
  const songsList = await fetchFunc();

  return songsList?.length ? <>{render(songsList)}</> : fallBackComponent;
};

export default RenderSongs;
