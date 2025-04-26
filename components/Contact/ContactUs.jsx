import { Stack, Typography } from "@mui/material";
import React from "react";
import "./contact.css";
import NavLight from "@/components/Navbar/NavLight";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {



  return (
    <Stack
      height={{ xl: "930px", xs: "auto" }}
      position={"relative"}
      bgcolor={"#052973"}
      className="textured-background"
    >
      <NavLight />
      <Stack
        maxWidth={"1536px"}
        zIndex={11}
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },

          margin: {
            xs: "0 auto",
            sm: "20px auto",
          },
        }}
      >
        <Stack
          gap={"10px"}
          sx={{
            width: {
              xs: "100%",
              lg: "40%",
              xl: "54%",
              xxl: "50%",
            },
            margin: {
              lg: "40px auto",
              xl: "84px 37px",
            },
            padding: {
              xs: "10px 0",
            },
          }}
        >
          <Typography
            textTransform={"uppercase"}
            fontFamily={"monospace"}
            sx={{
              wordSpacing: { xl: "-27px" },
              fontSize: {
                xs: "39px",
                sm: "39px",
                md: "68px",
                lg: "63px",
                xl: "97px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            fontWeight={"bold"}
            color={"transparent"}
            lineHeight={0.9}
            letterSpacing={"0.1em"}
            className="text-stroke"
          >
            Looking For
          </Typography>
          <Typography
            color={"white"}
            textTransform={"uppercase"}
            sx={{
              fontSize: {
                xs: "38px",
                sm: "37px",
                md: "68px",
                lg: "63px",
                xl: "87px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            fontWeight={900}
            lineHeight={0.9}
            letterSpacing={"0.05em"}
          >
            something in particular?
          </Typography>

          <Typography
            fontFamily={"Work Sans"}

            color={"white"}
            sx={{
              width: {
                xs: "90%",
                sm: "80%",
                lg: "90%",
              },
              margin: {
                xs: "0px auto 0px",
                lg: "5px 5px",
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
            We're here to help.
          </Typography>
        </Stack>
        <Stack
          gap={2}
          sx={{
            width: {
              xs: "100%",
              lg: "50%",
              xl: "50%",
            },
            padding: {
              xs: "20px 0px",
              lg: "20px 0px",
              xl: "40px 0px",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "18px",
                sm: "22px",
                md: "28px",

                xl: "38px",
              },
              textAlign: {
                xs: "center",
              },
            }}
            color={"white"}
            // color={"white"}
            fontWeight={"bold"}
            fontSize={"22px"}
            textAlign={"center"}
            fontFamily={"Work Sans"}
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
