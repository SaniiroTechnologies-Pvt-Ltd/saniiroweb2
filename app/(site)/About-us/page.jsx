import AboutBanner from "@/components/About/AboutBanner";
import ExploreAbout from "@/components/About/ExploreAbout";
import Name from "@/components/About/Name";
import OurJourney from "@/components/About/OurJourney";
import OurNetwork from "@/components/About/OurNetwork";
import ProductSlider from "@/components/About/ProductSlider";
import WelcomeToSaniiro from "@/components/About/WelcomeToSaniiro";
import Clock from "@/components/Home/Clock";
import VideoFeatureSection from "@/components/Home/VideoFeatureSection";
import NavOnScroll from "@/components/NavOnScroll";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | About-us
export async function generateMetadata() {
  try {
    return await fetchMetadata('about');
  } catch (error) {
    console.error(error);
  }
}



export default function AboutUsPage() {

  return (
    <>
      <Stack gap={5}>
        <NavOnScroll isAlwaysVisible={true} />
        <AboutBanner />
      </Stack>
      <WelcomeToSaniiro />
      <ExploreAbout />
      <OurJourney />
      <OurNetwork />
      <ProductSlider />
      <Stack gap={5} maxWidth={"1536px"} margin={"0 auto"}>
        <Name />
        <Clock />
        <VideoFeatureSection />
      </Stack>
    </>
  );
}