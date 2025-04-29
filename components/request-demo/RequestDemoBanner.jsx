"use client"

import "./request.css";
import { Box, Stack, Typography } from "@mui/material"
import { Fragment } from "react"
import NavLight from "../Navbar/NavLight"
import RequestDemoForm from "./RequestDemoForm"

export default function RequestDemoBanner() {

 return (
  <Fragment>
   <Stack
    sx={{
     height: { xs: "auto", xl: "100dvh" },
     position: { xs: "relative" },
     bgcolor: { xs: "primary.main" },
     mb: {xs: 4, },
     pb: {lg: 2, xl: 8},
    }}
    className={"textured-background"}
   >
    {/* Light Navigation */}
    <NavLight />

    <Stack
     sx={{
      maxWidth: "xxl",
      zIndex: 11,
      flexDirection: { xs: "column", lg: "row" },
      px: {xs: 2, md:0},
     }}>

     {/* Left contents */}
     <Stack
      sx={{
       gap: { xs: 0.6 },
       width: { xs: "100%", lg: "40%", xl: "54%", xxl: "50%", },
       m: { lg: "40px auto", xl: "84px 37px" },
       p: { xs: "10px 0" },
       justifyContent: "center",
      }}>

      <Typography
       component={'h1'}
       className={"text-stroke"}
       sx={{
        wordSpacing: { xl: "-27px" },
        fontSize: { xs: "1rem", sm: "2rem", smm:"2.5rem", sml: "2.8rem", md: "4rem", lg: "4.25rem", xl: "5.25rem", xxl: "5rem" },
        textAlign: { xs: "center", lg: "left", },
        textTransform: "uppercase",
        fontFamily: "monospace",
        fontWeight: "bold",
        color: "transparent",
        lineHeight: 0.9,
        letterSpacing: "0.1em",
       }}
      >
       Looking{<br />} For
      </Typography>

      <Typography
       component={'h2'}
       sx={{
        fontSize: { xs: "1rem", sm: "2rem", smm:"2.5rem", sml: "2.8rem", md: "4rem", lg: "4rem", xl: "5.25rem", xxl: "5rem" },
        textAlign: { xs: "center", lg: "left", },
        color: "primary.contrastText",
        textTransform: "uppercase",
        fontWeight: 900,
        lineHeight: 0.9,
        letterSpacing: "0.05em",
       }}
      >
       something in particular?
      </Typography>

      <Typography
       component={'h5'}
       sx={{
        width: { xs: "90%", sm: "80%", lg: "90%", },
        margin: { xs: "0px auto 0px", lg: "5px 5px", },
        color: "primary.contrastText",
        fontSize: { xs: "0.8rem", lg: "1.1rem", },
        textAlign: { xs: "center", lg: "left" },
       }}
      >
       We're here to help.
      </Typography>

     </Stack>

     {/* Right contents */}
     <Stack
      sx={{
       gap: { xs: 2 },
       width: { xs: "100%", lg: "50%" },
       p: { xs: "20px 0px", lg: "20px 0px", xl: "40px 0px", },
      }}>

      <Typography
       component={'h3'}
       sx={{
        fontSize: { xs: "18px", sm: "22px", md: "28px", xl: "38px" },
        textAlign: { xs: "center" },
        color: "primary.contrastText",
        fontWeight: "bold",
        fontSize: "22px",
        textAlign: "center",
        fontFamily: "Work Sans",
       }}
      >
       Get in Touch with us
      </Typography>
      <RequestDemoForm /> {/** Demo form component */}
     </Stack>
    </Stack>

   </Stack >
  </Fragment >
 )

}