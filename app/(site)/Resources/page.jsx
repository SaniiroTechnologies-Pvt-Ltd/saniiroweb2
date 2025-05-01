import { fetchMetadata } from "@/utils/FetchMetadata";
import Resources from "@components/Resources/Resources";

// Metadata | Resources
export async function generateMetadata() {
  try {
    return await fetchMetadata('resources');
  } catch (error) {
    console.error(error);
  }
}

export default function ResourcesPage() {
  return (
    <main>
      <Resources />
    </main>
  );
}
