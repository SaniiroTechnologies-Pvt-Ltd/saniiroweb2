"use client";

import React from "react";
import { Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import ReactPlayer from "react-player";
import "./Features.css";

const VideoFeatureSection = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  // Responsive video height
  const getVideoHeight = () => {
    if (isXs) return "250px";
    if (isSm) return "300px";
    if (isMd) return "450px";
    if (isLg) return "500px";
    return "419px";
  };

  return (
    <Stack
      direction={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      p={{ xs: 2, md: 6 }}
      gap={{ xs: 4, md: 6 }}
      maxWidth={'xxl'}
      marginX="auto"
    >
      {/* Video Player */}
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: { xs: "100%", sm: "100%", md: "85%", lg: "54%" },
          height: getVideoHeight(),
          border: "1px solid transparent",
        }}
      >
        <Stack
          width="100%"
          alignItems="center"
          sx={{ border: "1px solid #eee", borderRadius: 2 }}
        >
          <ReactPlayer
            url="https://youtu.be/7nhhfmx_3OU"
            controls
            width="100%"
            height={getVideoHeight()}
          />
        </Stack>
      </Stack>

      {/* Text Section */}
      <Stack
        width={{ xs: "100%", md: "90%", lg: "46%" }}
        justifyContent="center"
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={2}
        px={{ xs: 2, md: 0, lg: 3 }}
      >
        <Typography
        variant="h4"
          width="100%"
          color="primary.main"
          textAlign={{ xs: "center", md: "left" }}
          fontSize={{ xs: "24px", md: "30px", xl: "36px" }}
          fontWeight="bold"
        >
          Best in class Accounting, Billing and Inventory software
        </Typography>

        <Typography
         variant="subtitle2"
          letterSpacing={1.1}
          textAlign={{ xs: "justify", md: "left" }}
          lineHeight={1.5}
          fontSize={{ xs: "14px", md: "16px", xl: "17px" }}
        >
          At Saniiro Technologies Private Limited, we deliver top-tier
          accounting and billing software tailored to the unique needs of each
          client, including a comprehensive GST accounting solution and
          affordable ecommerce development tools.
          <br />
          Our global financial management systems, including user-friendly
          quotation management software and versatile CMS software, enable
          seamless management of quotes, invoices, and web content.
          <br />
          Additionally, our inventory management software provides detailed
          insights into orders, inventory levels, sales, and deliveries,
          complementing our task management software that enhances planning,
          tracking, testing, and reporting processes to expedite goal
          achievement.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default VideoFeatureSection;
