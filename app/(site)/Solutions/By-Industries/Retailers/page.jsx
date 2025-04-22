"use client";

import Banner from "@/components/Banner";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Image from "next/image";

const headings = [
  "The retail industry is fast-paced and complex, covering everything from clothing and electronics to groceries and cosmetics. Managing a retail store involves handling inventory, billing, taxes, customers, and employees—tasks that can be time-consuming and error-prone when done manually. Saniiro, the best retail software, simplifies retail operations by automating all core functions. It offers real-time inventory tracking, fast billing, GST-compliant accounting, and built-in customer management. Whether you run a single store or a chain, Saniiro provides centralized control, reduces paperwork, and improves accuracy.",
];
const categories = [
  {
    title: 'Garment Stores',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:[
      "Searching for the best retail shop software for garment stores? Saniiro is your all-in-one solution for efficient inventory management, streamlined billing, and simplified GST filing. Whether you're selling apparel, gym gear, or sportswear, the software handles all size, color, and variant combinations with precision, making inventory management in garment retail easier than ever.",
    ],
    bulletPoints: [
      'Size & Color Variant Management',
      'Fast & Accurate Barcode Billing',
      'Built-In Accounting & GST Compliance',
      'Multi-Store & Role-Based Access',
      'Same Barcode Allowed & Barcode Printing',
      'MExpiry & Batch-Wise Tracking',
      'Inventory & Ledger Import',
      'Multi-Unit System',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Footwear Shops',
    subtitle: 'Comprehensive Retail Management',
    descriptions:
      ["Searching for the best retail shop software for footwear stores? Saniiro is your complete solution for accurate inventory management, fast billing, and integrated GST-ready accounting. Whether you’re selling casual shoes, formal footwear, sports shoes, or branded collections, our footwear shop billing accounting software helps you manage all sizes, styles, and color variants with ease, making inventory control smarter and sales operations faster.",],
    bulletPoints: [
      'Size & Style Variant Management',
      'Fast & Barcode-Based Billing',
      'Integrated Accounting & GST Filing',
      'Multi-Branch & Staff Access Controls',
      'Customer Loyalty & Repeat Sales Tools',
      'Bulk Item Upload & Barcode Printing',
      'Low Stock Alerts & Seasonal Inventory Control',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Optical Store',
    subtitle: 'Professional Retail Solutions',
    descriptions:
      ["Running an optical store involves managing frame and lens inventories, handling prescriptions, maintaining eye test histories, and delivering personalized customer service. Saniiro’s retail solution is designed to make your optical business more efficient, professional, and profitable. Whether you're selling spectacles, sunglasses, contact lenses, or optical accessories, Saniiro provides a complete system for smooth operations across billing, stock control, accounting, and CRM.",],
    bulletPoints: [
      'Inventory & Lens Type Tracking',
      'Fast Barcode Billing with Prescription Notes',
      'Frame, Lens & Brand-Wise Stock Management',
      'Customer History, Eye Test Records & CRM Tools',
      'Seamless Financial Reporting & Accounting Management',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Electronics & Mobile Shops',
    subtitle: 'Smart Inventory for High-Value Items',
    descriptions:
      ["Managing high-value products like mobiles, laptops, and accessories just got easier! Saniiro helps electronics retailers maintain accurate inventory, track IMEI numbers, and deliver better customer service. From warranty tracking to EMI billing, it’s your all-in-one retail solution. Plus, with our CRM feature, you can stay connected with customers post-sale and improve brand loyalty.",],
    bulletPoints: [
      'IMEI & Serial Number Tracking',
      'EMI Billing & Warranty Management',
      'Real-Time Inventory Updates',
      'GST-Ready Invoicing & Auto Ledger Posting',
      'Multi-Counter & Branch Support',
      'Service Request & CRM Integration',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Supermarkets / Mini-Marts',
    subtitle: 'Effortless Retail Operations',
    descriptions:
      ["Running a fast-paced supermarket or convenience store? Saniiro is built to simplify operations with quick billing, smart inventory control, and integrated finance tools. Whether you deal in groceries, dairy, or daily needs, our billing and accounting management software offers everything you need to reduce errors and increase speed.",],
    bulletPoints: [
      'Fast Barcode Billing & Weighing Scale Support',
      'Shelf-Wise Inventory with Expiry Alerts',
      'Digital Payment & Multi-Mode Support',
      'Hold/Resume Billing & Combo Offers',
      'Integrated Reports & GST Filing',
      'Customer Loyalty & SMS Promotions',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Home Decor Stores',
    subtitle: '"Elegant Solutions for Stylish Living',
    descriptions:
      ["Managing a home decor store involves handling large product catalogs, varied pricing models, and customer customizations. Saniiro helps you streamline your operations with modern billing, inventory, and customer engagement tools, whether you deal in furniture, lighting, wall art, furnishings, or decorative accessories.",],
    bulletPoints: [
      'Style & Category-Wise Inventory Tracking',
      'Quick Invoicing with Custom Order Notes',
      'Multi-Level Stock Control',
      'Customer Preferences & Loyalty Program',
      'Integrated Sales & Financial Reports',
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

export default function Retailer() {
  
  return (
    <React.Fragment>
      <Banner />
      <Box sx={{ ...containerStyles }}>
        {headings.map((heading, index) => (
          <Typography
            key={index}
            variant="h4"
            component="h1"
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
                      <Typography variant="h4"  component="h1" fontFamily={"Work Sans"} sx={{
                        fontSize: titleFontSize,
                        fontWeight: 700,
                        color: '#F15B25',
                        mb: 1
                      }}
                      >
                        {cat.title}
                      </Typography>
                      <Typography variant="subtitle1" component="div" fontFamily={"Work Sans"} sx={{
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
                      <Typography variant="h4" component="h1" fontFamily={"Work Sans"} sx={{
                        fontSize: titleFontSize,
                        fontWeight: 700,
                        color: '#F15B25',
                        mb: 1
                      }}
                      >
                        {cat.title}
                      </Typography>
                      <Typography variant="subtitle1" component="div" fontFamily={"Work Sans"} sx={{
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
