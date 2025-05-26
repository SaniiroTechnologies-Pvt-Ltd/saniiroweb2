"use client";

import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import Image from "next/image";

const JoinBusinesses = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        margin: {
          xs: "12px auto",
          lg: "96px auto",
        },
        width: "100%",
        maxWidth: "1060px",
        height: "375px",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          textTransform: "uppercase",
          margin: "42px auto",
          width: "100%",
          maxWidth: "170px",
          textAlign: "center",
        }}
      >
        <Typography>
          Join 250,000+ other businesses
        </Typography>
        <Button
          sx={{
            border: "1px solid #F97316",
            background: "#F97316",
            color: "common.white",
            fontSize: {
              xs: "10px",
              lg: "12px",
            },
            fontWeight: "600",
            lineHeight: "13px",
            textAlign: "center",
            padding: {
              xs: "10px 20px",
              lg: "15px 30px",
            },
            borderRadius: "5px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "common.white",
              color: "#F97316",
            },
          }}
        >
          START FREE TRIAL
        </Button>
      </Stack>
      <Stack
        width={{
          xs: "95%",
          lg: "100%",
        }}
        height={{
          xs: "200px",
          md: "95%",
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Center the image vertically
          position: "relative",
        }}
      >
        <Image
          fill
          style={{
            objectFit: "contain", // Maintain aspect ratio
            maxWidth: "1360px", // Limit maximum width
            marginTop: "-70px", // Adjust margin to position image at midpoint of button
          }}
          alt="company-logo"
          src={'/pricing/brandsImage.png'}
        />
      </Stack>
    </Stack>
  );
};

export default JoinBusinesses;
