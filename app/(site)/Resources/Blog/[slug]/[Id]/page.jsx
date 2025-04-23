
import BlogBanner from "@/components/Blog/parts/BlogBanner";
import BlogContentFeed from "@/components/Blog/parts/BlogContentFeed";
import NavOnScroll from "@/components/NavOnScroll";


export async function generateMetadata() {
  return {
    title: "Homeddd Page",
    description: "This is a dynamically generated description for the Home Page",
    viewport: "width=device-width, initial-scale=1.0",
    other: {
      "keywords": "home page, SEO, Saniiro",
    },
  };
}

export default function page() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <BlogBanner GrayBanner={true} />
      <BlogContentFeed />
    </main>
  );
}
