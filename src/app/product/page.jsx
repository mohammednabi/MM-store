"use client";
import {
  Box,
  CircularProgress,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function page({ params, searchParams }) {
  const productId = searchParams.product;
  const imgRef = useRef();
  const [productDetails, setProductDetails] = useState();
  const priceAfterDiscount = useMemo(() => {
    if (productDetails) {
      return (
        productDetails.price -
        (productDetails.price * productDetails.discountPercentage) / 100
      );
    }
  }, [productDetails]);

  function getProductData(id) {
    // const response = await fetch(`https://dummyjson.com/products/${productId}`).then();
    // const productDetails = await response.json();
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => setProductDetails(data)) // Set the state with the parsed data
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProductData(productId);
  }, [productId]);

  return (
    <>
      {productDetails ? (
        <Grid2 container sx={{ mt: 5, mb: 5, pl: 5, pr: 5 }}>
          <Grid2 md={4} xs={12}>
            <Stack className="overflow-hidden w-full h-auto  rounded-3xl">
              <img
                ref={imgRef}
                src={productDetails.thumbnail}
                className="w-full h-auto   rounded-3xl transition-transform hover:scale-110 hover:rotate-2"
              />
            </Stack>
            <Stack
              direction={"row"}
              sx={{ mt: 5, gap: "1rem" }}
              flexWrap={"wrap"}
            >
              {productDetails.images &&
                productDetails.images.map((g, i) => (
                  <img
                    src={g}
                    width={100}
                    height={100}
                    className={`border-2 border-${
                      g === productDetails.thumbnail ? "lime-400" : "customRed"
                    } border-solid rounded-md cursor-pointer hover:border-lime-400`}
                    onClick={() => {
                      imgRef.current.src = g;
                    }}
                  />
                ))}
            </Stack>
          </Grid2>
          <Grid2 md={8} xs={12}>
            <Stack spacing={2} sx={{ color: "white", p: 5 }}>
              <Typography variant="h3" className="capitalize font-mono">
                {" "}
                {productDetails.title}
              </Typography>
              <Typography variant="h5" className="capitalize font-mono">
                {" "}
                {productDetails.description}
              </Typography>

              <Stack>
                <h2 className="text-3xl text-lime-400">
                  {priceAfterDiscount.toFixed(2)} $
                </h2>
                <h1 className="text-xl line-through text-customRed">
                  {productDetails.price} $
                </h1>
                <h3 className="text-2xl text-white">
                  Save :{" "}
                  <span className="text-lime-400">
                    {productDetails.discountPercentage}%{" "}
                  </span>
                </h3>
              </Stack>
              <Rating
                name="read-only"
                precision={0.5}
                value={productDetails.rating.toFixed(1)}
                size="large"
                readOnly
              />
              <Stack className="capitalize font-mono border-2 border-solid border-white p-5">
                <Typography variant="h6">
                  Brand :
                  <span className="text-lime-400"> {productDetails.brand}</span>
                </Typography>
                <Typography variant="h6">
                  Category :
                  <span className="text-lime-400">
                    {" "}
                    {productDetails.category}
                  </span>
                </Typography>
                <Typography variant="h6">
                  In Stock :
                  <span className="text-lime-400"> {productDetails.stock}</span>
                </Typography>
              </Stack>
              <button className="align-middle text-black rounded-full bg-white text-sm p-3  w-8/12  transition-colors hover:bg-lime-400">
                add to cart
              </button>
            </Stack>
          </Grid2>
        </Grid2>
      ) : (
        <CircularProgress color="success" size={200} />
      )}
    </>
  );
}
