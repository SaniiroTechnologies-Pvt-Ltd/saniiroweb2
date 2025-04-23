
import BlogBanner from "@/components/Blog/parts/BlogBanner";
import BlogContentFeed from "@/components/Blog/parts/BlogContentFeed";
import NavOnScroll from "@/components/NavOnScroll";

export default function page() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <BlogBanner GrayBanner={true} />
      <BlogContentFeed />
    </main>
  );
}
