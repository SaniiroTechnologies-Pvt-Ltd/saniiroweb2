import ProductSlider from "@/components/About/ProductSlider";
import Clock from "@/components/Home/Clock";
import ContactFaq from "@/components/Home/ContactFaq";
import Nav from "@/components/Navbar/Nav";
import Industries1 from "@/components/Solutions/industriesParts/Industries1";
import Industries2 from "@/components/Solutions/industriesParts/Industries2";
import Industries3 from "@/components/Solutions/industriesParts/Industries3";
import Industries4 from "@/components/Solutions/industriesParts/Industries4";
import IndustriesGridInteractive from "@/components/Solutions/industriesParts/IndustriesGridInteractive";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | Solution / By Industries
export async function generateMetadata() {
  try {
    return await fetchMetadata('by-industries');
  } catch (error) {
    console.error(error);
  }
}

export default function ByIndustriesPage() {
  return (
    <>
      <Nav />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Stack position={"relative"}>
          <Industries1 />
          <IndustriesGridInteractive />
          {/* <Industries2 /> */}
        </Stack>
        <Industries3 />
        <Industries4 />
        <Stack bgcolor={"#f1f1f1"} pt={5}>
          <ProductSlider />
          <Clock />
        </Stack>
        <ContactFaq />
      </Stack>
    </>
  );
}
