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
        <Stack sx={{ mb: 5 }}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignContent={"center"}
            sx={{ gap: "2rem" }}
          >
            {/* <Image
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
              alt="logo"
            /> */}
            <img
              src={
                "https://naseba.com/wp-content/uploads/2018/07/samsung-white-logo.png"
              }
              style={{
                width: "15rem",
                height: "auto",

                // filter: "grayscale() ",
              }}
              alt="logo"
            />
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png"
              }
              style={{
                width: "4rem",
                height: "auto",

                // filter: "grayscale() ",
              }}
              alt="logo"
            />
            <img
              src={
                "https://static.vecteezy.com/system/resources/previews/020/927/133/original/oppo-brand-logo-phone-symbol-white-design-chinese-mobile-illustration-with-black-background-free-vector.jpg"
              }
              style={{
                width: "7rem",
                height: "auto",

                // filter: "grayscale() ",
              }}
              alt="logo"
            />
            <img
              src={
                "https://www.preemptive.com/wp-content/uploads/2023/10/Microsoft.png"
              }
              style={{
                width: "7rem",
                height: "auto",

                // filter: "grayscale() ",
              }}
              alt="logo"
            />
            <img
              src={
                "https://static.vecteezy.com/system/resources/thumbnails/020/190/471/small/huawei-logo-huawei-icon-free-free-vector.jpg"
              }
              style={{
                width: "7rem",
                height: "auto",

                // filter: "grayscale() ",
              }}
              alt="logo"
            />
            <img
              src={
                "https://africabusinesscommunities.com/Images/Key%20Logos/Infinix.png"
              }
              style={{
                width: "7rem",
                height: "auto",

                // filter: "grayscale() ",
              }}
              alt="logo"
            />
            <img
              src={
                "https://mir-s3-cdn-cf.behance.net/projects/404/475d72139934429.Y3JvcCw4OTIsNjk4LDMwMCw0OA.png"
              }
              style={{
                width: "7rem",
                height: "auto",

                // filter: "grayscale() ",
              }}
              alt="logo"
            />
            <img
              src={
                "https://www.perfume24x7.com/cdn/shop/collections/royal_mirage_jpg.png?v=1606635682"
              }
              style={{
                width: "7rem",
                height: "auto",

                filter: "invert() ",
              }}
              alt="logo"
            />
            <img
              src={
                "https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/a/AmazonStores/ATVPDKIKX0DER/07b20c02daf3c42db5844873afcece46.w900.h900.png"
              }
              style={{
                width: "7rem",
                height: "auto",

                // filter: "invert() ",
              }}
              alt="logo"
            />
            <img
              src={"https://cdn-icons-png.flaticon.com/512/5968/5968613.png"}
              style={{
                width: "7rem",
                height: "auto",

                // filter: "grayscale() ",
              }}
              alt="logo"
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
