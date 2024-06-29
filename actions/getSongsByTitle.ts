"use server";

import { Song } from "@/types/general";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

type FormState = {
  data: Song[] | [];
};

export const getSongsByTitle = async (
  prevState: FormState,
  frmData: FormData
) => {
  const titleQuery = frmData.get("searchQuery") as string;

  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  if (!titleQuery) {
    return { data: [], isSuccess: true };
  }

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .ilike("title", `%${titleQuery}%`)
    .order("created_at", { ascending: false })
    .limit(10);

  if (error) {
    console.error("~@@ ERROR WHILE FETCHING SONGS: ", error?.message);
    return { data: [], isSuccess: false };
  }

  revalidatePath("/search");
  return { data: (data as Song[]) || [], isSuccess: true };
};
