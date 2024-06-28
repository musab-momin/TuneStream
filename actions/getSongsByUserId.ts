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
    console.log("~@@ LOGIN BEFORE PLAYING SONG: >>> ", sessionError?.message);
    return [];
  }

  let { data, error } = await supabase
    .from("songs")
    .select("*")
    .eq("user", sessionData.session?.user)
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    console.log("~@@ ERROR WHILE FETCHING SONG FROM USER >>> ", error?.message);
    return [];
  }

  return (data as Song[]) || [];
};
