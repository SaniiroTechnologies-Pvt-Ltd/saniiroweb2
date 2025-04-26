"use client"

import "./request.css";
import { Box, Stack, Typography } from "@mui/material"
import { Fragment } from "react"
import NavLight from "../Navbar/NavLight"
import RequestDemoForm from "./RequestDemoForm"

export default function RequestDemoBanner() {

 return (
  <Fragment>
   <Box
    sx={{
     height: { xs: "100%" },
     position: { xs: "relative" },
     bgcolor: { xs: "primary.main" },
     boxSizing: { xs: "border-box" },
     // overflow: { xs: "hidden" },
     border: { xs: 2 },
     borderColor: { xs: "background.default" },
    }}
    className={"textured-background"}
   >
    <NavLight />

    <Stack
     sx={{
      flexDirection: { xs: "column", lg: "row" },
      height: { xs: "100%" },
      gap: { xs: 2 },
      p: { xs: 2 },
      zIndex: 11,
      // border: { xs: 1 },
     }}>

     {/* Left contents */}
     <Box
      sx={{
       width: { xs: "100%", lg: "50%" },
       p: { xs: 1 },
       // zIndex: 12,
       // border: { xs: 1 },
       display: 'flex', // Add this line
       flexDirection: 'column', // Add this line
       justifyContent: 'center', // Add this line
       alignItems: 'start', // Add this line
      }}>
      <Typography
       component={'h1'}
       className={"text-stroke"}
       sx={{
        fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "4.5rem", xl: "4rem", },
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
        fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "4.5rem", xl: "3.9rem", },
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
        fontFamily: "Work Sans",
        color: "primary.contrastText",
        fontSize: { xs: "0.8rem", lg: "1.1rem", },
        textAlign: { xs: "center", lg: "left" },
       }}
      >
       We're here to help.
      </Typography>

     </Box>

     {/* Right contents */}
     <Box
      sx={{
       width: { xs: "100%", lg: "50%" },
       p: { xs: 1 },
       m: 'auto',
       zIndex: 12,
       // border: { xs: 1 },
      }}>
      <Typography
       component={'h3'}
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
       Get in Touch with us
      </Typography>
      <RequestDemoForm /> {/** Demo form component */}
     </Box>
    </Stack>

   </Box >
  </Fragment >
 )

}