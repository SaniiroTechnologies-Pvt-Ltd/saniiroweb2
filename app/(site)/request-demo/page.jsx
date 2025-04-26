"use client";
import Bluescreen from '@/components/Contact/Bluescreen';
import GrennSection from '@/components/Contact/GreenSection';
import Offices from '@/components/Contact/Offices';
import Readytosign from '@/components/Contact/Readytosign';
import NavOnScroll from '@/components/NavOnScroll';
import RequestDemo from '@/components/request-demo/RequestDemo'
import RequestDemoBanner from '@/components/request-demo/RequestDemoBanner';
import { Box, Stack } from '@mui/material';
import React from 'react'

function page() {
  return (
    <>
    <NavOnScroll threshold={610} />
    <RequestDemoBanner />
      {/* <RequestDemo/> */}
      <Stack bgcolor={"#F1F1F1"}>
        <Box
          fontFamily={"Work Sans"}
          maxWidth={"1536px"}
          margin={"8rem auto"}
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
