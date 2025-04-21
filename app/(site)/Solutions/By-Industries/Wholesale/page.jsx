// export default function Wholesale() {
"use client";

import Banner from "@/components/Banner";
import Nav from "@/components/Navbar/Nav";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const headings = [
  "Best Wholesale & Distribution Software built to serve the complex needs of FMCG distributors, pharmaceutical distributors, electrical & electronics wholesalers, hardware suppliers, grocery wholesalers, mobile accessories distributors, and the plywood industry. Empower your business with advanced features like multi-location inventory management, batch-wise tracking, smart order processing, and real-time stock visibility.",
  "Automate purchase cycles, streamline sales operations, and optimize delivery routes for maximum efficiency. Ensure compliance in pharmaceutical distribution, implement barcode and RFID scanning, and manage customer-specific pricing, credit limits, and discounts with ease.",
  "With powerful analytics, reporting dashboards, and seamless integration across departments, this solution is ideal for high-volume wholesale and distribution businesses aiming to reduce overheads, boost operational productivity, and scale effortlessly.",
];

const categories = [
  {
    title: 'FMCG Distributors',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro’s FMCG distribution software is designed to streamline the distribution process, ensuring smooth operations from the warehouse to retail outlets. Whether you distribute packaged snacks, beverages, dairy products, or other fast-moving consumer goods (FMCG), Saniiro simplifies your logistics, billing, inventory, and accounting management.",
        "Our software offers a comprehensive solution for FMCG distributors to handle large volumes of products, manage stock levels in multiple locations, and ensure timely deliveries. Real-time inventory tracking ensures that you never run out of stock, while auto-reordering capabilities reduce the risk of overstocking.",
      ],
    bulletPoints: [
      'Route-wise billing and van stock tracking',
      'Expiry and returnable stock handling',
      'Scheme management and party-wise rate setup',
      'Credit limit and outstanding party reports',
      'Real-time order booking and delivery mapping',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Pharmaceutical Distributors',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro’s pharmaceutical distribution software is specially designed to cater to the complex needs of pharmaceutical distributors, ensuring accurate stock management, timely deliveries, and compliance with regulatory standards. Whether you distribute prescription medicines, over-the-counter drugs, or medical devices, Saniiro streamlines your entire supply chain process.",
      ],
    bulletPoints: [
      'Batch & expiry-wise inventory with HSN codes',
      'GST filing-ready reports and e-invoicing',
      'CRM for doctor, retailer, and chemist follow-ups',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Electrical & Electronics Wholesalers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro's wholesale distribution software is tailored to meet the unique needs of electrical and electronics wholesalers, ensuring smooth operations from procurement to delivery. Whether you’re dealing with electrical components, lighting fixtures, home appliances, or industrial electronics, Saniiro helps you streamline inventory management, billing, and distribution efficiently.",
        "With inventory management tools, you can track components, devices, and finished products across multiple warehouses in real-time. Saniiro allows for batch and serial number tracking, helping you ensure the availability of parts, monitor stock levels, and avoid overstocking or stockouts.",
      ],
    bulletPoints: [
      'Brand/model-wise bulk inventory control',
      'AMC and return tracking',
      'Dealer rate, MRP, and margin control',
      'Real-time stock status for multiple branches',
      'CRM for bulk buyers and dealer management',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Hardware Wholesalers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro’s wholesale distribution software is crafted to simplify the operations of hardware wholesalers. Whether you’re distributing tools, construction materials, or electrical equipment, Saniiro offers a robust solution for managing inventory, streamlining billing, and ensuring smooth distribution processes.",
        "With Saniiro, you gain full control over your inventory with advanced inventory management features. Track stock levels, monitor product performance, and ensure the availability of critical hardware components across multiple warehouses. Automated reorder alerts and stock-level insights help you stay ahead of demand.",
      ],
    bulletPoints: [
      'UOM-based stock handling (pcs, boxes, kg, etc.)',
      'Project/site-wise/Godown billing and dispatch',
      'Item alternates and rate negotiation tracking',
      'Multi-party quotations and order conversion',
      'Integrated accounting with ledger auto-sync',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Grocery Wholesalers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro’s grocery wholesale distribution software streamlines inventory, billing, and customer management for wholesale grocery distributors. Track perishable goods, manage stock levels with automated alerts, and generate GST-compliant invoices quickly.",
        "Our inventory management system ensures real-time stock updates and expiry tracking, while billing management simplifies bulk order processing. The integrated accounting management tools automate financial tracking, and our CRM helps nurture customer relationships with personalized offers.",
        "Maximize efficiency and stay compliant with Saniiro’s complete software solution for grocery wholesalers",
      ],
    bulletPoints: [
      'Fast SKU entry with barcode & batch mapping',
      'Custom packing units (kg, gm, liter) handling',
      'Purchase from multiple vendors with rate comparison',
      'Customer ledger, outstanding & payment tracking',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Mobile Accessories Distributors',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro’s mobile accessories distribution software simplifies inventory, billing, and customer management for distributors of mobile accessories. Efficiently track stock, manage SKU variations, and handle bulk orders with ease.",
        "Our inventory management system provides real-time updates, while billing management ensures quick and accurate invoicing for large orders. The integrated accounting management features help maintain accurate financial records, and CRM tools assist in building stronger customer relationships.",
        "Saniiro’s all-in-one solution boosts efficiency, simplifies operations, and ensures smooth distribution of mobile accessories.",
      ],
    bulletPoints: [
      'Model-wise accessories mapping (e.g., cases for iPhone 14)',
      'Multi-location stock transfer and control',
      'B2B order management via WhatsApp/email integration',
      'Real-time delivery status and invoice sharing',
      'CRM for retailers, repair shops, and resellers',
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

export default function Wholesale() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 570;
      setShowNav((prevShowNav) =>
        prevShowNav !== shouldShow ? shouldShow : prevShowNav
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <React.Fragment>
      {showNav && <Nav />}
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