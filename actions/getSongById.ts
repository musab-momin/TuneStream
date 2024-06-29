"use server";

import { Song } from "@/types/general";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getSongsById = async (songId: number): Promise<Song[]> => {
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
    .eq("id", songId)
    .single();

  if (error) {
    console.error("~@@ ERROR WHILE FETCHING SINGLE SONG >>> ", error?.message);
    return [];
  }

  return (data as Song[]) || [];
};
