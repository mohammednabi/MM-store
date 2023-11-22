"use client";
import { useUser } from "@clerk/nextjs";
import {
  Box,
  CircularProgress,
  Divider,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../GlobalRedux/features/cart/cartSlice";
import Link from "next/link";
import { useTheme } from "@emotion/react";

export default function page({ params, searchParams }) {
  const upToSmallScreen = useMediaQuery("(min-width:600px)");
  const productId = searchParams.product;
  const imgRef = useRef();
  const [productDetails, setProductDetails] = useState();
  const { user } = useUser();
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
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

  const checkAdded = () => {
    const allIds = JSON.parse(localStorage.getItem("products"));
    const finded = allIds.find((p) => {
      if (Number(productId) === p) {
        return true;
      } else {
        return false;
      }
    });

    setAdded(finded);
  };

  useEffect(() => {
    getProductData(productId);
    checkAdded();
  }, [productId]);

  return (
    <>
      {productDetails ? (
        <Grid2 container sx={{ mt: 5, mb: 5, pl: 5, pr: 5 }}>
          <Grid2 container justifyContent={"center"} md={4} xs={12}>
            <Stack className="overflow-hidden  sm:w-8/12 md:w-full h-auto  rounded-3xl">
              <img
                ref={imgRef}
                src={productDetails.thumbnail}
                className=" w-full h-full   rounded-3xl transition-transform hover:scale-110 hover:rotate-2"
              />
            </Stack>
            <Stack
              justifyContent={"center"}
              direction={"row"}
              sx={{ mt: 5, gap: "1rem" }}
              flexWrap={"wrap"}
            >
              {productDetails.images &&
                productDetails.images.map((g, i) => (
                  <img
                    src={g}
                    className={`border-2 border-${
                      g === productDetails.thumbnail ? "lime-400" : "customRed"
                    } border-solid rounded-md cursor-pointer hover:border-lime-400  w-20 h-20`}
                    onClick={() => {
                      imgRef.current.src = g;
                    }}
                  />
                ))}
            </Stack>
          </Grid2>
          <Grid2 md={8} xs={12}>
            <Stack
              spacing={2}
              sx={{ color: "white", p: { md: 5, xs: 1 }, mt: { md: 0, xs: 5 } }}
            >
              <h3 className="capitalize md:text-3xl xs:text-xl font-mono">
                {" "}
                {productDetails.title}
              </h3>
              <h5 className="capitalize md:text-xl xs:text-sm font-mono">
                {" "}
                {productDetails.description}
              </h5>

              <Stack className="font-mono">
                <h2 className="md:text-3xl xs:text-xl text-lime-400 ">
                  {priceAfterDiscount.toFixed(2)} $
                </h2>
                <h1 className="md:text-xl xs:text-sm line-through text-customRed">
                  {productDetails.price} $
                </h1>
                <h3 className="md:text-2xl xs:text-lg text-white ">
                  Save :{" "}
                  <span className="text-lime-400">
                    {(
                      productDetails.price - priceAfterDiscount.toFixed(2)
                    ).toFixed(2)}
                    ${" "}
                  </span>
                </h3>
              </Stack>
              <Rating
                name="read-only"
                precision={0.5}
                value={Number(productDetails.rating).toFixed(1)}
                size={upToSmallScreen ? "large" : "small"}
                readOnly
              />
              <Divider
                sx={{
                  background: "rgb(255,255,255,.1)",
                  width: "100%",
                  mt: 5,
                  mb: 5,
                }}
              />
              <Stack className="capitalize font-mono  md:p-5 xs:p-2">
                <h6>
                  Brand :
                  <span className="text-lime-400"> {productDetails.brand}</span>
                </h6>
                <h6>
                  Category :
                  <span className="text-lime-400">
                    {" "}
                    {productDetails.category}
                  </span>
                </h6>
                <h6>
                  In Stock :
                  <span className="text-lime-400"> {productDetails.stock}</span>
                </h6>
              </Stack>
              <Divider
                sx={{
                  background: "rgb(255,255,255,.1)",
                  width: "100%",
                  mt: 5,
                  mb: 5,
                }}
              />

              {user ? (
                !added ? (
                  <button
                    onClick={() => {
                      if (user) {
                        addToWatchList(productDetails);
                        setAdded(true);
                      }
                    }}
                    className=" text-black rounded-full capitalize font-mono bg-white  md:text-sm xs:text-xs p-3 w-8/12 transition-colors hover:bg-customRed"
                  >
                    add to cart ➕
                  </button>
                ) : (
                  <button className=" text-white rounded-full font-mono capitalize w-8/12 bg-customRed  md:text-sm xs:text-xs p-3 ">
                    added to cart ✔
                  </button>
                )
              ) : (
                <h1 className="capitalize text-white md:text-xl xs:text-lg font-mono ">
                  <Link href={"/pages/sign-in"}>
                    <span className="text-lime-400 md:text-2xl xs:text-xl transition-colors underline hover:text-customRed">
                      {" "}
                      sign-In
                    </span>
                  </Link>{" "}
                  to add product to your cart
                </h1>
              )}
            </Stack>
          </Grid2>
        </Grid2>
      ) : (
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "calc(100vh - 116px - 214.550px)" }}
        >
          <CircularProgress color="success" size={200} />
        </Stack>
      )}
    </>
  );
}
