"use client";

import { ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const cartCount = useSelector((state, action) =>
  {
    return state.cart.value
  })

  // useEffect(() => {
  //   if (user) {
  //     console.log("user dataaa : ", user.imageUrl);
  //   }
  //   console.log("user dataaa : ", user);
  // }, [user]);

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        className="sticky z-10 top-5  bg-neutral-950 w-10/12 h-24 gap-28 rounded-full ml-auto mr-auto mt-5  text-white font-mono"
      >
        <Link href={"/"}>
          <Stack direction={"row"} spacing={-1}>
            <Typography variant="h2" className="font-bold  text-lime-400 ">
              M
            </Typography>
            <Typography variant="h2" className="font-bold  text-lime-400 ">
              M
            </Typography>
          </Stack>
        </Link>

        {/* list */}
        <div className="my-list text-2xl flex justify-center items-center gap-5">
          <Link href={"/products"}>
            <div className="">Products </div>
          </Link>
          <Link href={"/"}>
            <div className="">Discover </div>
          </Link>
          <Link href={"/"}>
            <div className="">About </div>
          </Link>
        </div>

        <div className="buttons flex justify-center items-center gap-5">
          {!user && (
            <>
              <Link href={"/sign-in"}>
                <button className=" text-black w-11/12 bg-white text-2xl p-3 pr-8 pl-8 rounded-full">
                  login
                </button>
              </Link>
              <Link href={"/sign-up"}>
                <button className="sign-button text-black flex justify-center bg-lime-400 w-11/12 text-2xl p-3 pr-8 pl-8 rounded-full gap-5 whitespace-nowrap overflow-hidden">
                  <span className="button-text">sign up</span>
                </button>
              </Link>
            </>
          )}
          {user && (
            <>
              <Badge badgeContent={cartCount} color="success">
                <Link href={"/cart"}>
                  <ShoppingCart sx={{ color: "white", fontSize: "2rem" }} />
                </Link>
              </Badge>
              <div className="text-2xl">
                <UserButton afterSignOutUrl="/" />
              </div>
            </>
          )}
        </div>
      </Stack>
    </>
  );
}
