import CaseStudyBanner from "@/components/CaseStudy/CaseStudyBanner";
import TestimonialsCardsSection from "@/components/CaseStudy/CaseStudyCardsSection";
import CompanyBanner from "@/components/CaseStudy/CompanyBanner";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | Case Study
export async function generateMetadata() {
  try {
    return await fetchMetadata('case-study');
  } catch (error) {
    console.error(error);
  }
}

export default function CaseStudyPage() {
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
