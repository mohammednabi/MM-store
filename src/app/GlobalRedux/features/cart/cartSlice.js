"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value:
    typeof window !== "undefined" && localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products")).length
      : 0,
};

export const cartSlice = createSlice({
  name: "cartCount",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
