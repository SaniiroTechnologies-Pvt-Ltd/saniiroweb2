"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";
import Button from "@/components/utils/Button"; 
// import TickMark from "../../assets/TickMark.svg";
import SectionImage from "../../assets/SectionImage1.png";
import Link from "next/link";
import Image from "next/image";

export default function Industry1() {
  return (
    <React.Fragment>
      <Stack
        height={"auto"}
        position={"relative"}
        direction={{
          xs: "column",
          lg: "row",
        }}
        pt={8}
        m={"0 auto"}
        margin={"0 auto"}
        gap={2}
      >
        <Stack
          sx={{
            alignItems: {
              xs: "center",
              lg: "left",
            },
          }}
          margin={"0px auto"}
          width={{
            xs: "90%",
            lg: "50%",
          }}
          p={{
            xs: "0 20px",
            lg: "20px 0px 40px 100px",
          }}
          gap={4}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Stack direction={"row"}>
            <Typography
              textTransform={"uppercase"}
              fontSize={"43px"}
              color={"#052973"}
              fontWeight={900}
              lineHeight={1}
              letterSpacing={"0.05em"}
              textAlign={{
                xs: "center",
                lg: "left",
              }}
            >
              Saniiro: Simplify, Automate, Scale Your{" "}
              <span
                className="text-stroke"
                style={{
                  textTransform: "uppercase",
                  fontSize: "70px",
                  fontWeight: "bold",
                  letterSpacing: 1,
                  color: "transparent",
                  lineHeight: 1,
                }}
              >
                Business
              </span>
            </Typography>
          </Stack>
          <Typography fontSize={"18px"} color={"black"}>
          Saniiro is an all-in-one business management platform that streamlines workflows, 
          enhances collaboration, and boosts productivity across departments. With automation, 
          real-time insights, and mobile accessibility, it helps businesses scale efficiently 
          while optimizing operations for seamless performance.
          </Typography>
          <Link href="/Sign-up" onClick={() => window.scrollTo(0, 0)}>
            <Button
              sx={{
                width: "200px",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Work Sans",
                p: 1.5,
              }}
            >
              SIGN UP FOR FREE
            </Button>
          </Link>
        </Stack>
        <Stack
          margin={"0 auto"}
          width={{
            xs: "100%",
            lg: "50%",
          }}
          alignSelf={"center"}
          position={"relative"}
          height={"80vh"}
        >
          <Image
            src={SectionImage}
            alt=""
            fill
            objectFit="contain"
            sizes="100vw"
          />
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
