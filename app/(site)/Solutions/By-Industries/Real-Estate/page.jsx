"use client";

import Banner from "@/components/Banner";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const headings = [
  "Real estate CRM software is vital for managing property listings, clients, bookings, CRM, and finances. Manual processes can lead to missed opportunities and inefficiencies.",
  "Saniiro offers a complete solution for real estate developers, agents, and property managers. From one powerful dashboard, automate project management, lead tracking, GST-compliant invoicing, payment schedules, and customer communication.",
  "With built-in CRM features, Saniiro helps you capture and manage leads, track client interactions, schedule follow-ups, and personalize communication—ensuring faster conversions and improved customer relationships.",
  "Gain real-time insights into your sales pipeline, monitor team performance, and stay organized with an up-to-date client database. Whether you're managing residential projects, commercial spaces, or rental properties, Saniiro boosts efficiency, enhances the customer experience, and helps you close deals faster.",
];

const categories = [
  {
    title: 'Residential Property Developers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro empowers residential property developers to manage construction workflows, client bookings, and payment tracking in one smart system.",
        "From plotting to possession, monitor project timelines, contractor tasks, and approval statuses efficiently. Keep client documents, floor plans, and agreements organized and accessible.",
        "Generate automated payment reminders, track instalments, and handle post-sale services with ease—making your real estate operations more streamlined, transparent, and professional.",
      ],
    bulletPoints: [
      'Unit-wise availability, booking, and sale dashboard',
      'Area-wise rate management (carpet, built-up, super built-up)',
      'Installment scheduling (Booking, Slab Completion, Possession)',
      'Customer KYC upload and agreement document tracking',
      'CRM for buyer engagement, reminders, and automated SMS/email',
      'Broker tracking with referral source and payout management',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Commercial Property Developers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro is tailored to meet the unique needs of commercial property developers—whether you're building office spaces, retail showrooms, malls, or warehouses.",
        "Easily track project progress, manage contractor schedules, and maintain all documentation in one centralized platform. Handle lease agreements, client communication, and custom pricing plans with full transparency.",
        "Stay on top of payment schedules, rental collections, and maintenance requests—ensuring your commercial developments run smoothly from blueprint to business-ready handover.",
      ],
    bulletPoints: [
      'Lease and outright sale billing options',
      'Square foot-wise rate mapping with amenities inclusion',
      'GST-compliant rent and maintenance invoices',
      'Agreement management with expiry alerts',
      'Utility billing module (electricity, water, etc.)',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Real Estate Agents & Brokers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro offers a professional and organized system for real estate agents and brokers to manage listings, client interactions, site visits, and deal closures—all from one intuitive dashboard.",
        "Track buyer and seller details, maintain property documents, and manage commission structures efficiently. With built-in reminders and follow-up tracking, you never miss a lead or delay a deal.",
        "Perfect for solo agents or teams, this platform boosts your productivity, builds trust with clients, and simplifies your day-to-day property transactions.",
      ],
    bulletPoints: [
      'Property listing and availability management',
      'Deal pipeline and client interest status tracker',
      'Commission billing with lead source tagging',
      'CRM for buyer/seller communication, follow-ups, and meetings',
      'Site visits, document collection',
      'Income and expense tracking for personal accounting',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Property Rental Management Firms',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro offers an ideal solution for property rental management firms, providing easy handling of lease agreements, rental payments, property maintenance schedules, and tenant records.",
        "Keep track of rental dues, automate payment reminders, and maintain comprehensive tenant history, all in one place. From commercial spaces to residential units, our software ensures that property managers can easily track rental cycles, occupancy rates, and maintenance requests.",
        "The platform helps streamline communications, manage multiple properties, and stay on top of lease renewals, making property rental management efficient and organized.",
      ],
    bulletPoints: [
      'Property-wise rent ledger and agreement management',
      'Auto rent invoicing with due reminders',
      'TDS deduction tracking for landlords',
      'Utility expense tracking & monthly billing to tenants',
      'Deposit collection and refund workflow',
      'Maintenance request ticketing and resolution tracking',
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

export default function RealEstate() {
  
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
