import React, { useEffect, useState } from "react";
import VideoSection from "./VideoSection";
import VideoSection2 from "./VideoSection2";
import VideoSection3 from "./VideoSection3";
import Signupfree from "@/components/Solutions/Signupfree"; 
import { Stack } from "@mui/material";
import Nav from "@/components/Navbar/Nav";

const Videos = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
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

      <VideoSection />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <VideoSection2 />
        <VideoSection3 />
      </Stack>
      <Signupfree />
    </>
  );
};

export default Videos;
