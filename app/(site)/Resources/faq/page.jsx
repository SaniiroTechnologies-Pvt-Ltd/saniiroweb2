import FaqBanner from "@/components/Faq/parts/FaqBanner";
import NavOnScroll from "@/components/NavOnScroll";
import FaqContent from "@/components/Faq/FaqContent";
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | FAQ's
export async function generateMetadata() {
  try {
    return await fetchMetadata('faqs');
  } catch (error) {
    console.error(error);
  }
}

export default function FaqPage() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <FaqBanner />
      <FaqContent />
    </main>
  );
}
