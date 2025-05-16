"use client";

import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Link from "next/link";

const CaseStudtyCard1 = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Stack
        border={`1px solid  ${theme.palette.secondary.main}`}
        borderRadius={"10px"}
        height={"390px"}
        width={{
          xs: "95%",
          md: "330px",
        }}
        margin={"0 auto"}
      >
        <Stack padding={"45px 20px"} gap={2}>
          <Box
            m={"0 auto"}
            component="img"
            width={{
              xs: "200px",
              md: "300px",
            }}
            height={"136px"}
            alt="Interview to share experience"
            src={'/casestudy/Interview.png'}
          />

          <Stack gap={"4px"} width={"85%"} margin={"0px auto"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "center",
                marginBottom: "5px",
              }}
            >
              Share your Saniiro CRM success story!
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "center",
                opacity: "0.6",
              }}
            >
              Complete a quick survey, and we’ll get in touch with you soon.
            </Typography>
            <Link
              href="/CaseStudyForm1"
              onClick={() => window.scrollTo(0, 0)}
              style={{ textDecoration: "none" }}
            >
              <Button
                margin={"30px auto 0px"}
                direction={"row"}
                sx={{
                  width: {
                    xs: "100%",
                    md: "250px",
                  },
                  height: "46px",
                  padding: "20px, 20px, 14px, 20px",
                  borderRadius: "4px",
                  gap: "22px",
                  backgroundColor: "secondary.main",
                  justifyContent: "center",
                  border: `1px solid ${theme.palette.common.white}`,
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "secondary.light",
                    border: `1px solid ${theme.palette.secondary.main}`,
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Work Sans",
                    fontSize: {
                      xs: "12px",
                      md: "16px",
                    },
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0em",
                    textAlign: "center",
                    color: "common.white",
                  }}
                >
                  SUBMIT YOUR STORY
                </Typography>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default CaseStudtyCard1;
