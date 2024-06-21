"use client";

import { UserDetails } from "@/types/general";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/auth-helpers-nextjs";

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
};

const initialState: UserContextType = {
  accessToken: null,
  user: null,
  userDetails: null,
  isLoading: false,
};

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (supaClient: any) => {
    const resp = await supaClient.from("users").select("*").single();
    return resp;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //set user details
    setUserDetails(state, action) {
      state.user = action?.payload?.user;
      state.userDetails = action?.payload?.userDetails;
    },
    setUser(state, action) {
      state.user = action?.payload;
    },
    //set loading to true
    startLoading(state) {
      state.isLoading = true;
    },
    //stop loading to false
    stopLoading(state) {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload?.status === 200) {
          state.userDetails = action.payload?.data;
        } else {
          state.userDetails = null;
        }
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setUserDetails, setUser, startLoading, stopLoading } =
  userSlice.actions;
export default userSlice.reducer;
