import { Song } from "@/types/general";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getSongsByUserId = async (): Promise<Song[]> => {
  let supabase = createServerComponentClient({
    cookies: cookies,
  });

  let { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.error("~@@ LOGIN BEFORE PLAYING SONG: >>> ", sessionError?.message);
    return [];
  }

  let { data, error } = await supabase
    .from("songs")
    .select("*")
    .eq("user", sessionData.session?.user?.id)
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    console.error(
      "~@@ ERROR WHILE FETCHING SONG FROM USER >>> ",
      error?.message
    );
    return [];
  }

  return (data as Song[]) || [];
};
