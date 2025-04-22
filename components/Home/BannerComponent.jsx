"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Button from "@/components/utils/Button";
import "./nm.css";
import Link from "next/link";
import SimplifyForm from "./SimplifyForm";

export default function BannerComponent() {

  return (
    <React.Fragment>
      <Box fontFamily={"Work Sans"} maxWidth={"1536px"} margin={"0 auto"} gap={4}>
        <Stack>
          <Stack
            alignItems={"center"}
            justifyContent={"space-between"}
            p={"0 10px"}
            // direction={"row"}
            // zIndex={-1}
            sx={{
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              // width: "100%",
              margin: {
                xs: "0px",
                sm: "20px",
                lg: "0px",
              },
            }}
          >
            <Stack
              alignItems={{ lg: "flex-start", sm: "center" }}
              sx={{
                width: {
                  xs: "100%",
                  lg: "56%",
                  xl: "42%",
                  xxl: "50%",
                },
                margin: {
                  lg: "30px",
                  xl: "30px",
                },
                padding: {
                  xs: "10px 0",
                },
              }}
            >
              <Typography
                textTransform={"uppercase"}
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "35px",
                    lg: "45px",
                    xl: "60px",
                  },
                  textAlign: {
                    xs: "center",
                    lg: "left",
                  },
                }}
                color={"#052973"}
                // color={"white"}
                fontWeight={900}
                lineHeight={1}
                letterSpacing={"0.05em"}
              >
                Transforming Financial
              </Typography>
              <Typography
                className="text-stroke"
                fontFamily={"monospace"}
                sx={{
                  textTransform: "uppercase",
                  fontSize: {
                    xs: "20px",
                    sm: "35px",
                    lg: "45px",
                    xl: "60px",
                  },
                  textAlign: {
                    xs: "center",
                    lg: "left",
                  },
                  fontWeight: "bold",
                  letterSpacing: 1,
                  color: "transparent",
                  lineHeight: 1,
                }}
              >
                Management
              </Typography>
              <Typography
                // color={"white"}
                color={"black"}
                sx={{
                  width: {
                    xs: "90%",
                    sm: "80%",
                    lg: "90%",
                  },
                  margin: {
                    xs: "20px auto 0px",
                    lg: "20px 0px 0px",
                  },

                  fontSize: {
                    xs: "14px",
                    lg: "18px",
                  },
                  textAlign: {
                    xs: "center",
                    lg: "left",
                  },
                }}
              >
                Join over 10,000 businesses worldwide who trust Saniiro Books to streamline their invoicing and financial operations. Our cloud-based platform simplifies complex processes, driving growth for businesses of all sizes. With an intuitive design, Saniiro Books makes accounting effortless, empowering you to manage your finances with confidence and precision. Experience the pinnacle of SaaS accounting solutions and elevate your financial management with Saniiro today!
              </Typography>
              <Stack direction={"row"} gap={2} pt={4}>
                <Link href="/request-demo" onClick={() => window.scrollTo(0, 0)}>
                  <Button
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "18px",
                      },
                      bgcolor: "white",
                      color: "black",
                      border: "1px solid black",

                      fontWeight: "bold",
                      p: 1.5,
                      "&:hover": {
                        backgroundColor: "#052973",
                        color: "white",
                      },
                    }}
                  >
                    Explore Demo Account
                  </Button>
                </Link>
              </Stack>
            </Stack>

            <Stack
              bgcolor={"#052973"}
              borderRadius={4}
              gap={3}
              sx={{
                width: {
                  xs: "85%",
                  sm: "90%",
                  md: "69%",
                  lg: "50%",
                  xl: "43%",
                },
                margin: {
                  xs: "20px 0px",
                  lg: "20px",
                  xl: "39px 11px",
                },
                padding: {
                  xs: "20px 0px",
                  sm: "20px",
                  lg: "20px 0px",
                  xl: "30px 0px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "22px",
                    md: "26px",
                    xl: "26px",
                  },
                  textAlign: {
                    xs: "center",
                  },
                }}
                color={"white"}
                // color={"white"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                Begin Your Journey with{" "}
                <span style={{ color: "rgb(241, 91, 37)" }}>Saniiro</span> Today!
              </Typography>
              <SimplifyForm />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

