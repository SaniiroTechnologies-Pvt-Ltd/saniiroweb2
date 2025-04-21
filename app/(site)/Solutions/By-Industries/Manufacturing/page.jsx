"use client";

import Banner from "@/components/Banner";
import Nav from "@/components/Navbar/Nav";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const headings = [
  "Manufacturing businesses deal with a wide range of challenges—material procurement, production planning, inventory control, labor management, and compliance. Handling all of this manually not only consumes time but increases the risk of costly errors and inefficiencies.",
  "Saniiro, the best manufacturing software, transforms your production process by automating key operations. From real-time inventory management and smart production scheduling to work order tracking and GST-compliant accounting, Saniiro brings everything you need into one powerful platform.",
  "Ideal for both small manufacturers and large-scale factories, Saniiro helps you streamline workflows, minimize downtime, and gain complete visibility into your operations. With centralized control and intelligent reporting, you can boost productivity, reduce costs, and confidently scale your manufacturing business.",
];

const categories = [
  {
    title: 'Garment/Textile Manufacturing',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "From managing fabrics and stitching workflows to handling vendor schedules and job orders, Saniiro simplifies the daily operations of textile units. It ensures smooth tracking of raw materials and finished goods using robust inventory management features. Our software helps streamline production cycles and improve operational efficiency across every stage.",
      ],
    bulletPoints: [
      'Mold-wise production planning and scheduling',
      'Raw material inventory and wastage control',
      'Machine-wise performance and output records',
      'Scrap & rework inventory management',
      'Integrated accounting for purchase, sales, and expenses',
      'GST-compliant purchase/sales invoicing',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Plastic Goods Manufacturing',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "From managing fabrics and stitching workflows to handling vendor schedules and job orders, Saniiro simplifies the daily operations of textile units. It ensures smooth tracking of raw materials and finished goods using robust inventory management features. Our software helps streamline production cycles and improve operational efficiency across every stage.",
      ],
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
    title: 'FMCG Product Manufacturers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "From production to packaging and distribution, Saniiro handles the complete workflow for FMCG manufacturers. Easily track raw materials, monitor recipe and batch mixing, and automate job scheduling based on demand. It includes expiry-based batch control and auto-reordering features, ensuring you never miss restocking deadlines and always stay compliant with food safety regulations. Monitor perishable items with shelf-life tracking and get notified before batches expire.",

      ],
    bulletPoints: [
      'Batch and expiry-wise production tracking',
      'Multi-level BOM (Bill of Materials) management',
      'Dealer/distributor order management integration',
      'MRP-wise packaging and labeling tracking',
      'CRM for B2B client servicing and demand forecasting',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'FMCG Product Manufacturers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "From production to packaging and distribution, Saniiro handles the complete workflow for FMCG manufacturers. Easily track raw materials, monitor recipe and batch mixing, and automate job scheduling based on demand. It includes expiry-based batch control and auto-reordering features, ensuring you never miss restocking deadlines and always stay compliant with food safety regulations. Monitor perishable items with shelf-life tracking and get notified before batches expire.",
      ],
    bulletPoints: [
      'Batch and expiry-wise production tracking',
      'Multi-level BOM (Bill of Materials) management',
      'Dealer/distributor order management integration',
      'MRP-wise packaging and labeling tracking',
      'CRM for B2B client servicing and demand forecasting',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Food Processing Units',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Whether you're producing packaged snacks, dairy, or ready-to-eat items, Saniiro simplifies recipe management, compliance tracking, and dispatch.Stay on top of perishable inventory with batch-wise monitoring and expiry alerts. Our system ensures real-time updates and complete control over production.",
      ],
    bulletPoints: [
      'Recipe-wise production management and costing',
      'Batch coding with expiry, MRP, and packaging details',
      'Quality control logs and traceability reports',
      'Cold storage and perishable item monitoring',
      'CRM with distributor order syncing and demand alerts ',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Electronics/Appliance Manufacturing',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro supports complex workflows such as component tracking, serial number tagging, warranty handling, and vendor coordination. From delivery order, the platform ensures accurate documentation and data flow. Its inventory management tools keep your parts, components, and finished goods perfectly organized.",
      ],
    bulletPoints: [
      'Assembly-level BOM and production planning',
      'Warranty tracking post-sale',
      'Batch-wise testing, QC, and rejection reporting',
      'CRM for dealer support and after-sales service',
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

export default function Manufacturing() {
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

