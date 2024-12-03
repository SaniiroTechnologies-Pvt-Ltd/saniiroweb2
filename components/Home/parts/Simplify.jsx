"use client";

import {
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Button from "../../utils/Button";
import "./nm.css";
import Link from "next/link";
import SimplifyForm from "./SimplifyForm";

const Simplify = () => {

  return (
    <>
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
                  xs: "55px",
                  sm: "55px",
                  lg: "85px",
                  xl: "108px",
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
              Simplify Your
            </Typography>
            <Typography
              className="text-stroke"
              fontFamily={"monospace"}
              sx={{
                textTransform: "uppercase",
                fontSize: {
                  xs: "55px",
                  sm: "55px",
                  lg: "85px",
                  xl: "108px",
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
              Business
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
              Saniiro Books empowers over 10,000+ business houses globally by
              streamlining invoicing and financial operations, driving
              remarkable growth for businesses of all sizes. Now it's time to
              say goodbye to complicated processes! Our intuitive design makes
              accounting effortless, allowing you to manage your finances with
              confidence and precision. Experience the best in SaaS accounting
              solutions and transform your financial management with Saniiro
              Books today!
            </Typography>
            <Stack direction={"row"} gap={2} pt={4}>
              <Link href="/Contact-us" onClick={() => window.scrollTo(0, 0)}>
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
                  md: "28px",
                  xl: "28px",
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
            <SimplifyForm/>
          </Stack>
        </Stack>
      </Stack>
   
    </>
  );
};

export default Simplify;
