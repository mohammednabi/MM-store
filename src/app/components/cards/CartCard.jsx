"use client";

import { setPrice } from "@/app/GlobalRedux/features/cart/cartPriceSlice";
import { DeleteForever } from "@mui/icons-material";
import { Box, IconButton, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

export default function CartCard({ product, deleteItem }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const priceAfterDiscount = useMemo(() => {
    return product.price - (product.price * product.discountPercentage) / 100;
  }, [product]);

  useEffect(() => {
    dispatch(
      setPrice({
        id: product.id,
        price: Number(priceAfterDiscount),
      })
    );
  }, []);

  return (
    <>
      <Grid2 container>
        <Grid2 md={4} xs={6}>
          <div className="w-full h-64 p-2">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full  rounded-3xl "
              style={{ objectFit: "cover" }}
            />
          </div>
        </Grid2>
        <Grid2 container alignItems={"center"} md={6} xs={6}>
          <Stack justifyContent={"center"} className="p-5" spacing={2}>
            <h1 className="text-white text-3xl font-mono font-bold">
              {product.title}
            </h1>
            <h1 className="text-white text-lg font-mono">
              {product.description}
            </h1>
            <Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <button
                  onClick={() => {
                    setQuantity((c) => c + 1);
                  }}
                  className="text-black w-14 bg-white text-2xl p-1 pr-4 pl-4 rounded-full"
                >
                  +
                </button>
                <h1 className="text-white font-mono text-3xl">{quantity}</h1>
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity((c) => c - 1);
                    }
                  }}
                  className="text-black w-14 bg-white text-2xl p-1 pr-4 pl-4  rounded-full"
                >
                  -
                </button>
                <IconButton
                  onClick={() => {
                    deleteItem(product.id);
                  }}
                >
                  <DeleteForever
                    className="text-customRed transition-colors hover:text-lime-400"
                    sx={{ fontSize: "3rem" }}
                  />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                flexWrap={"wrap"}
                sx={{ width: "100%", display: { md: "none", xs: "initial" } }}
              >
                <h2 className="text-xl text-white capitalize font-mono">
                  total :
                </h2>
                <h1 className="text-md  text-lime-400 font-mono">
                  {(priceAfterDiscount * quantity).toFixed(2)} $
                </h1>
              </Stack>
            </Stack>
          </Stack>
        </Grid2>
        <Grid2
          container
          justifyContent={"center"}
          alignItems={"center"}
          md={2}
          xs={0}
        >
          <Stack spacing={2} sx={{ display: { md: "initial", xs: "none" } }}>
            <Stack>
              <h2 className="text-xl text-lime-400 font-mono">
                {priceAfterDiscount.toFixed(2)} $
              </h2>
              <h1 className="text-md line-through text-customRed font-mono">
                {product.price} $
              </h1>
            </Stack>
            <hr />
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <h2 className="text-xl text-white capitalize font-mono">
                total :
              </h2>
              <h1 className="text-md  text-lime-400 font-mono">
                {(priceAfterDiscount * quantity).toFixed(2)} $
              </h1>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
    </>
  );
}
