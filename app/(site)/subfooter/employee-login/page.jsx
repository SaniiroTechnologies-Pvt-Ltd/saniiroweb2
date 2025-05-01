import { fetchMetadata } from "@/utils/FetchMetadata";
import Resources from "@components/SubFooter/EmployeeLogin";

// Metadata | Legal
export async function generateMetadata() {
  try {
    return await fetchMetadata('employee-login');
  } catch (error) {
    console.error(error);
  }
}


export default function EmployeeLoginPage() {
  return (
    <main>
      <Resources />
    </main>
  );
}
