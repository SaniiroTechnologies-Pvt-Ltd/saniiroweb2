"use client";
import Bluescreen from '@/components/Contact/Bluescreen';
import GrennSection from '@/components/Contact/GreenSection';
import Offices from '@/components/Contact/Offices';
import Readytosign from '@/components/Contact/Readytosign';
import NavOnScroll from '@/components/NavOnScroll';
// import RequestDemo from '@/components/request-demo/RequestDemo'
import RequestDemoBanner from '@/components/request-demo/RequestDemoBanner';
import { Box, Stack } from '@mui/material';
import React from 'react'

const RequestDemoPage = () => {
  return (
    <>
      <RequestDemoBanner />
      <GrennSection />
      <Bluescreen />
      <Offices />
      <Readytosign />
    </>
  )
}

export default RequestDemoPage
