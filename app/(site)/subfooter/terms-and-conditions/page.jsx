import { fetchMetadata } from "@/utils/FetchMetadata";
import Resources from "@components/SubFooter/TnC";

// Metadata | Terms And Conditions
export async function generateMetadata() {
  try {
    return await fetchMetadata('terms');
  } catch (error) {
    console.error(error);
  }
}

export default function TermAndConditionPage() {
  return (
    <main>
      <Resources />
    </main>
  );
}
