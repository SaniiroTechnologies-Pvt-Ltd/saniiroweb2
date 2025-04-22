"use client";

import Banner from "@/components/Banner";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const headings = [
  "Saniiro offers a comprehensive solution for managing online grocery and FMCG retail operations. Our software ensures smooth, fast, and accurate transactions from real-time inventory tracking to efficient order processing.",
  "With built-in customer relationship management (CRM) features, you can offer personalized promotions, track purchase history, and improve customer loyalty. Saniiro also supports multiple payment methods, making the checkout process seamless for your customers.",
  "Automated billing and invoicing ensure compliance with tax regulations, while advanced analytics give you insights into customer behavior, inventory trends, and sales performance. Manage multiple suppliers, track deliveries, and optimize stock levels effortlessly, all from one centralized platform.",
];

const categories = [
  {
    title: 'Plywood Sheet Dealers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro offers a robust solution designed to streamline the operations of plywood sheet dealers. From inventory management to order processing, our software helps you stay organized and efficient, ensuring that your business runs smoothly at all times.",
        "With real-time stock tracking, you can easily monitor your inventory levels, receive low-stock alerts, and avoid stockouts. Manage different grades and sizes of plywood sheets with ease, ensuring accurate product categorization and quick retrieval.",
        "The software also simplifies billing and invoicing, with automatic GST-compliant invoices and seamless payment processing. With detailed sales reports and customer insights, you can make data-driven decisions to boost sales and improve customer satisfaction.",
      ],
    bulletPoints: [
      'Real-time inventory of various sizes and types (MR, BWR, Marine)',
      'Rate management based on thickness & brand',
      'Cut-size tracking with leftover wastage stock',
      'GST billing with transport, loading/unloading charges',
      'Bulk GST billing for B2B sales',
      'Payment terms, outstanding ledger, and credit control',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Laminates & Veneers Sellers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro provides an efficient software solution tailored to meet the specific needs of laminates and veneers sellers. Whether you are dealing with various sizes, designs, or finishes, our software helps manage your products seamlessly.",
        "With real-time inventory tracking, you can easily monitor stock levels, categorize products by style and size, and track their movement. The software ensures you stay updated with low-stock alerts, making sure you never run out of popular items.",
        "The billing system is fast and accurate, supporting easy invoice generation with GST compliance and seamless payment processing. Additionally, detailed reports on sales, customers, and stock performance give you the insights needed to optimize your business.",
      ],
    bulletPoints: [
      'Product catalog with texture images & color-wise categorization',
      'Brand-wise rate list and alternate suggestions',
      'Inventory tracking of high-value designer sheets',
      'Shipment tracking and invoice linkage',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Interior Contractor/Modular Furniture Makers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro offers a comprehensive solution designed for interior contractors and modular furniture makers. The software helps streamline operations, from managing client projects to tracking raw materials and finished products.",
        "With smart inventory management, you can easily track materials, manage stock levels, and ensure timely procurement. Whether you're working on custom designs or bulk production, Saniiro ensures you have complete control over your inventory.",
        "The billing system is integrated with accurate pricing, tax compliance, and invoicing, allowing you to generate professional quotes, invoices, and payments effortlessly. Additionally, customer relationship management (CRM) tools help track client preferences and project history, ensuring personalized service and higher customer satisfaction.",
        "Saniiro is designed to enhance productivity and efficiency, making your modular furniture and interior design business more organized and profitable.",
      ],
    bulletPoints: [
      'Project-wise material consumption tracking',
      'Production control',
      'BOM (Bill of Material) setup for modular pieces',
      'Client quotation to billing flow',
      'Material wastage monitoring for costing',
    ],
    image: '/industry/retails/office.png',
  },
];

// Container styles with centered alignment and padding
const containerStyles = {
  maxWidth: '1080px',
  mx: 'auto',
  mt: 10,
  px: { xs: 2, md: 4 }, // Padding for responsive spacing
};

const titleFontSize = {
  xs: '1.25rem', // Slightly smaller for extra-small screens
  sm: '1.5rem',  // Increased to match small screen readability
  md: '2rem',    // Slight reduction for medium screens for consistency
  lg: '2.5rem',  // Retained for large screens
};

