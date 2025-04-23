import FaqBanner from "@/components/Faq/parts/FaqBanner";
import NavOnScroll from "@/components/NavOnScroll";
import FaqContent from "@/components/Faq/FaqContent";

export default function page() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <FaqBanner />
      <FaqContent />
    </main>
  );
}
