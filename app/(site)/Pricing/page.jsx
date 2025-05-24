import Readytosign from "@/components/Contact/Readytosign";
import ContactFaq from "@/components/Home/ContactFaq";
import NavOnScroll from "@/components/NavOnScroll";
import JoinBusinesses from "@/app/(site)/Pricing/_components/JoinBusinesses";
import PricingBanner from "@/app/(site)/Pricing/_components/PricingBanner";
import PricingOptions from "@/app/(site)/Pricing/_components/PricingOptions";
import apiEndpoints from "@/utils/apiEndpoints";
import { fetchMetadata } from "@/utils/FetchMetadata";
import Pricing from "./_components/Dev/Pricing";
import PricingFAQ from "./_components/Dev/PricingFAQ";

// Metadata | Pricing
export async function generateMetadata() {
  try {
    return await fetchMetadata('pricing');
  } catch (error) {
    console.error(error);
  }
}

// Dynamic fetch from API using slug
async function fetchSubscriptionPlans(slug) {
  try {
    const res = await fetch(`${apiEndpoints.priceComparison}`, {
      next: { revalidate: 60 },  // ISR + cache
      // cache: 'no-store', // disable ISR if data updates frequently
    });

    if (!res.ok) {
      // Log the response status for debugging
      console.error(`Error fetching subscription plans: ${res.status} ${res.statusText}`);
      throw new Error("Error fetching subscription plans!");
    }

    return res.json();
  } catch (error) {
    // Handle the error gracefully
    console.error("An error occurred while fetching subscription plans:", error);
    // Return a default value or an empty array
    return []; // or return null; depending on your use case
  }
}


export default async function PricingPage() {
  const subscriptionPlansResponse = await fetchSubscriptionPlans();

  // Check if the response has the expected structure
  const subscriptionPlans = subscriptionPlansResponse.Data || []; // Default to an empty array if not found

  // console.log("Subscription Plans: ", subscriptionPlans);

  return (
    <>
      <NavOnScroll threshold={450} isAlwaysVisible={false} />
      <PricingBanner />
      {/*  {subscriptionPlans &&
        <PricingOptions subscriptionPlans={subscriptionPlans} />}*/}
      <Pricing subscriptionPlans={subscriptionPlans} />
      <JoinBusinesses />
      {/* <ContactFaq /> */}
      <PricingFAQ />
      <Readytosign /> 

    </>
  );
}
