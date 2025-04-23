import Readytosign from "@/components/Contact/Readytosign";
import NavOnScroll from "@/components/NavOnScroll";
import ResourceBanner from "@/components/Resources/parts/ResourceBanner";

export default function Index() {
  return (
    <main>
      <NavOnScroll threshold={300} />
      <ResourceBanner />
      <Readytosign />
    </main>
  );
}
