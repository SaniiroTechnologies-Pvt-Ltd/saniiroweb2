import Awards from "@/components/Home/Awards";
import BannerComponent from "@/components/Home/BannerComponent";
import Billing from "@/components/Home/Billing";
import Clock from "@/components/Home/Clock";
import ContactFaq from "@/components/Home/ContactFaq";
import { NewPart as Award1 } from "@/components/Home/NewPart";
import RequestDemo from "@/components/Home/RequestDemo";
import ToggleSection from "@/components/Home/State";

// export async function generateMetadata() {
//   return {
//     title: "Home Page",
//     description: "This is a dynamically generated description for the Home Page",
//     viewport: "width=device-width, initial-scale=1.0",
//     other: {
//       "keywords": "home page, SEO, Saniiro",
//     },
//   };
// }


export default function Index() {
  return (
    <>
      <BannerComponent />
      <RequestDemo />
      <Billing />
      {/* <Award1 /> */}
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
