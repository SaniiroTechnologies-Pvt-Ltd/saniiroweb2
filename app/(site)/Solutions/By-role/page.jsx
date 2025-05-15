
import NavOnScroll from "@/components/NavOnScroll";
import BenefitsByRole from "@/components/Solutions/IndustriesByrole/BenefitsByRole";
import Industry1 from "@/components/Solutions/IndustriesByrole/Industry1";
import Industry2 from "@/components/Solutions/IndustriesByrole/Industry2";
import Industry3 from "@/components/Solutions/IndustriesByrole/Industry3";
import Industry4 from "@/components/Solutions/IndustriesByrole/Industry4";
import Industry5 from "@/components/Solutions/IndustriesByrole/Industry5";
import Industry6 from "@/components/Solutions/IndustriesByrole/Industry6";
import Signupfree from "@/components/Solutions/Signupfree";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | Solution / By Size
export async function generateMetadata() {
  try {
    return await fetchMetadata('by-role');
  } catch (error) {
    console.error(error);
  }
}

export default function ByRolePage() {
  return (
    <>
      <NavOnScroll isAlwaysVisible={true} />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Stack
          pb={{ xs: "50px", md: "100px", }}
          gap={{ xs: "20px", md: "40px", lg: "60px", }}
        >
          <Industry1 />
          <BenefitsByRole />
          <Industry2 />
        </Stack>
      </Stack>
      <Industry3 />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Stack
          pb={{ xs: "50px", md: "100px", }}
          gap={{ xs: "20px", md: "40px", lg: "60px", }}
        >
          <Industry4 />
          <Industry5 />
          <Industry6 />
        </Stack>
      </Stack>
      <Signupfree />
    </>
  );
}
