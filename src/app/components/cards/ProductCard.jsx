"use client";

import { increment } from "@/app/GlobalRedux/features/cart/cartSlice";
import { SignedIn, useUser } from "@clerk/nextjs";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import React, { useMemo } from "react";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }) {
  const { user } = useUser();
  const dispatch = useDispatch();
  const priceAfterDiscount = useMemo(() => {
    return product.price - (product.price * product.discountPercentage) / 100;
  }, [product]);

  const addToWatchList = (item) => {
    if (!localStorage.getItem("products")) {
      localStorage.setItem("products", "[]");
    }
    const products = JSON.parse(localStorage.getItem("products"));

    //   const products = [];
    const finded = products.find((p) => {
      if (item.id === p) {
        return true;
      } else {
        return false;
      }
    });
    if (!finded) {
      products.push(item.id);
      localStorage.setItem("products", JSON.stringify(products));
      dispatch(increment());
    }
  };

  return (
    <>
      <Stack
        spacing={2}
        sx={{ color: "white", maxWidth: "18rem" }}
        className="font-mono"
      >
        <Link href={`/product?product=${product.id}`}>
          <Box
            sx={{
              width: "18rem",
              height: "18rem",
              border: "1px rgb(163 230 53) solid",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={500}
              quality={100}
              className="w-full h-full rounded-2xl  transition-transform hover:scale-125 hover:rotate-2"
            />
          </Box>
        </Link>
        <Stack
          spacing={2}
          sx={{ height: "15rem" }}
          justifyContent={"space-between"}
        >
          <h1 className="text-2xl font-mono">{product.title}</h1>
          {/* <h2 className="text-md font-mono">{product.description}</h2> */}
          <Stack spacing={4}>
            <Stack>
              <h2 className="text-xl text-lime-400">
                {priceAfterDiscount.toFixed(2)} $
              </h2>
              <h1 className="text-md line-through text-customRed">
                {product.price} $
              </h1>
            </Stack>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              <Link href={`/product?product=${product.id}`}>
                <button className="sign-button text-black flex justify-center bg-lime-400  text-sm p-2  rounded-full gap-5 whitespace-nowrap overflow-hidden">
                  <span className="button-text">show details</span>
                </button>
              </Link>

              {!product.added ? (
                <button
                  onClick={() => {
                    if (user) {
                      addToWatchList(product);
                    }
                  }}
                  className=" text-black rounded-full bg-white text-sm p-3 transition-colors hover:bg-customRed"
                >
                  add to cart ➕
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (user) {
                      addToWatchList(product);
                    }
                  }}
                  className=" text-white rounded-full  bg-customRed text-sm p-3 "
                >
                  added to cart ✔
                </button>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
