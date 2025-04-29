"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";


const commonAlignItems = {
  alignItems: "center",
}

const commonStyle = {
  ...commonAlignItems,
  width: { xs: "80%", md: "33%", }
}

const commonPadding = {
  padding: { xs: "20px 0", md: "0", },
}

const commonBorder = {
  borderRightWidth: { xs: "none", md: '3px' },
  borderRightStyle: { xs: "none", md: 'solid' },
  borderRightColor: { xs: "none", md: 'tertiary.main' },
  borderBottomWidth: { xs: '3px', md: "none" },
  borderBottomStyle: { xs: "solid", md: 'none' },
  borderBottomColor: { xs: "tertiary.main", md: 'none' },
  ...commonPadding,
}


const WelcomeToSaniiro = () => {
  return (
    <Stack alignItems={"Center"} mt={5}>
      <Stack
        bgcolor={"tertiary.main"}
        width={"90vw"}
        alignItems={"center"}
        p={{ xs: "16px 0", sm: "20px 0", md: "24px 0", lg: "32px 0", }}
        gap={2}
      >
        <Typography
          variant="h4"
          fontWeight={"fontWeightBold"}
          color={"common.white"}
          textAlign={"center"}
        >
          What is Saniiro?
        </Typography>
        <Typography
          variant="h6"
          color={"common.white"}
          textAlign={"center"}
          width={{ xs: "90%", lg: "80%", }}
        >
          Saniiro Business Cloud People, delivers amazing workforce experiences,
          so that customers can become great employer brands, increasing
          engagement, performance, and retention, while making it easier to
          acquire top talent.
        </Typography>
        <Stack
          bgcolor={"common.white"}
          width={{ xs: "80%", md: "70%", }}
          p={"30px 0"}
          mt={2}
          borderRadius={1}
          alignItems={{ xs: "center", md: "flex-start", }}
          direction={{ xs: "column", md: "row", }}
        >
          <Stack sx={{ ...commonStyle, ...commonBorder }} >
            <Typography variant="h4" color={"tertiary.main"}>2800+</Typography>
            <Typography variant="bosy2">Employees</Typography>
          </Stack>
          <Stack sx={{ ...commonStyle, ...commonBorder }} >
            <Typography variant="h4" color={"tertiary.main"}>5000+</Typography>
            <Typography variant="bosy2">Partners</Typography>
          </Stack>

          <Stack sx={{ ...commonStyle, ...commonPadding }} >
            <Typography variant="h4" color={"tertiary.main"}>12 Million</Typography>
            <Typography variant="bosy2">Users</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WelcomeToSaniiro;
