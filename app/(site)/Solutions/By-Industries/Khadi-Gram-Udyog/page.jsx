import Banner from "@/components/Banner";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Solution / By Industries / Khadi Gram Udyog
export async function generateMetadata() {
  try {
    return await fetchMetadata('khadi-gram-udyog');
  } catch (error) {
    console.error(error);
  }
}

const headings = [
  "Khadi and Gramudyog software is designed to support the unique needs of traditional, rural, and small-scale industries. From raw material tracking and artisan management to billing, inventory, and sales, managing operations manually can slow down growth and reduce efficiency.",
  "Saniiro, the best Khadi and Gramudyog software, simplifies your entire process with automated inventory control, GST-compliant billing, production tracking, and centralized reporting. Whether you're managing a Khadi store, a handicraft unit, or a village industry setup, Saniiro brings modern efficiency to traditional businesses.",
  "With Saniiro, you can preserve heritage while scaling sustainably—bringing transparency, accountability, and speed to your operations.",
];

const categories = [
  {
    title: 'Khadi Garment Weavers & Sellers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Running a Khadi business means handling handcrafted fabrics, seasonal production, and unique sizing and designs. Saniiro simplifies the day-to-day with tools to manage weaving schedules, artisan payments, and product listings by fabric type, weave, or design.",
        "Easily track raw cotton or yarn stock, manage dyeing or tailoring stages, and generate bills for bulk or retail orders. Whether you operate a local store or supply to handloom expos, Saniiro helps you maintain transparency, accuracy, and heritage value in your operations",
        "Perfect for weavers, cooperatives, and Khadi retailers looking to modernize while preserving tradition.",
      ],
    bulletPoints: [
      'Fabric type, color, and size-wise inventory (Cotton, Silk, Wool)',
      'Barcode-enabled billing with HSN code for GST compliance',
      'Festival-season-wise discount & loyalty programs',
      'Artisan-wise sales/commission report',
      'Online + counter sales billing with stock sync',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Handmade Soap, Oil, and Natural Cosmetic Producers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "For producers of handmade soaps, oils, and natural cosmetics, managing the production cycle, inventory, and customer relations is essential. Saniiro offers a robust solution to streamline every step, from sourcing raw ingredients to packaging and shipping finished products.",
        "Track ingredient batches, manage production schedules, and ensure compliance with quality standards with ease. Whether you're a small local business or a growing brand, Saniiro simplifies order management, custom formulations, and labeling, ensuring that you never miss a detail.",
        "With built-in tools for managing sales, customer orders, and distribution channels, you can focus on what matters most—crafting quality products that are good for the skin and the environment.",
      ],
    bulletPoints: [
      'Batch-wise production tracking with expiry management',
      'Recipe (BOM) and material consumption costing',
      'Customer feedback & CRM follow-up system',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Traditional Pottery & Earthenware Artisans',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Managing the delicate and creative process of pottery and earthenware production requires precision, creativity, and control over every stage of manufacturing. Saniiro provides the ideal solution for artisans, from crafting to selling, offering tools that streamline operations and help preserve your art.",
        "Track raw materials such as clay, glazes, and paints, monitor production cycles, and manage orders with ease. Whether you’re making traditional pottery or modern earthenware designs, Saniiro’s system helps you stay organized, from inventory management to order fulfillment.",
        "The software also enables you to build customer profiles, track custom orders, and streamline payments, making it easier to run your business while focusing on creating beautiful, handcrafted pottery.",
      ],
    bulletPoints: [
      'Design, size, and batch-wise inventory tracking',
      'Fragile goods transport cost integration',
      'Credit sales ledger with payment reminders',
      'QR code billing for mobile payments',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Jute, Coir & Bamboo Product Makers',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "For artisans and manufacturers of jute, coir, and bamboo products, managing production, inventory, and orders is essential for maintaining both quality and sustainability. Saniiro’s software offers a comprehensive solution to streamline these processes, allowing you to focus on creating eco-friendly, sustainable products.",
        "Track raw materials like jute fibers, bamboo shoots, and coir strands, and manage production stages with ease. Whether you're producing mats, baskets, ropes, or furniture, Saniiro’s inventory and order management system ensures that you have full visibility into your stock and production status.",
        "From custom orders to bulk manufacturing, our software allows you to track every step, from material procurement to delivery, ensuring on-time shipments and keeping costs under control.",
      ],
    bulletPoints: [
      'Category & craft-wise stock with photo catalog',
      'Bulk buyer CRM and dealer management system',
      'Custom order module with dispatch tracking',
      'Raw material vs. finished good costing',
      'Eco-product labeling support in the invoice',
      'Vendor & artisan payment management',
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

export default function KhadiGramUdyogPage() {
  
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