import { Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <Stack sx={{ minHeight: "calc(100vh - 90px - 214.550px)" }}>
      <div className="w-full h-full flex justify-center items-center  mt-20 p-5">
        <h1 className="text-white text-3xl text-center font-mono font-semibold capitalize ">
          sorry this website is only for testing not a real website
        </h1>
      </div>
      <Link href={"/cart"}>
        <div className="flex justify-center items-center">
          <button className=" text-black rounded-full font-mono capitalize text-2xl font-semibold   bg-white mt-20  p-3  w-8/12 transition-colors hover:bg-customRed">
            go back
          </button>
        </div>
      </Link>
    </Stack>
  );
}
