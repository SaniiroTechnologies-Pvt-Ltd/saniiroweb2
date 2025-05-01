import { fetchMetadata } from "@/utils/FetchMetadata";
import Resources from "@components/SubFooter/CancalationRefundPolicy";

// Metadata | Legal
export async function generateMetadata() {
  try {
    return await fetchMetadata('cancellation-policy');
  } catch (error) {
    console.error(error);
  }
}

export default function Index() {
  return (
    <main>
      <Resources />
    </main>
  );
}
