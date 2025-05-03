"use client";

import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import NavLight from "@/components/Navbar/NavLight";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  const theme = useTheme(); // Access the theme

  return (
    <Stack
      sx={{
        height: { xs: "auto", lg: "930px", },
        position: "relative",
        bgcolor: "primary.main",
      }}
      className="textured-background"
    >
      <NavLight />
      <Stack
        sx={{
          zIndex: 11,
          flexDirection: { xs: "column", lg: "row", },
          margin: { xs: "0 auto", sm: "20px auto", },
        }}
      >
        <Stack
          sx={{
            gap: '10px',
            width: { xs: "100%", lg: "40%", xl: "54%", xxl: "50%", },
            margin: { lg: "40px auto", xl: "84px 37px", },
            padding: { xs: "10px 0", },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textTransform: "uppercase",
              wordSpacing: { xl: "-27px" },
              fontSize: { xs: "39px", sm: "39px", md: "68px", lg: "63px", xl: "97px", },
              textAlign: { xs: "center", lg: "left", },
              fontWeight: "bold",
              lineHeight: 0.9,
              letterSpacing: "0.1em",
              WebkitTextStrokeColor: theme.palette.secondary.main,
              WebkitTextStrokeWidth: 2,
              color: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            }}

          >
            Looking For
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              color: 'common.white',
              fontSize: { xs: "38px", sm: "37px", md: "68px", lg: "63px", xl: "87px", },
              textAlign: { xs: "center", lg: "left", },
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "0.05em",
            }}
          >
            something in particular?
          </Typography>

          <Typography
            sx={{
              color: 'common.white',
              width: { xs: "90%", sm: "80%", lg: "90%", },
              margin: { xs: "0px auto 0px", lg: "5px 5px", },
              fontSize: { xs: "14px", lg: "18px", },
              textAlign: { xs: "center", lg: "left", },
            }}
          >
            We're here to help.
          </Typography>
        </Stack>
        <Stack
          gap={2}
          sx={{
            width: { xs: "100%", lg: "50%", xl: "50%", },
            padding: { xs: "20px 0px", lg: "20px 0px", xl: "40px 0px", },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",  // Extra small devices (phones)
                sm: "1.75rem", // Small devices (tablets)
                md: "2rem",    // Medium devices (small laptops)
                lg: "2.25rem",  // Large devices (desktops)
                xl: "2.5rem",   // Extra large devices (large desktops)
                xxl: "2.75rem"  // Extra extra large devices (very large screens)
              },
              textAlign: { xs: "center", },
              color: theme.palette.common.white,
              fontWeight: theme.typography.fontWeightBold,
              textAlign: "center",
            }}
          >
            Get started with your free trial
          </Typography>
          <ContactUsForm />

        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactUs;
