"use client";

import { createSlice } from "@reduxjs/toolkit";

type UserContextType = {
  songs: [];
  searchedSongs: [];
  isLoading: boolean;
};

const initialState: UserContextType = {
  songs: [],
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
  },
});

export const { setSearchedSongs } = songsSlice.actions;
export default songsSlice.reducer;
