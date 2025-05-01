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


// metadata | Home
export async function generateMetadata() {
  try {
    return await fetchMetadata('home');
  } catch (error) {
    console.error(error);
  }
}

export default function Index() {
  return (
    <>
      <NavOnScroll isAlwaysVisible={true} />
      <HomeBanner />
      <RequestDemo />
      <Billing />
      <NewPart />
      <ToggleSection />
      <Awards />
      <Clock />
      <ContactFaq />



      {/* <Stack
        fontFamily={"Work Sans"}
        maxWidth={"1536px"}
        margin={"0 auto"}
        gap={4}
      >
        <Simplify />
        <RequestDemo />
        <Billing />
        <Testimonial />
        <ToggleSection />
        <Clock />
        <Awards />
        <ContactFaq />
      </Stack>*/}
    </>
  );
}
