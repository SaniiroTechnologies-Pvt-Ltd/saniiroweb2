import HomeBanner from "@/components/Home/HomeBanner";
import Billing from "@/components/Home/Billing";
import Clock from "@/components/Home/Clock";
import ContactFaq from "@/components/Home/ContactFaq";
import RequestDemo from "@/components/Home/RequestDemo";
import ToggleSection from "@/components/Home/State";
import NavOnScroll from "@/components/NavOnScroll";
import { fetchMetadata } from "@/utils/FetchMetadata";
import VideoFeatureSection from "@/components/Home/VideoFeatureSection";
import RecognitionShowcase from "@/components/Home/AwardsAndRecognition";
import PartnerLogoCarousel from "@/components/Home/PartnerLogoCarousel";


// metadata | Home
export async function generateMetadata() {
  try {
    return await fetchMetadata('home');
  } catch (error) {
    console.error(error);
  }
}

export default function IndexPage() {
  return (
    <>
      <NavOnScroll isAlwaysVisible={true} />
      <HomeBanner />
      <RequestDemo />
      <PartnerLogoCarousel />
      <Billing />
      <RecognitionShowcase />
      {/* <Testimonial /> */}
      <ToggleSection />
      <VideoFeatureSection />
      <Clock />
      <ContactFaq />
    </>
  );
}
