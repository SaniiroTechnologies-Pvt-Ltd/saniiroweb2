import Readytosign from "@/components/Contact/Readytosign";
import Billing from "@/components/Home/Billing";
import ContactFaq from "@/components/Home/ContactFaq";
import NavOnScroll from "@/components/NavOnScroll";
import Industry2 from "@/components/Partner/parts/ApplicationSection";
import BlankSpace from "@/components/Partner/parts/BlankSpace";
import BuildingSuccess from "@/components/Partner/parts/BuildingSuccess";
import Gallery from "@/components/Partner/parts/Gallery";
import Inspire from "@/components/Partner/parts/Inspire";
import PartnerPrivileges from "@/components/Partner/parts/PartnerPrivileges";
import Specialize from "@/components/Partner/parts/Specialize";
import Tagline from "@/components/Partner/parts/Tagline";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | Become A Partner
export async function generateMetadata() {
  try {
    return await fetchMetadata('become-partner');
  } catch (error) {
    console.error(error);
  }
}

export default function BecomeAPartnerPage() {
  return (
    <>
      <NavOnScroll isAlwaysVisible={true} />
      <BuildingSuccess />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Tagline />
        <Billing bgColor={true} />
        <Specialize />
        <Industry2 />
        <BlankSpace />
        <PartnerPrivileges />
        <Inspire />
        <Gallery />
        <ContactFaq />
      </Stack>
      <Readytosign />
    </>
  );
}
