import Industries from "@/components/Solutions/IndustriesByusecases/Industries";
import Industry2 from "@/components/Solutions/IndustriesByusecases/Industry2";
import Signupfree from "@/components/Solutions/Signupfree";
import { Stack } from "@mui/material";

export default function Index() {
  return (
    <>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <Industries />
        <Industry2 />
      </Stack>
      <Signupfree />
    </>
  );
}