export default function PlywoodMarble() {
  
  return (
    <React.Fragment>
      <Banner />
      <Box sx={{ ...containerStyles }}>
        {headings.map((heading, index) => (
          <Typography
            key={index}
            variant="h4"
            component={"h4"}
            sx={{
              fontFamily: "Work Sans",
              fontWeight: 400,
              textAlign: "center",
              fontSize: "1rem",
              opacity: 0.8,
              mb: 2,
            }}
          >
            {heading}
          </Typography>
        ))}

        {categories.map((cat, index) => {
          // Alternate image and text based on index (even: image left, odd: image right)
          const isImageLeft = index % 2 === 0;
          return (
            <Box key={index} sx={{ my: 5, backgroundColor: "#FFFFFF", borderRadius: '0.50rem' }}>
              <Grid
                container
                alignItems="center"
                direction={{ xs: 'column', md: 'row' }}
              >
                {isImageLeft ? (
                  <>
                    {/* Image Column */}
                    <Grid item xs={12} md={4} px={'1rem'}>
                      <Box
                        sx={{
                          boxSizing: "border-box",
                          mx: "auto",
                          width: "100%", // Full width of the grid container
                          textAlign: "center", // Centers the image horizontally
                        }}
                      >
                        <Image
                          src={cat.image}        // Replace with your image source
                          alt={cat.title}
                          width="500"       // Use full width dynamically
                          height="500"            // Accessible alt text
                          style={{
                            width: "100%",       // Use full width dynamically
                            height: "auto",      // Adjust height automatically to maintain aspect ratio
                            maxWidth: "400px",   // Restrict maximum width for larger screens
                            maxHeight: "300px",  // Restrict maximum height for larger screens
                          }}
                        />
                      </Box>
                    </Grid>
                    {/* Text Column */}
                    <Grid item xs={12} md={8} px={'1rem'}>
                      <Typography component={'h4'} variant="h4" fontFamily={"Work Sans"} sx={{
                        fontSize: titleFontSize,
                        fontWeight: 700,
                        color: '#F15B25',
                        mb: 1
                      }}
                      >
                        {cat.title}
                      </Typography>
                      <Typography component={'div'} variant="subtitle1" fontFamily={"Work Sans"} sx={{
                        fontFamily: "Work Sans",
                        fontWeight: 400,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                        opacity: "80%",
                        mb: 2,
                      }}>
                        {cat.subtitle}
                      </Typography>
                      {cat.descriptions.map((description, index) => (
                        <Typography key={index} variant="body1" component="div" fontFamily={"Work Sans"} sx={{
                          fontFamily: "Work Sans",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "21px",
                          letterSpacing: "0em",
                          textAlign: "left",
                          opacity: "80%",
                          mb: 2
                        }}>
                          {description}
                        </Typography>

                      ))}
                      <List disablePadding sx={{ my: "0.5rem", pl: 2 }}>
                        {cat.bulletPoints.map((point, idx) => (
                          <ListItem
                            key={idx}
                            disableGutters
                            sx={{
                              py: 0.25, // Reduce vertical padding between items
                              fontFamily: "Work Sans",
                              fontWeight: 300,
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 24 }}> {/* Smaller icon */}
                              <FiberManualRecordIcon fontSize="smaller" sx={{ color: "#F15B25" }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={point}
                              primaryTypographyProps={{
                                fontSize: "12px", // Small font size for text
                                fontFamily: "Work Sans",
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>

                    </Grid>
                  </>
                ) : (
                  <>
                    {/* Text Column */}
                    <Grid item xs={12} md={8} px={'1rem'}>
                      <Typography component={'h4'} variant="h4" fontFamily={"Work Sans"} sx={{
                        fontSize: titleFontSize,
                        fontWeight: 700,
                        color: '#F15B25',
                        mb: 1
                      }}
                      >
                        {cat.title}
                      </Typography>
                      <Typography component={'div'} variant="subtitle1" fontFamily={"Work Sans"} sx={{
                        fontFamily: "Work Sans",
                        fontWeight: 400,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                        textAlign: "left",
                        opacity: "80%",
                        mb: 2,
                      }}>
                        {cat.subtitle}
                      </Typography>
                      {cat.descriptions.map((description, index) => (
                        <Typography key={index} variant="body1" component={"div"} fontFamily={"Work Sans"} sx={{
                          fontFamily: "Work Sans",
                          fontSize: "14px",
                          fontWeight: 400,
                          lineHeight: "21px",
                          letterSpacing: "0em",
                          textAlign: "left",
                          opacity: "80%",
                          mb: 2
                        }}>
                          {description}
                        </Typography>

                      ))}
                      <List disablePadding sx={{ my: "0.5rem", pl: 2 }}>
                        {cat.bulletPoints.map((point, idx) => (
                          <ListItem
                            key={idx}
                            disableGutters
                            sx={{
                              py: 0.25, // Reduce vertical padding between items
                              fontFamily: "Work Sans",
                              fontWeight: 300,
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 24 }}> {/* Smaller icon */}
                              <FiberManualRecordIcon fontSize="smaller" sx={{ color: "#F15B25" }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={point}
                              primaryTypographyProps={{
                                fontSize: "12px", // Small font size for text
                                fontFamily: "Work Sans",
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>

                    </Grid>
                    {/* Image Column */}
                    <Grid item xs={12} md={4}>
                      <Box
                        sx={{
                          boxSizing: "border-box",
                          mx: "auto",
                          width: "100%", // Full width of the grid container
                          textAlign: "center", // Centers the image horizontally
                        }}
                      >
                        <Image
                          src={cat.image}        // Replace with your image source
                          alt={cat.title}
                          width="500"       // Use full width dynamically
                          height="500"            // Accessible alt text
                          style={{
                            width: "100%",       // Use full width dynamically
                            height: "auto",      // Adjust height automatically to maintain aspect ratio
                            maxWidth: "400px",   // Restrict maximum width for larger screens
                            maxHeight: "300px",  // Restrict maximum height for larger screens
                          }}
                        />
                      </Box>
                    </Grid>
                  </>
                )}
              </Grid>
            </Box>
          );
        })}

      </Box>
    </React.Fragment>
  );
}

