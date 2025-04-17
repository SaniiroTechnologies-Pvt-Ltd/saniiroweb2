"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Grid, Stack, Typography } from "@mui/material";
import NavLight from "@/components/Navbar/NavLight";
import Image from "next/image";
import bannerImage from "../public/industry/banner.svg";

// Optional reusable typography block
const BannerText = ({ html, mt = "1rem" }) => (
 <Typography
  component="div"
  sx={{
   mt,
   fontFamily: "Work Sans",
   fontSize: "calc(0.8vw + 0.6rem)",
   fontWeight: 400,
   lineHeight: "1.5",
   color: "#B0B0B0",
   textAlign: "center",
   width: "90%",
   margin: "0 auto",
  }}
  dangerouslySetInnerHTML={{ __html: html }}
 />
);

const Banner = () => {
 const pathname = usePathname();

 const bannerDataMap = {

  "/Solutions/By-Industries/Retailers": {
   title: '<span class="text-stroke" style="fontSize: \"inherit\"">Retail Software</span> for Every Business Need',
   subText1: ' Scale your business with intuitive, cloud-based solutions built for modern retailers.',
  },
  "/Solutions/By-Industries/Manufacturing": {
   title: 'Every <span class="text-stroke" style="fontSize: \"inherit\"">Manufacturing</span> Need. One Smart Solution',
   subText1: ' Scale your business with intuitive, cloud-based solutions built for modern retailers.',
  },
  "/Solutions/By-Industries/Wholesale": {
   title: 'Every <span class="text-stroke" style="fontSize: \"inherit\"">Wholesale</span> Challenge. One Smart System',
   subText1: ' Scale your business with intuitive, cloud-based solutions built for modern retailers.',
  },
  "/Solutions/By-Industries/Pharmaceutical": {
   title: 'Manage Every <span class="text-stroke" style="fontSize: \"inherit\"">Pharmaceutical</span> Workflow with Ease',
   subText1: ' Scale your business with intuitive, cloud-based solutions built for modern retailers.',
  },
  "/Solutions/By-Industries/Gas-Industry": {
   title: 'Manage Every <span class="text-stroke" style="fontSize: \"inherit\"">Oil & Natural Gas</span> Resources Effectively',
   subText1: ' Scale your business with intuitive, cloud-based solutions built for modern retailers.',
  },
  "/Solutions/By-Industries/Service-Providers": {
   title: 'Optimizing Every <span class="text-stroke" style="fontSize: \"inherit\"">Service Provider</span> Operation Efficiently',
   subText1: ' Scale your business with intuitive, cloud-based solutions built for modern retailers.',
  },
  "/Solutions/By-Industries/Real-Estate": {
   title: 'Powerful <span class="text-stroke" style="fontSize: \"inherit\"">Real Estate</span> Tools, Zero Hassle',
   subText1: 'Boost your workflow with tools everyone can use.',
  },
  "/Solutions/By-Industries/Plywood-Marble": {
   title: 'Fast. Simple Solution for <span class="text-stroke" style="fontSize: \"inherit\"">Plywood & Marble Industry</span>',
   subText1: ' Scale your business with intuitive, cloud-based solutions built for modern retailers.',
  },
  "/Solutions/By-Industries/Renewable-Energy": {
   title: 'Powering <span class="text-stroke" style="fontSize: \"inherit\"">Clean Energy</span> with Smarter Tools',
   subText1: 'Control assets, performance and reports in one place.',
  },
  "/Solutions/By-Industries/Logistics-Supply-Chain": {
   title: 'Less Chaos. More Control. Better <span class="text-stroke" style="fontSize: \"inherit\"">Logistics & Supply Chains</span>',
   subText1: 'Manages routes, warehouses, and operations effortlessly today.',
  },
  "/Solutions/By-Industries/E-commerce": {
   title: 'Our <span class="text-stroke" style="fontSize: \"inherit\"">E-Commerce Store</span>. Fully Under Control.',
   subText1: 'Track, sell, and grow—all from one platform.',
  },
  "/Solutions/By-Industries/Khadi-Gram-Udyog": {
   title: 'Modern Tool for <span class="text-stroke" style="fontSize: \"inherit\"">Traditional Khadi</span> Businessses',
   subText1: 'Track raw materials, orders and inventory simply.',
  },
 };

 // Auto-match based on path
 const matchedKey = Object.keys(bannerDataMap).find((key) =>
  pathname.includes(key)
 );
 const banner = matchedKey ? bannerDataMap[matchedKey] : null;

 if (!banner) return null;

 return (

  <React.Fragment>

   <Stack position="relative" bgcolor="#052973" className="textured-background">
    <NavLight />

    <Grid
     container
     alignItems="center"
     justifyContent="space-between"
     maxWidth="1536px"
     margin="0 auto"
     padding={{ xs: 2, md: 6 }}
     spacing={0}
    >
     {/* LEFT SIDE TEXT */}
     <Grid item xs={12} md={6}>
      <Stack gap={2} color="white">
       <Typography
        component="h1"
        sx={{
         fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
         fontWeight: 900,
         lineHeight: 1.1,
         textTransform: "uppercase",
         fontFamily: "monospace",
        }}
        dangerouslySetInnerHTML={{ __html: banner.title }}
       ></Typography>

       <Typography
        variant="body1"
        sx={{
         fontSize: { xs: "1rem", md: "1.2rem" },
         color: "#D0D0D0",
         maxWidth: "90%",
        }}
        dangerouslySetInnerHTML={{ __html: banner.subText1 }}
       ></Typography>
      </Stack>
     </Grid>

     {/* RIGHT SIDE IMAGE */}
     <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
      <Image
       src={bannerImage} // Change to your actual image path
       alt="Retailer Banner"
       width={600}
       height={600}
       style={{
        width: "100%",
        height: "auto",
        maxWidth: "500px",
        objectFit: "contain",
       }}
       priority
      />
     </Grid>
    </Grid>
   </Stack>
  </React.Fragment>

 );
};

export default Banner;
