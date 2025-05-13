import Awards from "@/components/Home/Awards";
import HomeBanner from "@/components/Home/HomeBanner";
import Billing from "@/components/Home/Billing";
import Clock from "@/components/Home/Clock";
import ContactFaq from "@/components/Home/ContactFaq";
import NewPart from "@/components/Home/NewPart";
import RequestDemo from "@/components/Home/RequestDemo";
import ToggleSection from "@/components/Home/State";
import NavOnScroll from "@/components/NavOnScroll";
import { fetchMetadata } from "@/utils/FetchMetadata";
import ResponsiveAppBar from "@/components/Navbar/ResponsiveAppBar";


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
      {/* <NavOnScroll isAlwaysVisible={true} /> */}
      <ResponsiveAppBar />
      <HomeBanner />
      <RequestDemo />
      <Billing />
      <NewPart />
      {/* <Testimonial /> */}
      <ToggleSection />
      <Awards />
      <Clock />
      <ContactFaq />
    </>
  );
}
