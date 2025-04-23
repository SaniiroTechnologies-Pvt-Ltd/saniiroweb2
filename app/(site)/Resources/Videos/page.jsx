import NavOnScroll from "@/components/NavOnScroll";
import VideoSection from "@/components/Resources/Videos/VideoSection";
import VideoSection2 from "@/components/Resources/Videos/VideoSection2";
import VideoSection3 from "@/components/Resources/Videos/VideoSection3";
import Signupfree from "@/components/Solutions/Signupfree";
import { Stack } from "@mui/material";

export default function Index() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <VideoSection />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <VideoSection2 />
        <VideoSection3 />
      </Stack>
      <Signupfree />
    </main>
  );
}
