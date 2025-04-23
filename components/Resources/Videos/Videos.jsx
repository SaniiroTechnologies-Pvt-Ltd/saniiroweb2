"use client";

import React from "react";
import VideoSection from "./VideoSection";
import VideoSection2 from "./VideoSection2";
import VideoSection3 from "./VideoSection3";
import Signupfree from "@/components/Solutions/Signupfree";
import { Stack } from "@mui/material";
import NavOnScroll from "@/components/NavOnScroll";

{/**
  * @deprecated Will remove soon 
  */}
const Videos = () => {

  return (
    <>
      <NavOnScroll isAlwaysVisible={true} />
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
