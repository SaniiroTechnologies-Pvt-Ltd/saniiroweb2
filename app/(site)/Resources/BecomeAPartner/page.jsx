
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
import { Stack } from "@mui/material";

export default function Index() {
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
