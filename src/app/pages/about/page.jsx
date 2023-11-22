"use client";
import { Divider, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CategoryIcon from "@mui/icons-material/Category";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import Link from "next/link";
// import customFont from "/my-app/public/fonts/tt_trailers/TTtrailersBold.ttf";
import { motion } from "framer-motion";

export default function page() {
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

  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} sx={{ mt: 15 }}>
        <Stack justifyContent={"center"} alignItems={"center"} spacing={5}>
          <Stack direction={"row"} sx={{ mb: 5 }} spacing={-1}>
            <h1
              // sx={{ fontSize: { md: "15rem", xs: "10rem" } }}
              className="font-bold font-primary text-9xl text-lime-400 "
            >
              M
            </h1>
            <h1
              // sx={{ fontSize: { md: "15rem", xs: "10rem" } }}
              className="font-bold font-primary text-9xl text-lime-400 "
            >
              M
            </h1>
          </Stack>
          <h1 className="  text-white font-primary md:text-5xl xs:text-3xl text-center  capitalize">
            Your One-Stop Shop for Variety, Velocity, and VIP Service!
          </h1>
        </Stack>
        <Divider
          sx={{
            background: "rgb(255,255,255,.1)",
            width: "100%",
            mt: 5,
            mb: 5,
          }}
        />
        <h1 className="text-center text-lime-400 md:text-8xl xs:text-6xl   font-primary  capitalize mt-5 mb-5">
          enjoy our services
        </h1>

        <motion.div
          variants={container}
          viewport={true}
          initial="hidden"
          whileInView={"visible"}
          // animate="visible"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "3rem",
            gap: "2rem",
          }}
        >
          <motion.div
            variants={item}
            className="flex flex-col justify-center items-center  p-10 rounded-lg w-72 bg-gradient-to-t from-black to-neutral-950 "
          >
            <LocalShippingIcon sx={{ fontSize: "5rem", color: "white" }} />
            <Stack spacing={2}>
              <h1 className="font-xl text-center capitalize text-white font-mono font-semibold">
                fast shipping
              </h1>
              <h1 className="font-md text-center capitalize text-zinc-600 font-mono font-semibold">
                "Lightning-fast shipping for instant gratification. Shop now,
                receive quickly!"
              </h1>
            </Stack>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col justify-center items-center bg-gradient-to-t from-black to-neutral-950 p-10 rounded-lg w-72"
          >
            <CategoryIcon sx={{ fontSize: "5rem", color: "white" }} />
            <Stack spacing={2}>
              <h1 className="font-xl text-center capitalize text-white font-mono font-semibold">
                products variety
              </h1>
              <h1 className="font-md text-center capitalize text-zinc-600 font-mono font-semibold">
                "Endless options, limitless possibilities. Explore our diverse
                product range now!"
              </h1>
            </Stack>
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col justify-center items-center bg-gradient-to-t from-black to-neutral-950 p-10 rounded-lg w-72"
          >
            <SupportAgentIcon sx={{ fontSize: "5rem", color: "white" }} />
            <Stack spacing={2}>
              <h1 className="font-xl text-center capitalize text-white font-mono font-semibold">
                customer support
              </h1>
              <h1 className="font-md text-center capitalize text-zinc-600 font-mono font-semibold">
                "Customer support that cares. We're here to assist you,
                anytime."
              </h1>
            </Stack>
          </motion.div>
        </motion.div>

        <Divider
          sx={{
            background: "rgb(255,255,255,.1)",
            width: "100%",
            mt: 5,
            mb: 5,
          }}
        />
        <Link href={"/pages/products"}>
          <div className="flex justify-center items-center w-full mb-10">
            <button className=" text-black rounded-full font-mono capitalize text-2xl font-semibold   bg-white  p-3 mt-10 w-72 transition-colors hover:bg-customRed">
              shop now
            </button>
          </div>
        </Link>
      </Stack>
    </>
  );
}
