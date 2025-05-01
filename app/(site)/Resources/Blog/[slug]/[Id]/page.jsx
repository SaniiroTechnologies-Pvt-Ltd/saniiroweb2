
import BlogBanner from "@/components/Blog/parts/BlogBanner";
import BlogContentFeed from "@/components/Blog/parts/BlogContentFeed";
import NavOnScroll from "@/components/NavOnScroll";
import { fetchMetadata } from "@/utils/FetchMetadata";


// Metadata | Blogs / Blog By Slug
export async function generateMetadata() {
  try {
    return await fetchMetadata('blog-by-slug');
  } catch (error) {
    console.error(error);
  }
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
