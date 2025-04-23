"use client";

import React from "react";
import Header from "./parts/Header"; 
import VideoFeedSection from "./parts/VideoFeedSection";
import Signupfree from "@/components/Solutions/Signupfree"; 
import { Stack } from "@mui/material";
import NavOnScroll from "@/components/NavOnScroll";

const WatchMoreVideos = () => {
  return (
    <div>
      <NavOnScroll isAlwaysVisible={true} />
      <Header />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <VideoFeedSection />
      </Stack>
      <Signupfree />
    </div>
  );
};

export default WatchMoreVideos;
