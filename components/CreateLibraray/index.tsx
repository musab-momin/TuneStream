"use client";

import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { openModal } from "@/features/modal/modal-slice";

const CreateLibrary = () => {
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
  );
};

export default CreateLibrary;
