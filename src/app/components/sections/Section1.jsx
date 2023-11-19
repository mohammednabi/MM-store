import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
// import customFont from "/my-app/public/fonts/tt_trailers/TTtrailersBold.ttf";

const myFont = localFont({
  src: "/TTtrailersBold.ttf",
});

export default function Section1() {
  return (
    <>
      <Grid container sx={{ mt: 10 }}>
        <Grid md={5} xs={12} sx={{ pl: 2, mt: 5 }}>
          <Stack>
            <Typography
              className={myFont.className}
              sx={{
                color: "white",
                textTransform: "uppercase",
                lineHeight: ".8",
                fontSize: "9.4rem",
              }}
            >
              Explore and Discover Your Next Favourite product.
            </Typography>
            <button className="discover-button font-mono flex justify-center bg-lime-400 w-8/12 text-4xl  p-3 pr-8 pl-8  gap-5 whitespace-nowrap overflow-hidden">
              <span className="button-text-big ">Discover</span>
            </button>
          </Stack>
        </Grid>
        <Grid md={7} xs={12} sx={{ overflow: "hidden" }}>
          <Image
            // src={
            //   "https://images.pexels.com/photos/256198/pexels-photo-256198.jpeg"
            // }
            // src={
            //   "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // }
            src={
              "https://cdn.dribbble.com/users/1055435/screenshots/3806405/media/2814f72951891659809ee6d7f15d2fd4.gif"
            }
            sizes="100vw"
            // Make the image display full width
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
              // filter: " grayScale()",
              marginLeft: "5rem",
            }}
            className=" border-0 border-solid border-lime-400 rounded-xl "
          />
        </Grid>
      </Grid>
    </>
  );
}
