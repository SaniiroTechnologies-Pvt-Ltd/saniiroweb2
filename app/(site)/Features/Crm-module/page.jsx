import BillingBanner from "@/components/Features/BillingBanner";
import CrmFeaturesGlance2 from "@/components/Features/Crm/CrmFeaturesGlance2";
import CrmFolderOperationList from "@/components/Features/Crm/CrmFolderOperationList";
import NavOnScroll from "@/components/NavOnScroll";

export default function Index() {
  return (
    <>
      <NavOnScroll threshold={570} />
      <BillingBanner />
      <CrmFolderOperationList />
      <CrmFeaturesGlance2 />
    </>

  );
}
