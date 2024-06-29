import { getSongs } from "@/actions/getSongs";
import RenderSongs from "@/components/RenderSongs";
import SongCard from "@/components/RenderSongs/SongCard";
import SongList from "@/components/RenderSongs/SongList";
import { Song } from "@/types/general";

export default function Home() {
  return (
    <div
      className="
      w-full
      h-full
    "
    >
      <div className="px-6 py-4">
        <h2 className="text-xl">Newest Songs</h2>
        <RenderSongs
          fetchFunc={getSongs}
          render={(songs: Song[]) => (
            <SongList songs={songs}>
              <SongCard />
            </SongList>
          )}
        />
      </div>
    </div>
  );
}
