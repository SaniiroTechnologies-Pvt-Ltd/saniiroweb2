import Readytosign from "@/components/Contact/Readytosign";
import NavOnScroll from "@/components/NavOnScroll";
import JobDescription from "@/components/Resources/Career/parts/JobDescription";
import { Stack } from "@mui/material";

export default function page() {
  return (
    <main>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <NavOnScroll isAlwaysVisible={true} />
        <JobDescription />
      </Stack>
      <Readytosign />
    </main>
  );
}
