"use client";

import Readytosign from '@/components/Contact/parts/Readytosign';
import ContactFaq from '@/components/Home/parts/ContactFaq';
import PRicingBAnner from '@/components/Pricing/PRicingBAnner';
import JoinBusinesses from '@/components/undo/JoinBusinesses';
import PackageDetails from '@/components/undo/PackageDetails';
import Footer from '@/components/utils/Footer';
import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import NavLight from '@/components/Navbar/NavLight';
import Nav from '@/components/Navbar/Nav';

function Page() {
  const price = sessionStorage.getItem("price") || 0;
  const planName = sessionStorage.getItem("planName");

  const param = useParams();
  const slug = param.slug;

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
          {/* {showNav && <Nav />} */}
          <Nav />

      {/* <PRicingBAnner /> */}
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <PackageDetails slug={slug} price={price} Name={planName} />
        <JoinBusinesses />
        <ContactFaq />
      </Stack>
      <Readytosign />
      <Footer />
    </>
  );
}

export default Page;
