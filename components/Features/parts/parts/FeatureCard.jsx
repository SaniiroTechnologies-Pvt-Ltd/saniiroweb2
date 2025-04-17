import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FeatureCard = (props) => {
  return (
    <Stack>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: {
            xs: "133px",
            smm: "208.76px",
          },
          height: {
            xs: "132px",
            smm: "208.76px",
          },
          padding: {
            xs: "9.54px 4.77px 9.54px 4.77px",
            smm: "19.09px 9.54px 19.09px 9.54px",
          },
          borderRadius: {
            xs: "4.77px",
            smm: "9.54px",
          },
          border: "1.19px solid #ccc",
          gap: {
            xs: "9.54px",
            smm: "17.89px",
          },
          background: "#FFFFFFE5",
          transition: "transform 0.3s ease, box-shadow 0.3s ease", // Animation properties
          "&:hover": {
            transform: "scale(1.05)", // Slight zoom-in effect
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", // Shadow effect
          },
        }}
      >
        <Stack
          width={{
            xs: "57px",
            smm: "114px",
          }}
          height={{
            xs: "54.5px",
            smm: "109px",
          }}
          sx={{ position: "relative" }}
        >
          <Image
            src={props.billingCardData.logo}
            alt="logo"
            fill
            objectFit="contain"
            sizes="100vw"
          />
        </Stack>

        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: {
              xs: "11px",
              smm: "16px",
            },
            fontWeight: 600,
            lineHeight: {
              xs: "10px",
              smm: "18px",
            },
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          {props.billingCardData.title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FeatureCard;
