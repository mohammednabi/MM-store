"use client";

import { ShoppingCart } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { useSelector } from "react-redux";
import axios from "axios";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export default function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const cartCount = useSelector((state, action) => {
    return state.cart.value;
  });
  const theme = useTheme();
  const upToSmallScreen = useMediaQuery(theme.breakpoints.up("md"));

  const menuRef = useRef();
  const menuRef2 = useRef();
  const UserButtonRef = useRef();

  const [categories, setCategories] = useState();
  const [open, setOpen] = useState(false);

  const handleReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  async function getCategories() {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleOutsideClick(e) {
    if (menuRef2.current && !menuRef2.current.contains(e.target)) {
      setTimeout(() => {
        setOpen(false);
      }, 100);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {upToSmallScreen && (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          className="sticky z-10 top-5 "
        >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
            className="  bg-neutral-950 w-full h-24  gap-10 rounded-full ml-auto mr-auto   text-white font-mono"
          >
            <Link href={"/"}>
              <Stack direction={"row"} spacing={-1}>
                <h2 className="font-bold font-primary text-7xl text-lime-400 ">
                  M
                </h2>
                <h2 className="font-bold font-primary text-7xl text-lime-400 ">
                  M
                </h2>
              </Stack>
            </Link>

            {/* list */}
            <div className="my-list text-2xl flex justify-center items-center gap-5">
              <Link href={"/products"}>
                <div className="">Products </div>
              </Link>

              <div className="relative">
                <h1
                  style={{ cursor: "pointer" }}
                  onMouseOver={() => {
                    if (categories) {
                      menuRef.current.style.display = "flex";
                    }
                  }}
                  onMouseLeave={() => {
                    if (categories) {
                      menuRef.current.style.display = "none";
                    }
                  }}
                >
                  Categories ▼
                </h1>
                {categories && (
                  <div
                    ref={menuRef}
                    className=" flex-col    flex gap-5 -left-1/2  absolute bg-black text-white p-5  "
                    style={{
                      width: "20rem",
                      height: "20rem",
                      overflow: "auto",
                      display: "none",
                    }}
                    onMouseOver={() => {
                      menuRef.current.style.display = "flex";
                    }}
                    onMouseLeave={() => {
                      menuRef.current.style.display = "none";
                    }}
                  >
                    {categories.map((c) => (
                      <Link
                        key={c}
                        href={`category?category=${c}`}
                        onClick={handleReload}
                      >
                        <h1 className="category capitalize ">{c}</h1>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href={"/about"}>
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
        </Stack>
      )}

      {!upToSmallScreen && (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          className="sticky z-10 top-5 "
        >
          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            flexWrap={"wrap"}
            className="  bg-neutral-950 w-full h-20 gap-10 rounded-full ml-auto mr-auto   text-white font-mono"
          >
            <Link
              href={"/"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Stack direction={"row"} spacing={-1}>
                <h2 className="font-bold font-primary text-7xl text-lime-400 ">
                  M
                </h2>
                <h2 className="font-bold font-primary text-7xl text-lime-400 ">
                  M
                </h2>
              </Stack>
            </Link>
            <Stack className="relative">
              <IconButton
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <FormatListBulletedIcon sx={{ color: "white" }} />
              </IconButton>
              {open && (
                <div
                  ref={menuRef2}
                  className="flex flex-col gap-5 rounded-2xl w-72 absolute font-mono z-30 capitalize top-10 right-2 p-10 text-white bg-neutral-950 text-xl"
                >
                  <div className="buttons flex justify-center items-center gap-5">
                    {!user && (
                      <>
                        <Link href={"/sign-up"}>
                          <button className="sign-button text-black flex justify-center bg-lime-400 w-11/12 text-2xl p-1 pr-8 pl-8 rounded-full gap-5 whitespace-nowrap overflow-hidden">
                            <span className="button-text">login</span>
                          </button>
                        </Link>
                      </>
                    )}
                    {user && (
                      <>
                        <Badge badgeContent={cartCount} color="success">
                          <Link
                            href={"/cart"}
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <ShoppingCart
                              sx={{ color: "white", fontSize: "2rem" }}
                            />
                          </Link>
                        </Badge>
                        <div className="text-2xl">
                          <UserButton afterSignOutUrl="/" />
                        </div>
                      </>
                    )}
                  </div>

                  <Divider
                    sx={{
                      background: "rgb(255,255,255,.1)",
                      width: "100%",
                    }}
                  />
                  <Link
                    href={"/products"}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <h1 className="transition-colors hover:text-lime-400">
                      products
                    </h1>
                  </Link>
                  <Link
                    href={"/about"}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <h1 className="transition-colors hover:text-lime-400">
                      about
                    </h1>
                  </Link>
                  <div className="relative">
                    <h1
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (categories) {
                          menuRef.current.style.display = "flex";
                        }
                      }}
                      // onMouseLeave={() => {
                      //   if (categories) {
                      //     menuRef.current.style.display = "none";
                      //   }
                      // }}
                      className="transition-colors hover:text-lime-400"
                    >
                      Categories ↦
                    </h1>
                    {categories && (
                      <div
                        ref={menuRef}
                        className=" flex-col  rounded-xl  flex gap-5   absolute bg-black text-white p-5  "
                        style={{
                          width: "15rem",
                          height: "20rem",
                          overflow: "auto",
                          display: "none",
                        }}
                        // onMouseOver={() => {
                        //   menuRef.current.style.display = "flex";
                        // }}
                        // onMouseLeave={() => {
                        //   menuRef.current.style.display = "none";
                        // }}
                      >
                        {categories.map((c) => (
                          <Link
                            key={c}
                            href={`category?category=${c}`}
                            onClick={() => {
                              handleReload();
                              setOpen(false);
                            }}
                          >
                            <h1 className="category capitalize ">{c}</h1>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
}
