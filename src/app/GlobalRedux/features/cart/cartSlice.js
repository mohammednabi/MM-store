"use client";

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartCount",
  initialState: {
    value: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products")).length
      : 0,
    // value: 2,
  },
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
