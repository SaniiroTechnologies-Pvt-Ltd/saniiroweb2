"use client";

import NavOnScroll from "@/components/NavOnScroll";
import TestimonialsBanner from "@/components/Testimonials/parts/TestimonialsBanner";
import TestimonialsCardsSection from "@/components/Testimonials/parts/TestimonialsCardsSection";

export default function Index() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <TestimonialsBanner />
      <TestimonialsCardsSection />
    </main>
  );
}
