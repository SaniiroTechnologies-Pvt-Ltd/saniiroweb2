"use client";

import Readytosign from "@/components/Contact/Readytosign";
import ContactFaq from "@/components/Home/ContactFaq";
import JoinBusinesses from "@/components/undo/JoinBusinesses";
import PricingBanner from "@/components/undo/PricingBanner";
import PricingTab from "@/components/undo/PricingTab";
import { Stack } from "@mui/material";

export default function Index() {
  return (
    <>
      <PricingBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <PricingTab />
        <JoinBusinesses />
        <ContactFaq />
      </Stack>
      <Readytosign />
    </>
  );
}
