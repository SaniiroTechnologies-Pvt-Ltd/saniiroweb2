"use client";

import Banner from "@/components/Banner";
import Nav from "@/components/Navbar/Nav";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const headings = [
  "Renewable energy software is essential for companies involved in solar, wind, hydro, and other sustainable energy projects. Managing installations, asset performance, compliance, and financials manually can slow progress and reduce efficiency.",
  "Saniiro, the best renewable energy software, offers an all-in-one platform to streamline operations—from project planning and inventory tracking to billing, maintenance scheduling, and GST-compliant accounting. It empowers renewable energy providers with real-time monitoring, centralized control, and intelligent reporting.",
  "Whether managing rooftop solar projects or large-scale energy farms, Saniiro helps you stay compliant, reduce downtime, and scale your impact sustainably.",
];

const categories = [
  {
    title: 'Solar Panel Distributors & Installers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro provides a complete solution tailored for solar panel distributors and installers—helping you manage sales, stock, and service workflows all in one place.",
        "From tracking solar panels, batteries, and inverters to handling customer site assessments and AMC (Annual Maintenance Contract) scheduling, everything is simplified. Generate quotations, manage installation projects, and keep your team aligned with real-time updates.",
        "The system also enables you to monitor product warranties, track leads, and streamline customer communication through built-in CRM features—ensuring a smoother post-sale experience.",
        "Whether you're selling rooftop systems or managing large-scale installations, Saniiro helps you stay organized, efficient, and growth-ready.",
      ],
    bulletPoints: [
      'Product catalog by wattage, brand, and size',
      'Site survey to installation billing cycle',
      'Customer KYC & subsidy documentation tracking',
      'Project-wise material and technician allocation',
      'AMC and maintenance reminder system',
      'CRM for leads from architects and builders',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Wind Turbine Equipment Providers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro offers a robust platform for wind turbine equipment providers, covering everything from part distribution and inventory tracking to service schedules and client management.",
        "Easily manage components like blades, gearboxes, and controllers with precise stock visibility. Create professional quotations, track project timelines, and assign technicians for field installations or maintenance.",
        "With built-in tools for client communication, order processing, and warranty tracking, Saniiro helps wind energy businesses stay compliant, efficient, and service-ready.",
        "Perfect for suppliers dealing in utility-scale, commercial, or hybrid wind systems—everything you need to run your operations smoothly is in one place.",
      ],
    bulletPoints: [
      'Equipment-wise warranty and part tracking',
      'Maintenance scheduling system',
      'Project invoice with multiple cost heads (equipment + labor)',
      'Vendor-wise purchase and cost analysis',
      'Large inventory tagging and GPS tool integration',
      'After-sales support and ticketing system',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Battery Storage & Inverter Sellers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro provides a comprehensive solution designed for businesses dealing in batteries, inverters, and power backup systems. Whether you sell to residential, commercial, or industrial clients, the platform helps you stay on top of your sales, stock, and service commitments.",
        "Manage product ranges by brand, capacity, and warranty terms with ease. Track customer service schedules, generate AMC (Annual Maintenance Contract) reminders, and assign field technicians for on-site support.",
        "Handle serial numbers, warranty registrations, and supplier records in one place—making .your business more organized and reliable. Saniiro makes every aspect of your operations faster and more professional",
      ],
    bulletPoints: [
      'Serial number-wise tracking for batteries & inverters',
      'Warranty tracking and auto service alert',
      'AMC and battery replacement records',
      'Multiple price list configuration (retail, dealer, online)',
      'GST billing with e-way bill integration',
      'QR scan-enabled product billing',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Green Energy Consulting Firms',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro provides green energy consulting firms with a comprehensive platform to manage client portfolios, feasibility studies, and project documentation seamlessly.",
        "Track project milestones, cost estimations, and site assessments in one place. Generate professional proposals, manage regulatory paperwork, and collaborate with stakeholders through a centralized system.",
        "Whether you're advising on solar, wind, biogas, or hybrid projects, Saniiro helps streamline your consultancy workflow, so you can focus on delivering sustainable energy solutions efficiently and professionally.",
      ],
    bulletPoints: [
      'Proposal & quotation module with multi-project support',
      'Task management for audit and implementation teams',
      'Consultant fee billing with TDS tracking',
      'CRM for lead-to-project conversion',
      'Government compliance document repository',
      'Expense & travel log for field visits',
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

export default function RenewableEnergy() {
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
