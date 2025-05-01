import ProductSlider from "@/components/About/ProductSlider";
import BillingBanner from "@/components/Features/BillingBanner";
// import BillingFeatures from "@/components/Features/BillingFeatures";
import BillingSteps from "@/components/Features/BillingSteps";
// import FeaturesGlance from "@/components/Features/FeaturesGlance";
// import FeatureVideo from "@/components/Features/FeatureVideo";
import ImprovedSales from "@/components/Features/ImprovedSales";
import InventoryFeaturesGlance2 from "@/components/Features/Inventory/InventoryFeaturesGlance2";
import InventoryFolderOperationList from "@/components/Features/Inventory/InventoryFolderOperationList";
import Clock from "@/components/Home/Clock";
import NavOnScroll from "@/components/NavOnScroll";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | Features / Inventory Module
export async function generateMetadata() {
  try {
    return await fetchMetadata('inventory-module');
  } catch (error) {
    console.error(error);
  }
}

export default function InventoryModulePage() {
  return (
    <main>
      <NavOnScroll threshold={570} />
      <BillingBanner />
      {/* <BillingFeatures /> */}
      {/* <FeaturesGlance /> */}
      <InventoryFolderOperationList />
      <InventoryFeaturesGlance2 />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <BillingSteps />
        {/* <FeatureVideo /> */}
        <Stack>
          <ProductSlider />
        </Stack>
        <Clock />
        <ImprovedSales />
      </Stack>
    </main>
  );
}