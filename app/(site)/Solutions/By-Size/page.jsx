import ProductSlider from "@/components/About/ProductSlider";
import Clock from "@/components/Home/Clock";
import ContactFaq from "@/components/Home/ContactFaq";
import IndustryCards from "@/components/IndustryCards";
import NavOnScroll from "@/components/NavOnScroll";
import Industries1 from "@/components/Solutions/IndustriesBysize/Industries1";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | Solution / By Size
export async function generateMetadata() {
  try {
    return await fetchMetadata('by-size');
  } catch (error) {
    console.error(error);
  }
}

export default function BySizePage() {
  return (
    <>
      <NavOnScroll isAlwaysVisible={true} />
      {/* for desktop view  */}
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Stack>
          <Stack position={"relative"} gap={5}>
            <Stack>
              <Industries1 />
            </Stack>
            <Stack gap={5}>
              {/* <Line /> */}
              {/* <SliderIndustry /> */}
              <IndustryCards />
            </Stack>
            {/* <Stack
            alignItems={"center"}
            p={"100px 0"}
            display={{
              xs: "none",
              lg: "flex",
            }}
          >
            <Image src={Boxes} alt="" style={{ width: "100px" }} />
          </Stack>
         
          <Industries2 /> */}
          </Stack>
          <Stack bgcolor={"#F8F8F8"} pt={5}>
            <ProductSlider />
            <Clock />
          </Stack>
        </Stack>
      </Stack>
      <ContactFaq />

      {/* for mobile view  */}
      {/* <Stack
      display={{
        xs: "flex",
        lg: "none",
      }}
    >
      <Nav />
      <Industries1 />
      <Line />
      <SliderIndustry />
      <Industries2 />
      <Stack bgcolor={"#F8F8F8"} pt={5}>
        <ProductSlider />
        <Clock />
        <ContactFaq />
        <Footer />
      </Stack>
    </Stack> */}
    </>
  );
}
