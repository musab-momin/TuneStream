"use client";

import React from "react";

import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { openModal } from "@/features/modal/modal-slice";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { resetActiveSong } from "@/features/songs/songs-slice";

const AuthButtons = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const isMobile = useIsMobile();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user?.user);
  const session = useSession();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    dispatch(resetActiveSong());
    router.refresh();

    if (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center">
      {user ? (
        <div className="flex gap-x-4 items-center">
          <Button
            onClick={handleLogout}
            variant={"default"}
            size={isMobile ? "default" : "lg"}
            className="bg-green-500 rounded-[100px] hover:bg-white hover:text-[#121212]"
          >
            Logout
          </Button>
          <Button
            onClick={() => router.push("/account")}
            className="bg-white rounded-full hover:bg-white"
          >
            <User color="#121212" />
          </Button>
        </div>
      ) : (
        <>
          <Button variant={"ghost"} onClick={() => dispatch(openModal("AUTH"))}>
            <span className="font-bold text-[#b3b3b3]">Sign up</span>
          </Button>
          <Button
            variant={"default"}
            size={isMobile ? "default" : "lg"}
            className="bg-green-500 rounded-[100px]"
            onClick={() => dispatch(openModal("AUTH"))}
          >
            <span className="font-bold text-white">Log in</span>
          </Button>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
