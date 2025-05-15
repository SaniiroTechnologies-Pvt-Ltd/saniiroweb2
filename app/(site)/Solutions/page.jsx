import NavOnScroll from "@/components/NavOnScroll";
import ReadytoBuild from "@/components/Solutions/ReadytoBuild";
import SolutionsBanner from "@/components/Solutions/SolutionsBanner";
import SolutionSection2 from "@/components/Solutions/SolutionSection2";
import SolutionSection3 from "@/components/Solutions/SolutionSection3";

export default function SolutionPage() {
  return (
    <>
      <NavOnScroll isAlwaysVisible={true} />
      <SolutionsBanner />
      <SolutionSection2 />
      <SolutionSection3 />
      <ReadytoBuild />
    </>
  );
}
