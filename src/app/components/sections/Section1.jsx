import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

export default function Section1() {
  return (
    <>
      <Grid container sx={{ mt: 10 }}>
        <Grid md={5} xs={12} sx={{ pl: 2, mt: 5 }}>
          <Stack sx={{ alignItems: { xs: "center", md: "initial" } }}>
            <h1
              className="text-white uppercase text-center md:text-left lg:text-9xl xs:text-7xl md:text-8xl  font-primary "
              style={{
                lineHeight: ".8",
              }}
            >
              Explore and Discover Your Next Favourite product.
            </h1>
            <Link href={"/products"}>
              <button className="discover-button font-mono flex justify-center mb-5 bg-lime-400 w-full xs:mt-5 md:mt-0 text-4xl  p-3 pr-8 pl-8  gap-5 whitespace-nowrap overflow-hidden">
                <span className="button-text-big ">Discover</span>
              </button>
            </Link>
          </Stack>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          md={7}
          xs={12}
          sx={{ overflow: "hidden" }}
        >
          <div className="xs:w-96 md:w-full h-64 grayscale md:ml-20 xs:ml-0 rounded-full">
            <Image
              src={
                "https://cdn.dribbble.com/users/1055435/screenshots/3806405/media/2814f72951891659809ee6d7f15d2fd4.gif"
              }
              sizes="100vw"
              priority={false}
              // Make the image display full width
              width={100}
              height={100}
              alt="motion gif"
              className=" w-full h-full object-cover  rounded-full   "
            />
          </div>
          <div className="md:block xs:hidden xs:w-96 md:w-full h-64 grayscale invert md:ml-20 xs:ml-0 rounded-full">
            <Image
              src={
                "https://cdn.dribbble.com/users/1055435/screenshots/3806405/media/2814f72951891659809ee6d7f15d2fd4.gif"
              }
              sizes="100vw"
              priority={false}
              // Make the image display full width
              width={100}
              height={100}
              alt="motion gif"
              className=" w-full h-full object-cover  rounded-full   "
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
