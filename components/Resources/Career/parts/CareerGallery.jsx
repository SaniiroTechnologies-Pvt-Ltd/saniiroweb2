import * as React from "react";
import Box from "@mui/material/Box";

import img1 from "./assets/image 156.png";
import img2 from "./assets/image 161.png";
import img3 from "./assets/image 162.png";
const CareerGallery = () => {
  return (
    <Box
      sx={{
        width: "785px",
        margin: "50px auto",
      }}
    >
      <GridContainer>
        <GridItem sx={{ gridColumn: "span 12", gridRow: "span 6" }}>
          <CustomImage src={img1} alt="Image 1" />
        </GridItem>
        <GridItem sx={{ gridColumn: "span 3", gridRow: "span 3" }}>
          <CustomImage src={img3} alt="Image 3" />
        </GridItem>
        <GridItem sx={{ gridColumn: "span 3", gridRow: "span 3" }}>
          <CustomImage src={img2} alt="Image 2" />
        </GridItem>
        <GridItem sx={{ gridColumn: "span 6", gridRow: "span 6" }}>
          <CustomImage src={img2} alt="Image 2" />
        </GridItem>
        <GridItem sx={{ gridColumn: "span 3", gridRow: "span 3" }}>
          <CustomImage src={img3} alt="Image 3" />
        </GridItem>
        <GridItem sx={{ gridColumn: "span 3", gridRow: "span 3" }}>
          <CustomImage src={img2} alt="Image 2" />
        </GridItem>
      </GridContainer>
    </Box>
  );
};

// Reusable Grid Container component
const GridContainer = ({ children }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(6, 1fr)",
      gap: 2,
    }}
  >
    {children}
  </Box>
);

// Reusable Grid Item component
const GridItem = ({ children, sx }) => (
  <Box sx={{ ...sx }}>{children}</Box>
);

// Reusable Image component
const CustomImage = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
);

export default CareerGallery;
