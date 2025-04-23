"use client";

import BlogBanner from "@/components/Blog/parts/BlogBanner";
import BlogFeed from "@/components/Blog/parts/BlogFeed";
import NavOnScroll from "@/components/NavOnScroll";

export default function page() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <BlogBanner GrayBanner={false} />
      <BlogFeed />
    </main>
  );
}
