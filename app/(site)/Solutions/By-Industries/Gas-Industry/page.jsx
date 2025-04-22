"use client";

import Banner from "@/components/Banner";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react"; 
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const headings = [
  "Gas industry software is essential for managing the complex operations of LPG distributors, gas agencies, and energy suppliers. From cylinder tracking and order management to billing and safety compliance, manual processes can lead to delays and errors.",
  "Saniiro, the best gas industry software, automates core functions like inventory control, GST-compliant billing, route planning, and customer management. It offers real-time tracking, safety record maintenance, and centralized control to help you stay efficient and compliant.",
  "Whether you're running a local gas agency or a large-scale distribution network, Saniiro empowers your team to deliver faster, safer, and more reliable service.",
];

const categories = [
  {
    title: 'LPG & CNG Cylinder Distributors',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Managing gas cylinder distribution involves tracking refills, safety checks, inventory rotation, and dealer billing. Saniiro offers a reliable solution to streamline delivery scheduling, cylinder tracking by serial number, and customer record management.",
        "Easily monitor filled and empty stock, generate compliant invoices, and automate route-wise delivery planning. Keep records of safety inspections, cylinder lifecycles, and deposit collections—all from one dashboard.",
        "Designed for LPG and CNG distributors who prioritize safety, compliance, and timely service.",
      ],
    bulletPoints: [
      'Cylinder tracking by serial number, weight, and size (12kg, 19kg, 47kg, etc.)',
      'Real-time stock view (filled, empty, defective, in transit)',
      'Route-wise delivery scheduling and tracking',
      'Auto-calculation of cylinder return',
      'Integration with SMS alerts for delivery confirmation',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Gas Equipment Dealers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Selling regulators, burners, pipelines, and industrial gas equipment requires accurate stock control, service tracking, and customer communication. Saniiro helps you manage product catalogs, warranty tracking, and dealer pricing with ease.",
        "Track every sale, handle service calls, and maintain part-wise inventory efficiently. Generate GST-compliant invoices, manage AMC (Annual Maintenance Contracts), and maintain detailed customer histories—everything from one smart platform.",
        "Ideal for dealers focused on precision, service, and smooth business operations.",
      ],
    bulletPoints: [
      'Warranty & AMC tracking for sold equipment',
      'Quotation to invoice flow with GST-ready billing',
      'Batch-wise inventory with serial number tagging',
      'Auto-reorder alerts for fast-selling items',
      'Customer follow-up and service CRM integration',
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

export default function GasIndustry() {

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
