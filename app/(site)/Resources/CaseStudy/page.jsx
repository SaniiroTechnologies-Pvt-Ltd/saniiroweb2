import CaseStudyBanner from "@/components/CaseStudy/CaseStudyBanner";
import TestimonialsCardsSection from "@/components/CaseStudy/CaseStudyCardsSection";
import CompanyBanner from "@/components/CaseStudy/CompanyBanner";
import { Stack } from "@mui/material";

export default function Index() {
  return (
    <>
      <CaseStudyBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <CompanyBanner />
      </Stack>
      <TestimonialsCardsSection />
    </>
  );
}
