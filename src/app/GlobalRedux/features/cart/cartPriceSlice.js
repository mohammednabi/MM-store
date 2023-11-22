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
      const newPrice = {
        id: action.payload.id,
        price: action.payload.price,
        quantity: action.payload.quantity,
      };
      const finded = state.allPrices.find((p) => {
        if (p.id === newPrice.id) {
          return true;
        } else {
          return false;
        }
      });
      if (!finded) {
        state.allPrices.push(newPrice);
      }
      let theTotalPrice = 0;
      state.allPrices.forEach((element) => {
        // console.log(element.price);
        theTotalPrice += Number(element.price);
      });
      state.value = theTotalPrice.toFixed(2);
    },
    editPrice: (state, action) => {
      let editedPrices = state.allPrices.map((p) => {
        if (p.id === action.payload.id) {
          return {
            ...p,
            price: action.payload.price,
            quantity: action.payload.quantity,
          };
        } else {
          return p;
        }
      });
      let theTotalPrice = 0;
      state.allPrices = editedPrices;

      state.allPrices.forEach((element) => {
        // console.log(element.price);
        theTotalPrice += Number(element.price) * Number(element.quantity);
      });
      state.value = theTotalPrice.toFixed(2);
    },
    deletePrice: (state, action) => {
      let filteredPrices = state.allPrices.filter((p) => {
        return p.id !== action.payload.id;
      });
      let theTotalPrice = 0;
      state.allPrices = filteredPrices;

      state.allPrices.forEach((element) => {
        // console.log(element.price);
        theTotalPrice += Number(element.price) * Number(element.quantity);
      });
      state.value = theTotalPrice.toFixed(2);
    },
  },
});

export const { setPrice, editPrice, deletePrice } = totalCartPriceSlice.actions;
export default totalCartPriceSlice.reducer;
