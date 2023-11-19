"use client";
import { createSlice } from "@reduxjs/toolkit";

export const totalCartPriceSlice = createSlice({
  name: "cartTotalPrice",
  initialState: {
    value: 0,
    allPrices: [],
  },
  reducers: {
    setPrice: (state, action) => {
      const newPrice = { id: action.payload.id, price: action.payload.price };
      state.allPrices.push(newPrice);
      let theTotalPrice = 0;
      state.allPrices.forEach((element) => {
        theTotalPrice += Number(element.price);
      });
      state.value = theTotalPrice;
    },
  },
});

export const { setPrice } = totalCartPriceSlice.actions;
export default totalCartPriceSlice.reducer;
