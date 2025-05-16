import CaseStudyUserBanner from "@/components/CaseStudy/CaseStudyUserBanner";
import ContentSection from "@/components/CaseStudy/ContentSection";
import RecommendedSection from "@/components/CaseStudy/RecommendedSection";
import apiEndpoints from "@/utils/apiEndpoints";
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Case Study
export async function generateMetadata() {
  try {
    return await fetchMetadata('case-study');
  } catch (error) {
    console.error(error);
  }
}

// Dynamic fetch from API using slug
async function getCaseStudyData(slug) {
  const res = await fetch(`${apiEndpoints.caseStudy}/${slug}`, {
    cache: 'no-store', // disable ISR if data updates frequently
  });

  if (!res.ok) throw new Error("Case study not found");

  return res.json();
}


export default async function CaseStudyUserExperiencePage({ params }) {
  const { slug } = params;
  const data = await getCaseStudyData(slug);
  const caseStudy = data.Data;

  return (
    <>
      <CaseStudyUserBanner caseStudy={caseStudy} />
      <ContentSection caseStudy={caseStudy} />
      <RecommendedSection />
      {/* <CaseStudySingle /> */}
    </>
  );
}
