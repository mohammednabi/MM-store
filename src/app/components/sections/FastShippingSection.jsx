import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React from "react";

import Link from "next/link";
// import customFont from "/my-app/public/fonts/tt_trailers/TTtrailersBold.ttf";

export default function FastShippingSection() {
  return (
    <>
      <Grid container sx={{ p: 2, mt: 10 }}>
        <Grid container justifyContent={"center"} md={7} xs={12}>
          <Image
            // src={
            //   "https://images.pexels.com/photos/256198/pexels-photo-256198.jpeg"
            // }
            src={
              "https://cdn.dribbble.com/users/19479/screenshots/5116866/shipping_small-drib.gif"
            }
            sizes="100vw"
            // Make the image display full width
            width={100}
            height={100}
            className=" xs:w-96 md:w-full h-auto md:ml-20 xs:ml-0  rounded-xl grayscale invert"
            alt="motion gif"
          />
        </Grid>
        <Grid md={5} xs={12} sx={{ mt: 5 }}>
          <Stack
            sx={{
              alignItems: { xs: "center", md: "initial" },
              ml: { xs: 0, md: 2 },
            }}
          >
            <h1
              className="text-white uppercase text-center md:text-left lg:text-9xl xs:text-7xl md:text-8xl  font-primary "
              style={{
                lineHeight: ".8",
              }}
            >
              From Our Warehouse to Your Doorstep in No Time.
            </h1>
            <Link href={"/pages/about"}>
              <button className="discover-button font-mono flex justify-center mb-5 bg-lime-400 w-full xs:mt-5 md:mt-0 text-4xl  p-3 pr-8 pl-8  gap-5 whitespace-nowrap overflow-hidden">
                <span className="button-text-big ">Learn More</span>
              </button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
