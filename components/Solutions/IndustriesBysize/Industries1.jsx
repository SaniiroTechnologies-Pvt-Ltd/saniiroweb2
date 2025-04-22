"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import Boxes from "../../assets/Boxes.svg";
import Link from "next/link";

const Industries1 = () => {
  return (
    <>
      {/* <Stack gap={4} p={"20px 0"}>
        <Stack>
          <Typography
            textTransform={"uppercase"}
            color={"#4DB267"}
            fontSize={"50px"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            SANIIRO CRM
          </Typography>
          <Typography
            color={"#052973"}
            fontWeight={"bold"}
            lineHeight={1}
            fontSize={"50px"}
            textAlign={"center"}
          >
            The operating core of your business
          </Typography>
        </Stack>
        <Typography fontSize={"18px"} p={"0 200px"} textAlign={"center"}>
          Your enterprise CRM needs to evolve as quickly as your enterprise
          does. Zoho CRM offers the customizability, feature depth, and product
          stability required to effectively manage a large-scale organization
          across all departments, markets, and geographic locations.
        </Typography>
        <Stack alignItems={"center"}>
          <Button
            sx={{
              width: "200px",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Work Sans",
              p: 1.5,
            }}
          >
            CONTACT US
          </Button>
        </Stack>
      </Stack> */}

      <Stack
        margin={"0 auto"}
        width={"95%"}
        gap={{
          xs: 1,
          sm: 2,
          md: 2,
        }}
        p={{
          xs: "10px 0",
          sm: "12px 0",
          md: "20px 0",
        }}
      >
        <Stack>
          <Typography
            textTransform={"uppercase"}
            color={"#4DB267"}
            fontSize={{
              xs: "30px",
              sm: "35px",
              md: "50px",
            }}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Saniiro Platform
          </Typography>
          <Typography
            color={"#052973"}
            fontWeight={"bold"}
            lineHeight={1}
            fontSize={{
              xs: "30px",
              sm: "35px",
              md: "50px",
            }}
            textAlign={"center"}
          >
            The Unified Platform for Every Organization
          </Typography>
        </Stack>
        <Typography
          fontSize={{
            xs: "14px",
            sm: "16px",
            md: "18px",
          }}
          p={{
            xs: "0 10px",
            sm: "0 12px",
            md: "0 40px",
          }}
          textAlign={"center"}
        >
          Saniiro is a powerful, cloud-based platform designed to streamline operations for small businesses, medium-sized enterprises, and nonprofits. It integrates key features like billing, accounting, inventory, CRM, and more, helping businesses save time and scale efficiently. With automated tools, GST compliance, real-time reporting, and mobile accessibility, Saniiro simplifies daily tasks, ensures smooth team collaboration, and provides real-time insights. Whether you’re managing a growing business or a non-profit organization, Saniiro offers a unified solution to drive productivity, transparency, and growth.
        </Typography>
        <Stack alignItems={"center"}>
        <Link href="/Contact-us" onClick={() => window.scrollTo(0, 0)}>
          <Button
            sx={{
              width: {
                xs: "150px",
                sm: "150px",
                md: "200px",
              },
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
              },
              fontWeight: "bold",
              fontFamily: "Work Sans",
              p: 1.5,
            }}
          >
            CONTACT US
          </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default Industries1;
