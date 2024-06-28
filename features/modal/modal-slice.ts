import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, variant: "AUTH" },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.variant = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.variant = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
