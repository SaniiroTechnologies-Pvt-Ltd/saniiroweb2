import React, { useEffect, useState } from "react";
import Nav from "@/components/Navbar/Nav";
import BillingBanner from "./parts/BillingBanner";
import BillingFeatures from "./parts/BillingFeatures";
import BillingSteps from "./parts/BillingSteps";
import BestFinchers from "./parts/BestFichers";
import Clock from "@/components/Home/parts/Clock";
import ImprovedSales from "./parts/ImprovedSales";
import Footer from "@/components/utils/Footer";
import ProductSlider from "@/components/About/parts/ProductSlider";
import { Stack } from "@mui/material";
import InventoryFolderOperationList from "./parts/InventoryFolderOperationList";
import InventoryFeaturesGlance2 from "./parts/InventoryFeaturesGlance2";

const FeaturesInventory = () => {
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
      <InventoryFolderOperationList />
      <InventoryFeaturesGlance2 />
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

export default FeaturesInventory;
