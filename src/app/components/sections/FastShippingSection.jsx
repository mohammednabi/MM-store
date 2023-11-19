import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
// import customFont from "/my-app/public/fonts/tt_trailers/TTtrailersBold.ttf";

const myFont = localFont({
  src: "/TTtrailersBold.ttf",
});

export default function FastShippingSection() {
  return (
    <>
      <Grid container sx={{ p: 2, mt: 10 }}>
        <Grid md={7} xs={12}>
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
            style={{
              width: "100%",
              height: "auto",
              //   filter: "invert()",
              // mixBlendMode: "multiply",
              filter: " grayscale() invert()   ",
            }}
            className=" border-0 border-solid border-lime-400 rounded-xl "
          />
        </Grid>
        <Grid md={5} xs={12} sx={{ mt: 5 }}>
          <Stack sx={{ ml: 2 }}>
            <Typography
              className={myFont.className}
              sx={{
                color: "white",
                textTransform: "uppercase",
                lineHeight: ".8",
                fontSize: "9.4rem",
              }}
            >
              From Our Warehouse to Your Doorstep in No Time.
            </Typography>
            <button className="discover-button font-mono flex justify-center bg-lime-400 w-8/12 text-4xl  p-3 pr-8 pl-8  gap-5 whitespace-nowrap overflow-hidden">
              <span className="button-text-big ">Learn More</span>
            </button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
