import NavOnScroll from "@/components/NavOnScroll";
import TestimonialsBanner from "@/components/Testimonials/parts/TestimonialsBanner";
import TestimonialsCardsSection from "@/components/Testimonials/parts/TestimonialsCardsSection";
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Testimonials
export async function generateMetadata() {
  try {
    return await fetchMetadata('testimonials');
  } catch (error) {
    console.error(error);
  }
}

export default function TestimonialsPage() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <TestimonialsBanner />
      <TestimonialsCardsSection />
    </main>
  );
}
