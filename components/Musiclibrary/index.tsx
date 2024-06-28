"use client";

import React from "react";
import { Library, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { openModal } from "@/features/modal/modal-slice";

const MusicLibrary = () => {
  const user = useAppSelector((state) => state.user?.user);
  const dispatch = useAppDispatch();

  const handleCreateLibrary = () => {
    if (!user) {
      dispatch(openModal("AUTH"));
    } else {
      dispatch(openModal("UPLOAD"));
    }
  };

  return (
    <div className="h-full bg-neutral-900">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2">
          <Library color="#707070" />
          <h4 className="text-[#b3b3b3] font-semibold cursor-pointer hover:text-white">
            Your Library
          </h4>
        </div>
        <div
          role="button"
          className="rounded-[100px] h-[22px] w-[22px] bg-transparent hover:bg-[#2a2a2a] transition flex justify-center items-center"
          onClick={handleCreateLibrary}
        >
          <Plus color="#b3b3b3" size={15} />
        </div>
      </div>
      <ul className="my-4">
        <li className="p-2 rounded-lg bg-[#242424]">
          <p className="font-semibold">Create your first playlist</p>
          <small className="text-[#]">It&apos;s easy will help you</small>
          <Button
            variant={"default"}
            size={"sm"}
            className="block bg-white text-[#121212] mt-4 rounded-[100px] h-8 px-8 hover:text-white"
            onClick={handleCreateLibrary}
          >
            Create Playlist
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default MusicLibrary;
