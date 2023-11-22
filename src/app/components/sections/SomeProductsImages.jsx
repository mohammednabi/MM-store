import React from "react";

import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default async function SomeProductsImages() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await response.json();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 5,
          mb: 5,
        }}
      >
        <h1 className="font-primary text-white md:text-8xl xs:text-6xl uppercase text-center">
          big variety of products
        </h1>

        <ImageList
          variant="woven"
          cols={3}
          gap={20}
          sx={{ p: { md: 10, xs: 5 } }}
        >
          {products.map(
            (item, index) =>
              index > 10 &&
              index < 20 && (
                <ImageListItem key={item.id}>
                  <img
                    srcSet={`${item.images[0]}`}
                    src={`${item.images[0]}`}
                    alt={`${item.id}`}
                    loading="lazy"
                    className="w-1/3"
                  />
                </ImageListItem>
              )
          )}
        </ImageList>
      </Box>
    </>
  );
}
