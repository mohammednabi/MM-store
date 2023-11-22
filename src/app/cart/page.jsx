"use client";
import { Box, Button, CircularProgress, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CartCard from "../components/cards/CartCard";
import { decrement } from "../GlobalRedux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function page() {
  const dispatch = useDispatch();
  const [allProductsIds, setAllProductsIds] = useState([]);
  const [products, setProducts] = useState();

  const totalPrice = useSelector((state) => {
    return state.cartPrice.value;
  });

  const allPrices = useSelector((state) => {
    return state.cartPrice.allPrices;
  });

  async function getProductData(id) {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function deleteItem(item) {
    const allProductsIds = JSON.parse(localStorage.getItem("products"));
    const filteredProductsIds = allProductsIds.filter((p) => {
      if (p !== item) {
        return p;
      }
    });
    const filterProducts = products.filter((p) => {
      if (p.id !== item) {
        return p;
      }
    });
    setProducts(filterProducts);

    localStorage.setItem("products", JSON.stringify(filteredProductsIds));
    setAllProductsIds(filteredProductsIds);
    dispatch(decrement());
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = JSON.parse(localStorage.getItem("products"));
        if (allProducts && allProducts.length > 0) {
          const productDataPromises = allProducts.map(getProductData);
          const newProducts = await Promise.all(productDataPromises);
          setProducts(newProducts);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    console.log("all prices : ", allPrices);
    console.log("total prices : ", totalPrice);
  }, []);

  return (
    <>
      {products ? (
        products.length > 0 ? (
          <Stack sx={{ mt: 5, mb: 5 }}>
            {products &&
              products.length > 0 &&
              products.map((p) => (
                <CartCard key={p.id} product={p} deleteItem={deleteItem} />
              ))}
            <Divider sx={{ background: "rgb(255,255,255,.1)", mt: 5, mb: 5 }} />
            <h1 className="text-white capitalize md:text-3xl xs:text-xl font-mono text-center">
              total = <span className="text-lime-400">{totalPrice} $</span>
            </h1>

            <Link href={"/payment"}>
              <div className="flex justify-center items-center">
                <button className=" text-black rounded-full font-mono capitalize md:text-2xl xs:text-lg font-semibold   bg-white  md:p-3 xs:p-2 mt-10 md:w-8/12 xs:w-7/12' transition-colors hover:bg-customRed">
                  buy now 💼
                </button>
              </div>
            </Link>
          </Stack>
        ) : (
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ pt: 11, pb: 12 }}
          >
            <CircularProgress size={200} color="success" />
          </Stack>
        )
      ) : (
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "calc(100vh - 116px - 214.550px)" }}
        >
          <h1 className="text-white text-3xl font-mono text-center capitalize">
            no products in the cart
          </h1>
        </Stack>
      )}
    </>
  );
}
