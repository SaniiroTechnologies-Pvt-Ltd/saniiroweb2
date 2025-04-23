"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";
import BgSvg01 from "../../assets/BgSvg01.jpeg";
import NavLight from "@/components/Navbar/NavLight"; 
import "./Solution.css";

const Industries = () => {
  return (
    <React.Fragment>
      <Stack bgcolor={"#052973"} className="textured-background">
        <NavLight />
        <Stack maxWidth={"1536px"} margin={"0 auto"}>
          <Stack
            pt={{
              xs: "50px",
            }}
            gap={2}
            direction={{ xs: "column", }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              fontFamily={"monospace"}
              textTransform={"uppercase"}
              fontSize={{
                xs: "55px",
                md: "60px",
                lg: "75px",
              }}
              letterSpacing={1}
              fontWeight={"bold"}
              color={"transparent"}
              lineHeight={1}
              className="text-stroke"
            >
              SANIIRO
            </Typography>
            <Typography
              textTransform={"uppercase"}
              p={"0px 20px"}
              fontSize={{
                xs: "55px",
                md: "60px",
                lg: "75px",
              }}
              color={"white"}
              fontWeight={900}
              lineHeight={0.9}
              textAlign={"center"}
              letterSpacing={"0.05em"}
            >
             One Platform, Endless Possibilities
            </Typography>
          </Stack>
          <Typography
            color={"white"}
            fontSize={{
              xs: "14px",
              md: "16px",
              lg: "18px",
            }}
            p={{
              xs: "30px",
              lg: "40px 100px 85px 100px",
            }}
            textAlign={"center"}
          >
            Saniiro is a powerful all-in-one business management software designed 
            for billing, inventory, CRM, GST filing, manufacturing, POS, and 
            multi-branch operations. It streamlines workflows with smart automation, 
            real-time reporting, and mobile access—perfect for SMEs, service providers, 
            retailers, manufacturers, and nonprofits.
          </Typography>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Industries;
