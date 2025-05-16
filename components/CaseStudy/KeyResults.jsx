"use client";

import { Stack, Typography } from "@mui/material";
import React from "react";

const KeyResults = ({ keyResult }) => {
  return (
    <>
      <Stack marginBottom={"30px"}>
        <Stack>
          <Typography
            sx={{
              marginTop: "30px",
              fontFamily: "Work Sans",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
            Key results:
          </Typography>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          gap={{
            xs: 3,
            md: 0,
          }}
          marginTop={"30px"}
          marginRight={"30px"}
          marginLeft={"30px"}
          justifyContent={"space-between"}
        >
          <Stack paddingLeft={"10px"} borderLeft={"3px solid #F15B25"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Adoption
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "37px",
                fontWeight: 300,
                lineHeight: "39px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#F15B25",
              }}
            >
              {keyResult?.Adoption}
            </Typography>
          </Stack>
          <Stack paddingLeft={"10px"} borderLeft={"3px solid #34A853"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Direct benefits
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "37px",
                fontWeight: 300,
                lineHeight: "39px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#34A853",
              }}
            >
              {keyResult?.DirectBenefit}
            </Typography>
          </Stack>
          <Stack paddingLeft={"10px"} borderLeft={"3px solid #052973"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Time saved on day to day sales activities
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "37px",
                fontWeight: 300,
                lineHeight: "39px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#052973",
              }}
            >
              {keyResult?.TimeSaved}
            </Typography>
          </Stack>
          <Stack paddingLeft={"10px"} borderLeft={"3px solid #DF7E00"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Adoption
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "37px",
                fontWeight: 300,
                lineHeight: "39px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#DF7E00",
              }}
            >
              {keyResult?.Adoption2}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default KeyResults;
