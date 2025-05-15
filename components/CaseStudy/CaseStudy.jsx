import React, { useEffect, useState } from "react";
import CaseStudyBanner from "./CaseStudyBanner";
import CompanyBanner from "./TestimonialSection";
import ReviewSection from "./ReviewSection";
import Footer from ".././utils/Footer";
import { Stack } from "@mui/material";
import TestimonialsCardsSection from "./CaseStudyCardsSection";
import Nav from "../Navbar/Nav";
const CaseStudy = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
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
          {showNav && <Nav />}

      <CaseStudyBanner />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <CompanyBanner />
      </Stack>
      <TestimonialsCardsSection />
      <Footer />
    </>
  );
};

export default CaseStudy;
