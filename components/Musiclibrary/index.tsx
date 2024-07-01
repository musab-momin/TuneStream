"use client";

import React from "react";
import { Library, Plus } from "lucide-react";
import { useAppDispatch } from "@/hooks/useRedux";
import { openModal } from "@/features/modal/modal-slice";
import { useIsAuthenticated } from "@/hooks/useIsAuthenticated";

const MusicLibrary = ({ songLibrary }: { songLibrary: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const handleCreateLibrary = useIsAuthenticated(() => {
    dispatch(openModal("UPLOAD"));
  });

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
      <ul className="my-4">{songLibrary}</ul>
    </div>
  );
};

export default MusicLibrary;
