"use client";

import Banner from "@/components/Banner";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const headings = [
  "Saniiro simplifies multi-vendor marketplace operations with centralized product listing management, inventory tracking, and order processing. Seamlessly onboard vendors, manage commissions, and track performance.",
  "Our integrated CRM enhances customer interactions, enabling personalized promotions and improving retention. Billing, invoicing, and payments are automated, reducing errors and speeding up transactions.",
  "Gain valuable insights into sales trends and product performance with advanced analytics. Saniiro helps streamline operations and empowers you to grow your marketplace effectively.",
];

const categories = [
  {
    title: 'D2C (Direct-to-Consumer) Brand Owners',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "For D2C (Direct-to-Consumer) brand owners, managing online orders, customer relationships, inventory, and marketing efforts can become overwhelming. Saniiro’s software solution simplifies these processes and helps you grow your brand efficiently.",
        "Whether you're selling fashion, beauty products, electronics, or other goods directly to consumers, our platform offers a comprehensive system for managing everything from product listings to order fulfillment. You can track inventory in real-time, manage customer data, and automate the billing process.",
        "Key features like customer relationship management (CRM) help you track customer interactions, send personalized promotions, and improve customer retention. Our integrated system allows seamless order management and invoicing for a smooth, hassle-free experience.",
        "Saniiro also helps you stay on top of your finances with automated reporting and compliance, so you can focus on growing your brand without worrying about manual processes.",
        "SKU-wise stock with barcode & image support",
      ],
    bulletPoints: [
      'Online payment integration & automatic invoicing',
      'Customer order tracking with dispatch status',
      'Discount/coupon code handling in invoice',
      'Multi-warehouse inventory sync',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Multi-Vendor Marketplace Sellers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro simplifies multi-vendor marketplace operations with centralized product listing management, inventory tracking, and order processing. Seamlessly onboard vendors, manage commissions, and track performance.",
        "Our integrated CRM enhances customer interactions, enabling personalized promotions and improving retention. Billing, invoicing, and payments are automated, reducing errors and speeding up transactions.",
        "Gain valuable insights into sales trends and product performance with advanced analytics. Saniiro helps streamline operations and empowers you to grow your marketplace effectively.",
      ],
    bulletPoints: [
      'Auto purchase order generation on stock shortage',
      'Multi-brand sales report and settlement management',
      'Tax handling for multi-state transactions',
      'Shipment tracking and invoice linkage',
      'CRM with seller onboarding and compliance tracking',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Online Grocery/FMCG Retailers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro offers a comprehensive solution for managing online grocery and FMCG retail operations. Our software ensures smooth, fast, and accurate transactions from real-time inventory tracking to efficient order processing.",
        "With built-in customer relationship management (CRM) features, you can offer personalized promotions, track purchase history, and improve customer loyalty. Saniiro also supports multiple payment methods, making the checkout process seamless for your customers.",
        "Automated billing and invoicing ensure compliance with tax regulations, while advanced analytics give you insights into customer behavior, inventory trends, and sales performance. Manage multiple suppliers, track deliveries, and optimize stock levels effortlessly, all from one centralized platform.",
      ],
    bulletPoints: [
      'Expiry date and batch-wise inventory system',
      'Pack size and unit-wise billing (e.g., 1kg, 500 g, etc.)',
      'Auto-reorder and low stock alerts',
      'Scheduled delivery module with area-wise planning',
      'Mobile app and POS sync for daily sales',
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

export default function ECommerce() {

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
