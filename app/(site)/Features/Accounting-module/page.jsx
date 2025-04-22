import ProductSlider from "@/components/About/ProductSlider";
import AccountingFeaturesGlance2 from "@/components/Features/Accounting/AccountingFeaturesGlance2";
import AccountingFolderOperationList from "@/components/Features/Accounting/AccountingFolderOperationList";
import FeatureVideo from "@/components/Features/FeatureVideo";
import BillingBanner from "@/components/Features/BillingBanner";
import BillingFeatures from "@/components/Features/BillingFeatures";
import FeaturesGlance from "@/components/Features/FeaturesGlance";
import BillingSteps from "@/components/Features/BillingSteps";
import ImprovedSales from "@/components/Features/ImprovedSales"; 
import Clock from "@/components/Home/Clock";
import { Stack } from "@mui/material";

export default function Index() {
  return (
    <>
      <BillingBanner />
      {/* <BillingFeatures /> */}
      {/* <FeaturesGlance /> */}
      <AccountingFolderOperationList />
      <AccountingFeaturesGlance2 />
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
