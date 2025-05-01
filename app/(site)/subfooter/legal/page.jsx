import { fetchMetadata } from "@/utils/FetchMetadata";
import Resources from "@components/SubFooter/Legal";

// Metadata | Legal
export async function generateMetadata() {
  try {
    return await fetchMetadata('legal');
  } catch (error) {
    console.error(error);
  }
}

export default function LegalPage() {
  return (
    <main>
      <Resources />
    </main>
  );
}
