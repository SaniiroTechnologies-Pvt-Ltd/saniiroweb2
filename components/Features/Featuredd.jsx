import React, { useEffect, useState } from "react";
import Featured from "./Featured";
import FeaturesMain from "./FeaturesMain";
import Readytosign from "../Contact/parts/Readytosign";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
import NavLight from "../Navbar/NavLight";
import Nav from "../Navbar/Nav";

const Featuredd = () => {

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 570) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    
      <Featured />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
      {showNav && <Nav />}

        <FeaturesMain />
      </Stack>
      <Readytosign />
      <Footer />
    </>
  );
};

export default Featuredd;
