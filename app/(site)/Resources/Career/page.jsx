"use client";

import Readytosign from "@/components/Contact/Readytosign";
import NavOnScroll from "@/components/NavOnScroll";
import CareerDescription from "@/components/Resources/Career/CareerDescription"; 

export default function Index() {
  return (
    <main>
      <NavOnScroll isAlwaysVisible={true} />
      <CareerDescription />
      <Readytosign />
    </main>
  );
}
