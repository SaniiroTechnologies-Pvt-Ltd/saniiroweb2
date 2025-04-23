"use client";

import AboutBanner from "@/components/About/AboutBanner";
import ExploreAbout from "@/components/About/ExploreAbout";
import Name from "@/components/About/Name";
import OurJourney from "@/components/About/OurJourney";
import OurNetwork from "@/components/About/OurNetwork";
import ProductSlider from "@/components/About/ProductSlider";
import WelcomeToSaniiro from "@/components/About/WelcomeToSaniiro";
import Awards from "@/components/Home/Awards";
import Clock from "@/components/Home/Clock";
import { Stack } from "@mui/material";

function page() {
  return (
    <>
      <AboutBanner />
      <Stack gap={5} maxWidth={"1536px"} margin={"0 auto"}>
        <WelcomeToSaniiro />
      </Stack>
      <ExploreAbout />
      <OurJourney />
      <OurNetwork />
      <ProductSlider />
      <Stack gap={5} maxWidth={"1536px"} margin={"0 auto"}>
        <Name />
        <Clock />
        <Awards />
      </Stack>
    </>
  );
}

export default page