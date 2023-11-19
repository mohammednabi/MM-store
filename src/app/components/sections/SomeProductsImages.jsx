import React from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import localFont from "next/font/local";

const myFont = localFont({
  src: "/TTtrailersBold.ttf",
});

export default async function SomeProductsImages() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await response.json();

  return (
    <>
      <Box
        sx={{
          width: 1300,
          height: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          mt: 5,
          mb: 5,
          color: "white",
          fontSize: "6rem",
          textTransform: "uppercase",
        }}
      >
        <h1 className={myFont.className} style={{ textAlign: "center" }}>
          big variety of products
        </h1>

        <ImageList variant="woven" cols={3} gap={20}>
          {products.map(
            (item, index) =>
              index > 10 &&
              index < 20 && (
                <ImageListItem key={item.id}>
                  <img
                    srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.images[0]}?w=248&fit=crop&auto=format`}
                    alt={item.id}
                    loading="lazy"
                    style={
                      {
                        //   mixBlendMode: "multiply",
                        //   filter: " invert()",
                      }
                    }
                  />
                </ImageListItem>
              )
          )}
        </ImageList>
      </Box>
    </>
  );
}
