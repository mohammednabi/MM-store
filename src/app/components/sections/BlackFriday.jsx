"use client";

import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

export default function BlackFriday() {
  return (
    <>
      <Container
        maxWidth="xl"
        className="bg-neutral-950 p-20"
        sx={{ overflowX: "hidden" }}
      >
        <div
          style={{
            lineHeight: ".8",
          }}
          className="font-primary uppercase md:text-9xl xs:text-7xl text-center "
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

        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "center" }}
        >
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
            className=" xs:w-96 md:w-full h-auto   rounded-xl  mix-blend-screen"
            alt="motion gif"
          />
        </Container>
      </Container>
    </>
  );
}
