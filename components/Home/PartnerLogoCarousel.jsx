"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "@/components/assets/logo1.png";
import logo2 from "@/components/assets/logo2.png";
import logo3 from "@/components/assets/logo3.png";
import logo4 from "@/components/assets/logo4.png";
import logo5 from "@/components/assets/logo5.png";
import logo6 from "@/components/assets/logo6.png";
import logo7 from "@/components/assets/logo7.png";
import logo8 from "@/components/assets/logo8.png";
import logo9 from "@/components/assets/logo9.png";
import LogosDesign from "@/components/assets/LogosDesign.png"; // Parent image for the header section
import { Box } from "@mui/material";
import Image from "next/image";

const PartnerLogoCarousel = () => {
  const logos = [
    { src: logo1 },
    { src: logo2 },
    { src: logo3 },
    { src: logo4 },
    { src: logo5 },
    { src: logo6 },
    { src: logo7 },
    { src: logo8 },
    { src: logo9 },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 600 }, items: 3 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 3 },
  };

  return (
    <Box
      sx={{
        mt: 6,
        position: "relative",
        width: "100%",
        maxWidth: "xxl",
        mx: "auto",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box sx={{ position: "relative", width: "80%", mx: 'auto' }}>
        <Image
          src={LogosDesign}
          alt="Background Design"
          style={{ width: "100%", height: "auto" }}
        />

        {/* Carousel Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: {xs:'100%', md: "50%"},
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            px: { xs: 2, sm: 3, md: 5 },
            pointerEvents: "auto",
          }}
        >
          <Carousel
            responsive={responsive}
            autoPlay
            infinite
            autoPlaySpeed={2500}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            containerClass="carousel-container"
            itemClass="carousel-item"
            arrows={true}
          >
            {logos.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: 40, sm: 50, md: 100, lg: 120 },
                  height: { xs: 40, sm: 50, md: 100, lg: 120 },
                  mx: "auto",
                  borderRadius: 2,
                  boxShadow: 0,
                  p: 0.5,
                }}
              >
                <Image
                  src={item.src}
                  alt={`Logo ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "scale-down",
                  }}
                />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerLogoCarousel;
