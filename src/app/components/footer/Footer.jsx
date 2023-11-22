import React from "react";
import { Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const facebookLink =
    "https://www.facebook.com/mohammed.nabil.1042/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true&locale=ar_AR";

  const githubLink = "https://github.com/mohammednabi";
  const linkedInLink = "https://www.linkedin.com/in/mohammed-nabil-790b951b4/";
  return (
    <>
      <Stack
        maxWidth={"xl"}
        sx={{
          height: "30vh",
          width: "100%",
          // background: "white",

          zIndex: "1",
          color: "white",
        }}
        className="bg-neutral-950"
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
      >
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
          sx={{ mb: 10 }}
        >
          <Link href={facebookLink} target="blank" className="footer-icon">
            <FacebookIcon sx={{ fontSize: { md: "3rem", xs: "2rem" } }} />
          </Link>
          <Link href={githubLink} target="blank" className="footer-icon">
            <GitHubIcon sx={{ fontSize: { md: "3.5rem", xs: "2.5rem" } }} />
          </Link>
          <Link href={linkedInLink} target="blank" className="footer-icon">
            <LinkedInIcon sx={{ fontSize: { md: "3rem", xs: "2rem" } }} />
          </Link>
        </Stack>
        <div className="flex gap-5 items-center ">
          <h1 className="font-mono md:text-3xl xs:text-xl capitalize">
            created by{" "}
          </h1>
          <Image
            width={150}
            height={150}
            src={"/imgs/nebo offical white logo edited.png"}
            alt="nebo logo"
            className="md:w-40 xs:w-20 h-auto"
          />
        </div>
      </Stack>
    </>
  );
}
