"use client"

import React from "react";
import NavOnScroll from "../NavOnScroll";
import { Stack, Typography, } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import Footer from "../utils/Footer";
import RequestCallbackForm from "./RequestCallbackForm";

const RequestCallback = () => {

  return (
    <>
      <NavOnScroll isAlwaysVisible={true} />
      <Stack maxWidth={"1536px"} margin={"0 auto"} backgroundColor={"#F5F5F5"}>
        <Stack direction={{ xs: "column", md: "row" }} pb={3}>
          <Stack
            margin={"0 auto"}
            width={{ xs: "80%", md: "50%" }}
            alignItems={"center"}
            mt={{ xs: 5, md: 20 }}
          >
            <Stack
              width={{ xs: "100%", md: "70%" }}
              margin={"0 auto"}
              gap={2}
              fontFamily={"Work Sans"}
            >
              <Typography
                color={"#004ad4"}
                textAlign={{ xs: "center", md: "left" }}
                variant="h3"
                fontWeight={"bold"}
              >
                Request a Callback
              </Typography>
              <Typography
                fontWeight={"bold"}
                textAlign={{ xs: "center", md: "left" }}
              >
                Interested in learning more about Zoho CRM? Fill out the form
                and one of our product experts will call you to understand your
                requirements better.
              </Typography>
              <Typography>You can also reach us directly at:</Typography>
              <Stack direction={"row"} gap={2}>
                <PhoneIcon sx={{ color: "#F15B25" }} />
                <Stack direction={"column"} gap={0.5}>
                  <Typography>022 6971 1021</Typography>
                  {/* <Typography>1800 102 1123</Typography> */}
                </Stack>
              </Stack>
              <Typography>Or write to us at:</Typography>
              <Stack direction={"row"} gap={2}>
                <MailIcon sx={{ color: "#F15B25" }} />
                <Typography>sales@saniiro.com</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            margin={"0 auto"}
            width={{ xs: "95%", md: "50%" }}
            height={"100%"}
          >
            <Stack mt={5} px={{sm: 1, md: 5 }}>
              <RequestCallbackForm />
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </Stack >
    </>
  );
};

export default RequestCallback;


