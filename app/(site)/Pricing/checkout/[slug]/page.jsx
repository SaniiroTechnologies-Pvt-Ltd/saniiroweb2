"use client";

import Readytosign from '@/components/Contact/Readytosign';
import ContactFaq from '@/components/Home/ContactFaq';
import NavOnScroll from '@/components/NavOnScroll';
// import PricingBanner from '@/components/Pricing/PricingBanner'; 
import JoinBusinesses from '@/components/undo/JoinBusinesses';
import PackageDetails from '@/components/undo/PackageDetails';
import { Stack } from '@mui/material';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';


function Page() {
  const price = sessionStorage.getItem("price") || 0;
  const planName = sessionStorage.getItem("planName");

  const param = useParams();
  const slug = param.slug;

  return (
    <Fragment>
      <NavOnScroll isAlwaysVisible={true} />
      {/* <PricingBanner /> */}
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <PackageDetails slug={slug} price={price} Name={planName} />
        <JoinBusinesses />
        <ContactFaq />
      </Stack>
      <Readytosign />
    </Fragment>
  );
}

export default Page;
