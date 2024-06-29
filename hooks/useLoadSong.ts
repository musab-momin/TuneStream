import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useLoadSong = (songUrl: string) => {
  const supabaseClient = useSupabaseClient();

  if (!songUrl) {
    return null;
  }

  let songsData = null;
  try {
    const { data } = supabaseClient.storage.from("songs").getPublicUrl(songUrl);
    songsData = data;
  } catch (error: any) {
    console.error("~@@ ERROR WHILE LOADING POSTER: >>>", error?.message);
  }

  return songsData?.publicUrl;
};
