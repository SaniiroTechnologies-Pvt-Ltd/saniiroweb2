import React from "react";
import PricingBanner from "./PricingBanner";
import PricingTab from "./PricingTab";
import Readytosign from "../Contact/Readytosign";
// import PriceCardSection from "./PriceCardSection";
// import PriceTagSection from "./PracingTagSection";
// import PricingFeaturesTable from "./PricingFeaturesTable";
import Footer from "../utils/Footer";
import ContactFaq from "../Home/ContactFaq";
import JoinBusinesses from "./JoinBusinesses";
import { Stack } from "@mui/material";
const Pricing = () => {
  return (
    <>
      <PricingBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <PricingTab />
        <JoinBusinesses />
        <ContactFaq />
      </Stack>
      <Readytosign />
      <Footer />
    </>
  );
};

export default Pricing;
