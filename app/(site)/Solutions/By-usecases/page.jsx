import Industries from "@/components/Solutions/IndustriesByusecases/Industries";
import UseCaseOperationList from "@/components/Solutions/IndustriesByusecases/UseCaseOperationList";
import Signupfree from "@/components/Solutions/Signupfree";
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Solution / By Size
export async function generateMetadata() {
  try {
    return await fetchMetadata('by-use-cases');
  } catch (error) {
    console.error(error);
  }
}

export default function ByUseCasesPage() {
  return (
    <>
      <Industries />
      <UseCaseOperationList />
      {/* <Industry2 /> */}
      <Signupfree />
    </>
  );
}
