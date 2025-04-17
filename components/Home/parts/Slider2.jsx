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

const Slider2 = () => {
  const features = [
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

  // Carousel responsive breakpoints
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5, },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5, },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3, },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2, },
  };

  return (
    <Box
      sx={{
        mt:'24px',
        position: "relative", // For stacking carousel over LogosDesign
        width: "90%",
        overflow: "hidden", // Restrict overflowing content
        mx: 'auto'
      }}
    >
      {/* Background Image */}
      <Image
        src={LogosDesign}
        alt="Background Design"
        style={{
          width: "100%",
          height: "auto", // Maintain aspect ratio
        }}
      />

      {/* Carousel Overlay */}
      <Box
        sx={{
          position: "absolute", // Overlay the carousel on top of the image
          top: "50%", // Center carousel vertically within LogosDesign
          left: "2.5%", // Align carousel to take 95% of LogosDesign width
          transform: "translateY(-50%)", // Vertically center the carousel
          width: "95%", // Carousel takes 95% width of LogosDesign
          pointerEvents: "none", // Allow interaction with carousel without blocking clicks outside
        }}
      >
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          autoPlaySpeed={2000}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {features.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100px", sm: "120px", md: "150px", lg: "180px" }, // Consistent sizing
                height: { xs: "100px", sm: "120px", md: "150px", lg: "180px" },
                overflow: "hidden", // Prevent content overflow
                borderRadius: "8px", // Optional: Rounded corners
              }}
            >
              <Image
                src={item.src}
                alt={`Logo ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Maintain aspect ratio
                }}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );

  // return (
  //   <Box
  //     sx={{
  //       position: "relative", // Allow stacking of carousel and background image
  //       width: "80%", // Full width for parent container
  //       height: "auto", // Dynamically adjust height
  //       overflow: "hidden", // Prevent overflow
  //       mx: 'auto',
  //     }}
  //   >
  //     {/* Background Image */}
  //     <Image
  //       src={LogosDesign}
  //       alt="Header Design"
  //       style={{
  //         width: "100%",
  //         height: "auto",
  //       }}
  //     />

  //     {/* Overlay Carousel */}
  //     <Box
  //        sx={{
  //         position: "absolute", // Overlay carousel on top of the image
  //         top: "50%", // Center carousel vertically relative to parent
  //         left: "14px",
  //         transform: "translateY(-50%)", // Adjust vertical alignment
  //         width: "95%", // Full width for carousel
  //         height: "auto", // Allow height to adjust based on content
  //         pointerEvents: "none", // Allow interaction with carousel without blocking clicks outside
  //       }}
  //     >
  //       <Carousel
  //         responsive={responsive}
  //         autoPlay
  //         infinite
  //         autoPlaySpeed={2000}
  //         removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
  //         containerClass="carousel-container"
  //         itemClass="carousel-item"
  //       >
  //         {features.map((d, index) => (
  //           <Box
  //             key={index}
  //             sx={{
  //               display: "flex",
  //               justifyContent: "center",
  //               alignItems: "center",
  //               width: { xs: "80px", sm: "100px", md: "120px", lg: "150px" }, // Consistent image width
  //               height: { xs: "80px", sm: "100px", md: "120px", lg: "150px" }, // Consistent image height
  //               mx: "auto", // Center each carousel item
  //             }}
  //           >
  //             <Image
  //               src={d.src}
  //               alt={`Logo ${index + 1}`}
  //               style={{
  //                 width: "100%",
  //                 height: "100%",
  //                 objectFit: "contain", // Scale images proportionally to fit container
  //               }}
  //             />
  //           </Box>
  //         ))}
  //       </Carousel>
  //     </Box>
  //   </Box>
  // );
};

export default Slider2;
