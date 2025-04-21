import React, { useEffect, useState } from "react";
import ResourceBanner from "./parts/ResourceBanner";
import Readytosign from "../Contact/parts/Readytosign";
import Footer from "../utils/Footer";
import { Stack } from "@mui/material";
import Nav from "../Navbar/Nav";
const Resources = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
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
          {showNav && <Nav/>}

      <ResourceBanner />
      <Readytosign />
      <Footer />
    </>
  );
};

export default Resources;
