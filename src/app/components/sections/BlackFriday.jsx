"use client";

import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import ProductCard from "../cards/ProductCard";

const myFont = localFont({
  src: "/TTtrailersBold.ttf",
});

export default function BlackFriday() {
  return (
    <>
      <Container
        maxWidth="xl"
        className="bg-neutral-950 p-20"
        sx={{ overflowX: "hidden" }}
      >
        <div
          className={myFont.className}
          style={{
            textTransform: "uppercase",
            lineHeight: ".8",
            fontSize: "8rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            Don't Miss Our Black Friday{" "}
          </h1>
          <motion.h1
            animate={{
              scale: [1.1, 1.2, 1.2, 1.1, 1.1],
              rotate: [0, 0, 10, 10, 0],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            style={{ color: "#db2777", marginTop: "1rem" }}
          >
            Offers
          </motion.h1>
        </div>

        <Container maxWidth="lg">
          <Image
            // src={
            //   "https://images.pexels.com/photos/256198/pexels-photo-256198.jpeg"
            // }
            src={
              "https://cdn.dribbble.com/users/375428/screenshots/1817000/media/7f4f0d3ffdf4ae4d09a90a3acdbe3862.gif"
            }
            sizes="100vw"
            // Make the image display full width
            width={100}
            height={100}
            style={{
              width: "150%",
              height: "auto",
              mixBlendMode: "screen",
            }}
            className=" border-0 border-solid border-lime-400 rounded-xl "
          />
        </Container>
        {/* <ProductCard /> */}
      </Container>
    </>
  );
}
