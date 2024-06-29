import React from "react";
import Box from "../box";
import Navigation from "../navigation";
import Library from "../Musiclibrary";
import { getSongsByUserId } from "@/actions/getSongsByUserId";
import RenderSongs from "../RenderSongs";
import { Song } from "@/types/general";
import SongItem from "../RenderSongs/SongItem";
import SongList from "../RenderSongs/SongList";
import CreateLibrary from "../CreateLibraray";

const Sidebar = async () => {
  return (
    <nav
      className="
      hidden
      md:flex
      flex-col
      gap-y-2
      h-full
      w-[300px]
      p-2 
      border-red-100  
    "
    >
      <Box>
        <Navigation />
      </Box>
      <Box>
        <Library
          songLibrary={
            <>
              <RenderSongs
                fetchFunc={getSongsByUserId}
                render={(songs: Song[]) => (
                  <SongList songs={songs}>
                    <SongItem />
                  </SongList>
                )}
                fallBackComponent={<CreateLibrary />}
              ></RenderSongs>
            </>
          }
        />
      </Box>
    </nav>
  );
};

export default Sidebar;
