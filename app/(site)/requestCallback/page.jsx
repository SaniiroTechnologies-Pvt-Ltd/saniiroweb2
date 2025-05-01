import { fetchMetadata } from "@/utils/FetchMetadata";
import RequestCallback from "@components/utils/RequestCallback";

// Metadata | RequestCallback
export async function generateMetadata() {
  try {
    return await fetchMetadata('request-callback');
  } catch (error) {
    console.error(error);
  }
}

export default function RequestCallbackPage() {
  return (
    <main>
      <RequestCallback />
    </main>
  );
}