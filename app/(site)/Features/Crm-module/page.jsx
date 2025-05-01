import BillingBanner from "@/components/Features/BillingBanner";
import CrmFeaturesGlance2 from "@/components/Features/Crm/CrmFeaturesGlance2";
import CrmFolderOperationList from "@/components/Features/Crm/CrmFolderOperationList";
import NavOnScroll from "@/components/NavOnScroll";
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Features / CRM Module
export async function generateMetadata() {
  try {
    return await fetchMetadata('crm-module');
  } catch (error) {
    console.error(error);
  }
}

export default function CrmModulePage() {
  return (
    <>
      <NavOnScroll threshold={570} />
      <BillingBanner />
      <CrmFolderOperationList />
      <CrmFeaturesGlance2 />
    </>

  );
}