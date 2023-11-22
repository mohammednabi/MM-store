"use client";

import { CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/cards/ProductCard";
import axios from "axios";
import { motion } from "framer-motion";

export default function page() {
  const [products, setProducts] = useState();

  // const response = await fetch(
  //   "https://dummyjson.com/products?limit=100&skip=0&"
  // );
  // const products = await response.json();
  // const addedProducts = useMemo(() => {
  //   return JSON.parse(localStorage.getItem("products"));
  // }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  async function getAllProducts() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=100&skip=0&"
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
    getAllProducts();
    // checkAddedProducts();
  }, [products]);

  return (
    <>
      <h1 className="text-3xl capitalize text-lime-400 text-center font-mono font-semibold mt-10 mb-10">
        all products
      </h1>
      {products ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            margin: "2rem 0",
            justifyContent: "center",
          }}
        >
          {products &&
            products.map((p) => (
              <motion.div key={p.id} variants={item}>
                <ProductCard product={p} />
              </motion.div>
            ))}
        </motion.div>
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
