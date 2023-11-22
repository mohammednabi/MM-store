"use client";

import { CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import axios from "axios";
export default function page({ searchParams }) {
  const category = searchParams.category;
  const [products, setProducts] = useState();

  async function getAllProducts(cat) {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/category/${cat}`
      );

      const editedProducts = response.data.products.map((p) => {
        return { ...p, added: false };
      });

      setProducts(editedProducts);
      // console.log(response);
      checkAddedProducts();
    } catch (error) {
      console.error(error);
    }
  }

  function checkAddedProducts() {
    if (products) {
      const addedProducts = JSON.parse(localStorage.getItem("products"));

      const updatedProducts = products.map((product) => {
        if (addedProducts.includes(product.id)) {
          return { ...product, added: true };
        } else {
          return product;
        }
      });

      setProducts(updatedProducts);
    }
  }

  useEffect(() => {
    getAllProducts(category);
    // checkAddedProducts();
  }, [products]);

  return (
    <>
      <h1 className="text-3xl capitalize text-lime-400 text-center font-mono font-semibold mt-10 mb-10">
        {category}
      </h1>
      {products ? (
        <Stack
          direction={"row "}
          justifyContent={"center"}
          // alignItems={"center"}
          flexWrap={"wrap"}
          sx={{ gap: "2rem", mt: 5, mb: 5 }}
        >
          {products &&
            products.map((p) => <ProductCard product={p} key={p.id} />)}
        </Stack>
      ) : (
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ pt: 11, pb: 12 }}
        >
          <CircularProgress size={200} color="success" />
        </Stack>
      )}
    </>
  );
}
