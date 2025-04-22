import React from "react";
import Header from "./parts/Header";
import Nav from "@/components/Navbar/Nav"; 
import VideoFeedSection from "./parts/VideoFeedSection";
import Signupfree from "@/components/Solutions/Signupfree"; 
import { Stack } from "@mui/material";

const WatchMoreVideos = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <VideoFeedSection />
      </Stack>
      <Signupfree />
    </div>
  );
};

export default WatchMoreVideos;
