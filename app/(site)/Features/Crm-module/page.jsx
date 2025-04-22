import BillingBanner from "@/components/Features/BillingBanner";
import CrmFeaturesGlance2 from "@/components/Features/Crm/CrmFeaturesGlance2";
import CrmFolderOperationList from "@/components/Features/Crm/CrmFolderOperationList";

export default function Index() {
  return (
    <>
      <BillingBanner />
      <CrmFolderOperationList />
      <CrmFeaturesGlance2 />
    </>

  );
}
