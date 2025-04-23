"use client";

import BillingBanner from "@/components/Features/BillingBanner";
import BillingFolderOperationList from "@/components/Features/Billing/BillingFolderOperationList";
import BillingFeaturesGlance2 from "@/components/Features/Billing/BillingFeaturesGlance2"; 
import { Stack } from "@mui/material";
import BillingSteps from "@/components/Features/BillingSteps";
// import FeatureVideo from "@/components/Features/FeatureVideo";
import ProductSlider from "@/components/About/ProductSlider";
import Clock from "@/components/Home/Clock";
import ImprovedSales from "@/components/Features/ImprovedSales"; 
// import BillingFeatures from "@/components/Features/BillingFeatures";
// import FeaturesGlance from "@/components/Features/FeaturesGlance";

function page() {
  return (
    <>
      <BillingBanner />
      {/* <BillingFeatures /> */}
      {/* <FeaturesGlance /> */}
      <BillingFolderOperationList />
      <BillingFeaturesGlance2 />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <BillingSteps />
        {/* <FeatureVideo /> */}
        <Stack>
          <ProductSlider />
        </Stack>
        <Clock />
        <ImprovedSales />
      </Stack>
    </>
  );
}

export default page