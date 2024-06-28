import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useLoadPoster = (posterUrl: string) => {
  const supabaseClient = useSupabaseClient();

  if (!posterUrl) {
    return null;
  }

  let posterData = null;
  try {
    const { data } = supabaseClient.storage
      .from("posters")
      .getPublicUrl(posterUrl);
    posterData = data;
  } catch (error: any) {
    console.error("~@@ ERROR WHILE LOADING POSTER: >>>", error?.message);
  }

  return posterData?.publicUrl;
};
