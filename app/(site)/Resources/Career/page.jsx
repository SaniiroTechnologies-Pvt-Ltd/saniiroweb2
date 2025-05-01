import Readytosign from "@/components/Contact/Readytosign";
import NavOnScroll from "@/components/NavOnScroll";
import CareerDescription from "@/components/Resources/Career/CareerDescription"; 
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Career
export async function generateMetadata() {
  try {
    return await fetchMetadata('career');
  } catch (error) {
    console.error(error);
  }
}

export default function CareerPage() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <CareerDescription />
      <Readytosign />
    </main>
  );
}
