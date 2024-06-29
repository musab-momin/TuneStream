"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/user-details/user-slice";
import modalReduer from "@/features/modal/modal-slice";
import songsReducer from "@/features/songs/songs-slice";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      modal: modalReduer,
      songs: songsReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
