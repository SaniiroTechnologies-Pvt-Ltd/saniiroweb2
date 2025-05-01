import { fetchMetadata } from "@/utils/FetchMetadata";
import Resources from "@components/SubFooter/PrivacyPolicy";

// Metadata | Privacy Policy
export async function generateMetadata() {
  try {
    return await fetchMetadata('privacy');
  } catch (error) {
    console.error(error);
  }
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Resources />
    </main>
  );
}
