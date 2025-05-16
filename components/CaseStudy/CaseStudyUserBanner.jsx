"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "@/components/Solutions/IndustriesByusecases/Solution.css";
import NavigationAppbar from "@/components/Navbar/NavigationAppbar";

const CaseStudyUserBanner = ({ caseStudy }) => {
  return (
    <Stack bgcolor={"primary.main"} className="textured-background">
      <NavigationAppbar isAppbarLight={true} />
      <Stack
        gap={4}
        pb={{
          xs: 7,
          md: 14,
        }}
      >
        <Stack
          margin={{
            xs: "35px auto 0px",
            md: "90px auto 0px",
          }}
          width={{
            xs: "95%",
            lg: "1024px",
          }}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            textTransform={"uppercase"}
            fontSize={{
              xs: "30px",
              md: "40px",
            }}
            letterSpacing={1}
            fontWeight={"bold"}
            color={"common.white"}
            lineHeight={1}
            textAlign={"center"}
          >
            {caseStudy.Title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: {
                xs: "16px",
                md: "22px",
              },
              fontWeight: 500,
              lineHeight: "32px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "common.white",
            }}
            dangerouslySetInnerHTML={{ __html: caseStudy.Description }}
          />
          <Box
            width={"83px"}
            height={"83px"}
            component="img"
            alt="ProfileImg"
            src={caseStudy.ProfileImage}
          />
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "23px",
              fontWeight: 500,
              lineHeight: "24px",
              letterSpacing: "-0.02em",
              textAlign: "center",
              color: "common.white",
            }}
          >
            {caseStudy.Author},
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "13px",
              letterSpacing: "-0.02em",
              textAlign: "center",
              color: "common.white",
            }}
          >
            {caseStudy.Designation}, [CompanyName],
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CaseStudyUserBanner;
