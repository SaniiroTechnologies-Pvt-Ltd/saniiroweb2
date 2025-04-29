
import BlogBanner from "@/components/Blog/parts/BlogBanner";
import BlogContentFeed from "@/components/Blog/parts/BlogContentFeed";
import NavOnScroll from "@/components/NavOnScroll";


export async function generateMetadata({ params }) {
  const { slug, Id } = params; // Access slug and Id from params

  return {
    title: `${slug}`,
    description: "This is a dynamically generated description for the Home Page",
    viewport: "width=device-width, initial-scale=1.0",
    other: {
      "keywords": "home page, SEO, Saniiro",
    },
  };
}

const BlogBySlugPage = () => {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <BlogBanner GrayBanner={true} />
      <BlogContentFeed />
    </main>
  );
}

export default BlogBySlugPage;
