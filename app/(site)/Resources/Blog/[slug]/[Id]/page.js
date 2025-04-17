

import Resources from "@components/Blog/BlogContent";


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

export default function Index() {
  return (
    <main>
      <Resources />
    </main>
  );
}
