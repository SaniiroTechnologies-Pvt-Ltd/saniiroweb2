"use client";

import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import NavigationAppbar from "@/components/Navbar/NavigationAppbar";

const Industries = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box bgcolor={"primary.main"} zIndex={111} className="textured-background">
        <NavigationAppbar isAppbarLight={true} />
        <Stack
          pt={theme.typography.pxToRem(50)}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="h2"
            component={'h1'}
            fontFamily={"monospace"}
            textTransform={"uppercase"}
            fontSize={{
              xs: theme.typography.pxToRem(30),
              sm: theme.typography.pxToRem(40),
              smm: theme.typography.pxToRem(50),
              md: theme.typography.pxToRem(60),
              lg: theme.typography.pxToRem(75),
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
            variant="h2"
            component={'h1'}
            textTransform={"uppercase"}
            p={"0px 20px"}
            fontSize={{
              xs: theme.typography.pxToRem(30),
              sm: theme.typography.pxToRem(40),
              smm: theme.typography.pxToRem(50),
              md: theme.typography.pxToRem(60),
              lg: theme.typography.pxToRem(75),
            }}
            color={"primary.contrastText"}
            fontWeight={900}
            lineHeight={1.1}
            textAlign={"center"}
            letterSpacing={"0.05em"}
          >
            One Platform,<br /> Endless Possibilities
          </Typography>
        </Stack>
        <Typography
          variant="subtitle1"
          component={'p'}
          color={"primary.contrastText"}
          fontSize={{
            xs: theme.typography.pxToRem(14),
            smm: theme.typography.pxToRem(15),
            md: theme.typography.pxToRem(16),
            lg: theme.typography.pxToRem(18),
          }}
          p={{
            xs: theme.typography.pxToRem(30),
            lg: `${theme.typography.pxToRem(40)} ${theme.typography.pxToRem(100)} ${theme.typography.pxToRem(85)} ${theme.typography.pxToRem(100)}`,
          }}
          textAlign={"center"}
        >
          Saniiro is a powerful all-in-one business management software designed
          for billing, inventory, CRM, GST filing, manufacturing, POS, and
          multi-branch operations. It streamlines workflows with smart automation,
          real-time reporting, and mobile access—perfect for SMEs, service providers,
          retailers, manufacturers, and nonprofits.
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Industries;
