import BlogBanner from "@/components/Blog/parts/BlogBanner";
import BlogFeed from "@/components/Blog/parts/BlogFeed";
import NavOnScroll from "@/components/NavOnScroll";
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Blogs
export async function generateMetadata() {
  try {
    return await fetchMetadata('blogs');
  } catch (error) {
    console.error(error);
  }
}

export default function BlogPage() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <BlogBanner GrayBanner={false} />
      <BlogFeed />
    </main>
  );
}
