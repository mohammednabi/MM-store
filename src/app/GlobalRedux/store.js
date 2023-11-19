"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import cartPriceSlice from "./features/cart/cartPriceSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    cartPrice: cartPriceSlice,
  },
});
