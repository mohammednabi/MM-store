import { Box, Stack, Typography } from "@mui/material";

import Image from "next/image";
import React from "react";

export default function BrandsSection() {
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={5}
        sx={{ mt: 10, mb: 5 }}
      >
        <Typography variant="h2" sx={{ color: "white" }} className="font-mono">
          Brands
        </Typography>
        <Stack sx={{ overflow: "auto", mb: 5 }}>
          <Stack
            direction={"row"}
            spacing={10}

            // flexWrap={"wrap"}
          >
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />{" "}
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />{" "}
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />{" "}
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />{" "}
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1200px-Adidas_logo.png"
              }
              width={100}
              height={100}
              quality={100}
              style={{
                width: "6rem",
                height: "auto",

                filter: "invert(1)",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
