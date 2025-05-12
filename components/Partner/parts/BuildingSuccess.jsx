"use client"

import React from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Button from "@/components/utils/Button";
import LinkButton from "@/components/utils/LinkButton";

const BuildingSuccess = () => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        background:
          "linear-gradient(180deg, rgba(133, 159, 255, 0) 38.85%, #859FFF 84.69%)",
        width: "100%",
        height: "content",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "Start",
        alignItems: "center",
        pb: { xs: 1, md: 0 },
      }}
    >
      <Box
        maxWidth={"1536px"}
        margin={"0 auto"}
        sx={{
          width: { xs: "95%", lg: "98%" },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              marginTop: { xs: "30px", sm: "35px", md: "50px", lg: "95px", },
              fontSize: { xs: "24px", lg: "30px", },
              fontWeight: theme.typography.fontWeightBold,
              lineHeight: theme.typography.pxToRem(30),
              letterSpacing: theme.typography.pxToRem(0),
              color: theme.palette.tertiary.main,
              textAlign: "center",
            }}
          >
            BUILDING SUCCESS TOGETHER
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              marginTop: theme.typography.pxToRem(15),
              fontSize: { xs: "24px", sm: "30px", md: "35px", lg: "50px", },
              fontWeight: theme.typography.fontWeightBold,
              lineHeight: { sx: theme.typography.pxToRem(2), md: theme.typography.pxToRem(53) },
              letterSpacing: theme.typography.pxToRem(0),
              color: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            Saniiro Consulting Partner Program
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            margin={"0 auto"}
            width="95%"
            sx={{
              marginTop: theme.typography.pxToRem(26),
              fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px", },
              fontWeight: theme.typography.fontWeightRegular,
              lineHeight: theme.typography.pxToRem(27),
              letterSpacing: theme.typography.pxToRem(0),
              textAlign: "center",
            }}
          >
            Our Partner Program gives you access to one of the broadest SaaS
            product portfolios in the industry, training to build powerful Zoho
            product capabilities, and a dedicated partner support channel to
            help you implement successful solutions for your customers. Join us
            in establishing a partnership built on integrity, respect, and a
            long-term commitment to excellence.
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row", }}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            marginTop: theme.typography.pxToRem(48),
            gap: theme.typography.pxToRem(10),
          }}
        >
          <Button
            sx={{
              width: { xs: "130px", md: "214px", },
              height: { xs: "40px", md: "58px", },
              padding: { xs: "10px 10px", md: "25px 20px", lg: "25px 20px", },
              fontSize: { xs: "12px", md: "16px", lg: "18px", },
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.common.white,
                color: theme.palette.common.black,
                border: `1px solid ${theme.palette.common.black}`,
              },
            }}
          >
            Become a Partner
          </Button>
          <LinkButton
            sx={{
              width: { xs: "120px", md: "214px", },
              height: { xs: "30px", md: "58px", },
              padding: { xs: "5px 5px", md: "0px 0px", lg: "0px 0px", },
              fontSize: { xs: "12px", md: "16px", lg: "18px", },
              border: `1px solid ${theme.palette.common.black}`,
              color: theme.palette.common.black,
              backgroundColor: theme.palette.common.white,
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
                border: `1px solid ${theme.palette.secondary.main}`,
              },
            }}
            href="/Resources/CaseStudy"> Case Studies</LinkButton>

        </Stack>
      </Box>
    </Stack>
  );
};

export default BuildingSuccess;
