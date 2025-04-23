"use client";

import Bluescreen from "@/components/Contact/Bluescreen";
import ContactUs from "@/components/Contact/ContactUs";
import GrennSection from "@/components/Contact/GreenSection";
import Offices from "@/components/Contact/Offices";
import Readytosign from "@/components/Contact/Readytosign";
import { Box, Stack } from "@mui/material";

function page() {
  return (
    <>
      <ContactUs />
      <Stack bgcolor={"#F1F1F1"}>
        <Box
          fontFamily={"Work Sans"}
          maxWidth={"1536px"}
          margin={"0 auto"}
          gap={4}
        >
          <GrennSection />
          <Bluescreen />
        </Box>
      </Stack>
      <Offices />
      <Readytosign />
    </>
  )
}

export default page
