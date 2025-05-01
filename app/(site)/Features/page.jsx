import Readytosign from "@/components/Contact/Readytosign";
import Featured from "@/components/Features/Featured";
import FeaturesMain from "@/components/Features/FeaturesMain";
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | features Modules
export async function generateMetadata() {
  try {
    return await fetchMetadata('features');
  } catch (error) {
    console.error(error);
  }
}

export default function FeaturePage() {
  return (
    <>
      <Featured />
      <FeaturesMain />
      <Readytosign />
    </>
  );
}