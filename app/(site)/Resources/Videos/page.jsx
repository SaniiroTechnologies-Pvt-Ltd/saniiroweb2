import NavOnScroll from "@/components/NavOnScroll";
import VideoSection from "@/components/Resources/Videos/VideoSection";
import VideoSection2 from "@/components/Resources/Videos/VideoSection2";
import VideoSection3 from "@/components/Resources/Videos/VideoSection3";
import Signupfree from "@/components/Solutions/Signupfree";
import { fetchMetadata } from "@/utils/FetchMetadata";
import { Stack } from "@mui/material";

// Metadata | Videos
export async function generateMetadata() {
  try {
    return await fetchMetadata('videos');
  } catch (error) {
    console.error(error);
  }
}

export default function VideosPage() {
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
