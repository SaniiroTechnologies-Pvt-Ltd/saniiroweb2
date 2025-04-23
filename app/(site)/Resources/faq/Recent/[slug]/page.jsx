"use client";

import FaqBanner from "@/components/Faq/parts/FaqBanner";
import FeqBodytop from "@/components/Faq/parts/FeqBodytop";
import NavOnScroll from "@/components/NavOnScroll";
import FaqRecentActivities from "@components/Faq/FaqRecentActivities";
import Resources from "@components/Faq/FaqRecentActivities";
import { Stack } from "@mui/material";

export default function Index() {
  return (
    <main>
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <NavOnScroll isAlwaysVisible={true} />
        <FaqBanner />
        <FeqBodytop />
        <FaqRecentActivities faqData={faqData} />{" "}
        {/* Pass faqData to the content component */}
      </Stack>
    </main>
  );
}
