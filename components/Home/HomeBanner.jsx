"use client";

import React from "react";
import { Box, Paper, Stack, styled, Typography } from "@mui/material";
import Button from "@/components/utils/Button";
import "./nm.css";
import Link from "next/link";
import SimplifyForm from "./SimplifyForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HomeBanner() {

  return (
    <React.Fragment>
      <Stack
        direction={{ xs: "column", lg: "row" }}
        spacing={5}
        justifyContent="space-between"
        alignItems={{ xs: "center", lg: "self-start" }}
        maxWidth={'xxl'}
        sx={{
          padding: { xs: 0.5 },
          margin: { xs: "0 auto" }
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: { xs: "100%", lg: "55%" },
            textAlign: { xs: "center", lg: "left" },
            px: { xs: 1, lg: 4 }
          }}
        >
          <Typography variant="h2"
            className="text-stroke"
            sx={{
              fontFamily: "monospace",
              textTransform: "uppercase",
              fontSize: {
                xs: "24px",
                sm: "32px",
                smm: "38px",
                sml: "42px",
                md: "48px",
                lg: "52px",
                xl: "60px",
                xxl: "65px"
              },
              textAlign: { xs: "center", lg: "left" },
              fontWeight: "bold",
              color: "transparent",
              lineHeight: 1.1,
              mb: { xs: 1, sm: 1.5, md: 2 }
            }}>
            {"All in One"}
          </Typography>

          <Typography variant="h1"
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              fontSize: {
                xs: "28px",
                sm: "36px",
                smm: "42px",
                sml: "48px",
                md: "54px",
                lg: "60px",
                xl: "68px",
                xxl: "72px"
              },
              textAlign: { xs: "center", lg: "left" },
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "0.05em",
              mb: { xs: 2, sm: 2.5, md: 3 }
            }}
          >
            {"Effortless Financial Control, Intelligent CRM Insights"}
          </Typography>

          {/* <Typography variant="body1"
            sx={{
              color: "dark.main",
              maxWidth: { xs: "90%", lg: "80%" },
              margin: { xs: "20px auto 0px", lg: "20px 0px 0px" },
              fontSize: { 
                xs: "14px", 
                sm: "15px", 
                smm: "16px", 
                sml: "16px", 
                md: "17px", 
                lg: "18px", 
                xl: "20px" 
              },
              lineHeight: { 
                xs: 1.5, 
                sm: 1.6, 
                md: 1.7 
              },
              textAlign: { xs: "center", lg: "left" },
              mb: { xs: 3, sm: 4, md: 5 }
            }}>
            Join over 10,000 businesses worldwide who trust Saniiro Books to streamline their invoicing and financial operations.
            Our cloud-based platform simplifies complex processes, driving growth for businesses of all sizes. With an intuitive design,
            Saniiro Books makes accounting effortless, empowering you to manage your finances with confidence and precision.
            Experience the pinnacle of SaaS accounting solutions and elevate your financial management with Saniiro today!
          </Typography> */}

          <Stack
            direction="row"
            spacing={2}
            sx={{
              paddingTop: { xs: 2, sm: 3, md: 4 },
              justifyContent: { xs: "center", lg: "flex-start" }
            }}
          >
            <Link href="/request-demo" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="contained"
                sx={{
                  bgcolor: "light.main",
                  color: "dark.main",
                  borderColor: "dark.main",
                  border: "1px solid",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    smm: "16px",
                    md: "17px",
                    lg: "18px"
                  },
                  p: { xs: 1.2, sm: 1.3, md: 1.5 },
                  "&:hover": { backgroundColor: "primary.main", color: "primary.contrastText" },
                }}>
                Explore Demo Account
              </Button>
            </Link>
          </Stack>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            bgcolor: "primary.main",
            borderRadius: 4,
            padding: 3,
            width: { xs: "85%", lg: "45%" },
          }}
        >
          <Typography variant="h2" color="light.main"
            sx={{
              fontSize: { xs: "0.75rem", sm: '1em', md: "1.5rem", lg: "1.1rem", xl: "1.6rem" },
              mb: { xs: 2, xl: 4 },
              textAlign: "center",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Begin Your Journey with{" "}
            <span style={{ color: "rgb(241, 91, 37)" }}>Saniiro</span> Today!
          </Typography>
          <SimplifyForm />
        </Box>
      </Stack>

    </React.Fragment >
  );
};


{/* <Stack
  alignItems={"center"}
  justifyContent={"space-between"}
  p={"0 10px"}
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
            fontSize: { xs: "10px", sm: "12px", md: "18px" },
            bgcolor: "light.main",
            color: "dark.main",
            border: "1px solid black",
            fontWeight: "bold",
            p: 1.5,
            "&:hover": {
              backgroundColor: "primary.main",
              color: "text.primary",
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
</Stack> */}