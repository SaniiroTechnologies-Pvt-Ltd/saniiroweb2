import React, { useEffect, useState } from "react";
import Featured from "./Featured";
import FeaturesMain from "./FeaturesMain";
import Readytosign from "../Contact/Readytosign";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
import NavLight from "../Navbar/NavLight";
import Nav from "../Navbar/Nav";

const Featuredd = () => {

 

  return (
    <>
    
      <Featured />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
      {/* {showNav && <Nav />} */}

        <FeaturesMain />
      </Stack>
      <Readytosign />
      {/* <Footer /> */}
    </>
  );
};

export default Featuredd;
