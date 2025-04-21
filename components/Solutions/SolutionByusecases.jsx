import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Industries from "./IndustriesByusecases/Industries";
import Industry2 from "./IndustriesByusecases/Industry2";
import Footer from "../utils/Footer";
import Signupfree from "./Signupfree";
import Nav from "../Navbar/Nav";

const SolutionByusecases = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
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
          {showNav && <Nav />}

      <Industries />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Industry2 />
      </Stack>
      <Signupfree />
      <Footer />
    </>
  );
};

export default SolutionByusecases;
