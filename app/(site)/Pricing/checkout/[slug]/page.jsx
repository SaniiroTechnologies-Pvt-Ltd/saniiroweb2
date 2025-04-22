"use client";

import Readytosign from '@/components/Contact/Readytosign';
import ContactFaq from '@/components/Home/ContactFaq';
import PRicingBAnner from '@/components/Pricing/PRicingBAnner';
import JoinBusinesses from '@/components/undo/JoinBusinesses';
import PackageDetails from '@/components/undo/PackageDetails';
import { Stack } from '@mui/material';
import { useParams } from 'next/navigation';
import React from 'react';

function Page() {
  const price = sessionStorage.getItem("price") || 0;
  const planName = sessionStorage.getItem("planName");

  const param = useParams();
  const slug = param.slug;

  return (
    <React.Fragment>
      {/* <PRicingBAnner /> */}
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <PackageDetails slug={slug} price={price} Name={planName} />
        <JoinBusinesses />
        <ContactFaq />
      </Stack>
      <Readytosign />
    </React.Fragment>
  );
}

export default Page;
