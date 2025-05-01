import Industries from "@/components/Solutions/IndustriesByusecases/Industries";
import Industry2 from "@/components/Solutions/IndustriesByusecases/Industry2";
import UseCaseOperationList from "@/components/Solutions/IndustriesByusecases/UseCaseOperationList";
import Signupfree from "@/components/Solutions/Signupfree";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

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
      <Stack maxWidth={"1536px"} margin={"0 auto"} mb={1}>
        <Industries />
        <UseCaseOperationList />
        {/* <Industry2 /> */}
      <Signupfree />
      </Stack>
    </>
  );
}
