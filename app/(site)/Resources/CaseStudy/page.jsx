import CaseStudyBanner from "@/components/CaseStudy/CaseStudyBanner";
import TestimonialsCardsSection from "@/components/CaseStudy/CaseStudyCardsSection";
import TestimonialSection from "@/components/CaseStudy/TestimonialSection";
import apiEndpoints from "@/utils/apiEndpoints";
// import CompanyBanner from "@/components/CaseStudy/CompanyBanner";
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Case Study
export async function generateMetadata() {
  try {
    return await fetchMetadata('case-study');
  } catch (error) {
    console.error(error);
  }
}

export default async function CaseStudyPage() {
  const res1 = await fetch(apiEndpoints.review, { next: { revalidate: 60 } }); // ISR + cache
  const data1 = await res1.json();
  const reviews  = data1.Data; // or any logic

  const res = await fetch(apiEndpoints.caseStudy, { next: { revalidate: 60 } }); // ISR + cache
  const data = await res.json();
  const caseStudies  = data.Data; // or any logic


  return (
    <>
      <CaseStudyBanner />
      {/* <CompanyBanner /> */}
      <TestimonialSection caseStudies ={reviews[0] } />
      <TestimonialsCardsSection caseStudies={caseStudies} />
    </>
  );
}
