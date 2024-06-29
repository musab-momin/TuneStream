"use client";

import { Song } from "@/types/general";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type UserContextType = {
  activeSong: {
    id: null;
    songInfo: null | Song;
  };
  searchedSongs: [];
  isLoading: boolean;
};

const initialState: UserContextType = {
  activeSong: {
    id: null,
    songInfo: null,
  },
  searchedSongs: [],
  isLoading: false,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setSearchedSongs(state, action) {
      state.searchedSongs = action.payload;
    },
    setActiveSong(state, action) {
      state.activeSong = action.payload;
    },

    resetActiveSong(state) {
      state.activeSong = { id: null, songInfo: null };
    },
  },
});

export const { setSearchedSongs, setActiveSong, resetActiveSong } =
  songsSlice.actions;
export default songsSlice.reducer;
