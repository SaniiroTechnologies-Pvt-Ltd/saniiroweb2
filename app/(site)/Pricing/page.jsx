import Readytosign from "@/components/Contact/Readytosign";
import ContactFaq from "@/components/Home/ContactFaq";
import NavOnScroll from "@/components/NavOnScroll";
import JoinBusinesses from "@/components/undo/JoinBusinesses";
import PricingBanner from "@/components/undo/PricingBanner";
import PricingTab from "@/components/undo/PricingTab";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | Pricing
export async function generateMetadata() {
  try {
    return await fetchMetadata('pricing');
  } catch (error) {
    console.error(error);
  }
}



export default function PricingPage() {

  return (
    <>
      <NavOnScroll threshold={450} isAlwaysVisible={false} />
      <PricingBanner />
      <PricingTab />
      <JoinBusinesses />
      <ContactFaq />
      <Readytosign />
    </>
  );
}
