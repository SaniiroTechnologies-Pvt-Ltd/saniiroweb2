import React, { useEffect, useState } from "react";
import Nav from "../../Navbar/Nav";
import BillingBanner from "./parts/BillingBanner";
import BillingFeatures from "./parts/BillingFeatures";
import FeaturesGlance from "./parts/FeaturesGlance";
import BillingSteps from "./parts/BillingSteps";
import BestFinchers from "./parts/BestFichers";
import CustomerFeedback from "./parts/CustomerFeedback";
import Clock from "../../Home/parts/Clock";
import ImprovedSales from "./parts/ImprovedSales";
import Footer from "../../utils/Footer";
import ProductSlider from "../../About/parts/ProductSlider";
import { Stack } from "@mui/material";
import BillingFolderOperationList from "./parts/BillingFolderOperationList";
import BillingFeaturesGlance2 from "./parts/BillingFeaturesGlance2";
const FeaturesBilling = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 570) {
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
      <BillingBanner />
      <BillingFeatures />
      {/* <FeaturesGlance /> */}
      <BillingFolderOperationList />
      <BillingFeaturesGlance2 />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <BillingSteps />
        <BestFinchers />
        <Stack>
          <ProductSlider />
        </Stack>
        <Clock />
        <ImprovedSales />
      </Stack>
      <Footer />
    </>
  );
};

export default FeaturesBilling;
