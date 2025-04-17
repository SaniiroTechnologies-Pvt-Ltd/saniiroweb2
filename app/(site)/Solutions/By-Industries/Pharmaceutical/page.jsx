"use client";

import Banner from "@/components/Banner";
import Nav from "@/components/Navbar/Nav";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const headings = [
  "Saniiro, the best medical and health industry software, simplifies daily operations by automating inventory control, GST-compliant billing, appointment scheduling, and reporting. Whether you're running a pharmacy, clinic, or healthcare distribution unit, Saniiro offers centralized control, real-time insights, and complete compliance—all from one easy-to-use platform.",
  "Stay focused on delivering quality care while Saniiro handles your back-end operations with speed and accuracy.",
];

const categories = [
  {
    title: 'Pharmacies & Chemist Shops',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Running a pharmacy involves more than just selling medicines—it requires strict compliance, expiry tracking, prescription handling, and fast service. Saniiro simplifies daily pharmacy operations with a specialized solution designed for medical retailers.",
        "Effortlessly manage stock by batch and expiry dates, handle prescription-based billing, and ensure accuracy in sales. The software supports real-time updates, customer tracking, and vendor coordination, making it easy to restock essential drugs and serve customers faster.",
        "Whether you're running a standalone medical shop or a chain of chemist outlets, Saniiro helps you stay organized, save time, and focus on delivering better care to your customers.",
      ],
    bulletPoints: [
      'Drug-wise expiry tracking and alerts',
      'Quick billing with auto prescription linkage',
      'Purchase return & rate variance handling',
      'CRM for customer medicine refill reminders',
      'CRM for appointment scheduling and follow-ups',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Medical Equipment Suppliers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Distributing medical equipment demands accuracy, documentation, and reliable delivery. From handling large devices to consumables and surgical tools, Saniiro supports medical suppliers with a streamlined system to manage stock, pricing, orders, and service records.",
        "Easily track item specifications, warranty details, and client history. With features like batch-wise tracking, auto-updates, and delivery logs, you can ensure faster order fulfillment and better customer coordination, whether you deal with hospitals, clinics, or labs. Saniiro is built to simplify operations and enhance control across every stage of your supply business.",
      ],
    bulletPoints: [
      'Serial number-based tracking and service records',
      'Bulk quotation and order processing',
      'AMC/Warranty management with reminders',
      'Logistics and installation scheduling',
      'CRM for hospitals, clinics, and B2B clients',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Ayurvedic & Herbal Stores',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Ayurvedic and herbal stores need specialized tools to handle diverse product types, expiry-based items, and traditional remedies. Saniiro simplifies your store operations with an easy-to-use system for managing product categories, pricing, and customer preferences.",
        "Track herbal medicines, wellness products, supplements, and beauty items with ease. From handling expiry alerts to managing walk-in and repeat customers, the software ensures accuracy and smooth transactions, helping you run a more organized and trusted wellness business.",
        "Support your store’s growth with a system that respects tradition and delivers modern efficiency.",
      ],
    bulletPoints: [
      'Batch-wise inventory with expiry date tracking',
      'Product grouping for wellness categories',
      'Easy GST billing with MRP management',
      'Health consultation history for repeat customers',
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

export default function Pharmaceutical() {
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

