"use client";

import React, { useEffect } from "react";
import Input from "../Input";
import {
  Loader2,
  LoaderCircle,
  LucidePersonStanding,
  SearchCode,
  SearchIcon,
} from "lucide-react";
import { getSongsByTitle } from "@/actions/getSongsByTitle";
import { useFormState, useFormStatus } from "react-dom";
import { useAppDispatch } from "@/hooks/useRedux";
import { setSearchedSongs } from "@/features/songs/songs-slice";

const SearchForm = () => {
  const initialState = { data: [], isSuccess: true };
  const [state, disptach] = useFormState(getSongsByTitle, initialState);
  const { pending } = useFormStatus();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.isSuccess) {
      dispatch(setSearchedSongs(state.data));
    }
  }, [state]);

  return (
    <div className="px-2 my-4 md:grid md:place-items-center ">
      <form action={disptach}>
        <div
          className="
          w-full
          py-2
          px-2 
          md:px-4
          rounded-md
          md:rounded-[100px]
          bg-neutral-400/10
          flex
          gap-x-2
          items-center
        "
        >
          {pending ? <Loader2 /> : <SearchIcon />}
          <Input
            id="searchQuery"
            name="searchQuery"
            disabled={pending}
            placeholder={"What do you want to play?"}
            className="w-full md:w-[400px] !bg-transparent focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
