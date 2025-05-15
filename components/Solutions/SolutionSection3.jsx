"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const SolutionSection3 = () => {
  const lists2 = [
    {
      title: "Small Business CRM",
    },
    {
      title: "Medium Business CRM",
    },
    {
      title: "Large Enterprise CRM",
    },
  ];
  return (
    <Stack alignItems={"center"}>
      <Stack width={"75%"} gap={3} pt={7}>
        <Stack>
          <Typography
            textAlign={"center"}
            fontSize={{
              xs: "25px",
              sm: "30px",
              lg: "35px",
            }}
          >
            A cornerstone for
          </Typography>
          <Typography
            textAlign={"center"}
            color={'tertiary.main'}
            fontWeight={"bold"}
            fontSize={{
              xs: "25px",
              sm: "30px",
              md: "35px",
              lg: "40px",
            }}
            lineHeight={1}
          >
            Businesses of All Sizes
          </Typography>
        </Stack>
        <Typography
          textAlign={"center"}
          fontSize={{
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "20px",
          }}
        >
          Whether you're an SMB looking to optimize your sales processes by
          moving away from legacy tools and spreadsheets or a global enterprise
          looking to scale your sales operations across the globe, Saniiro CRM is
          the right fit for you. Saniiro CRM offers the right combination of
          functional feature sets, intuitive user experience, scalability, and
          ease of use to help every business connect with customers at scale to
          build everlasting relationships.
        </Typography>
        <Stack alignItems={"center"}>
          <Stack
            direction={"row"}
            gap={2}
            flexWrap={"wrap"}
            alignSelf={"center"}
            justifyContent={"center"}
          >
            {lists2.map((d, index) => (
              <Stack
                key={index}
                p={{ xs: "2px 8px", md: "5px 10px", lg: "7px 16px" }}
                bgcolor={'tertiary.main'}
                border={"1px solid white"}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"40px"}
                gap={1}
              >
                <Typography
                  color={"common.white"}
                  fontWeight={"bold"}
                  fontSize={{
                    xs: "8px",
                    sm: "10px",
                    md: "18px",
                    lg: "22px",
                  }}
                >
                  {d.title}
                </Typography>
                <Stack
                  alignItems={"center"}
                  justifyContent={"center"}
                  width={{ xs: "30px", lg: "50px" }}
                  height={{ xs: "30px", lg: "50px" }}
                  bgcolor={"common.white"}
                  borderRadius={"50%"}
                >
                  <Image
                    src={'/solutions/ArrowOutwardIcon.svg'}
                    width={0}
                    height={0}
                    alt=""
                    style={{ width: "50%", height: "50%" }}
                  />
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack
          sx={{ opacity: "0.7" }}
          position={"relative"}
          width={"100%"}
          height={"50vh"}
        >
          <Image src={'/solutions/Colors.png'} alt="corner stone for businesses" fill objectFit="contain" sizes="100vw" />
        </Stack>
      </Stack>
    </Stack>
  );
};
export default SolutionSection3;
