import Banner from "@/components/Banner";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Solution / By Industries / logistics Supply Chain
export async function generateMetadata() {
  try {
    return await fetchMetadata('logistics-supply-chain');
  } catch (error) {
    console.error(error);
  }
}

const headings = [
  "Logistics and supply chain operations are the backbone of efficient business flow, but managing them manually can lead to delays, errors, and missed opportunities. From shipment tracking and warehouse management to order processing and vendor coordination, the complexity demands smart automation.",
  "Saniiro, the best Logistics & Supply Chain software, streamlines your entire workflow with real-time shipment updates, automated inventory control, route optimization, and centralized analytics. Whether you're overseeing freight logistics, distribution centers, or multi-vendor supply chains, Saniiro brings speed, visibility, and control to your operations.",
  "With Saniiro, you can reduce costs, improve accuracy, and scale your supply chain with confidence, making your logistics smarter, faster, and future-ready.",
];

const categories = [
  {
    title: 'Third-Party Logistics Providers (3PL)',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro offers a robust platform tailored for Third-Party Logistics (3PL) providers, enabling seamless coordination between warehousing, inventory tracking, and client billing.",
        "Manage goods for multiple clients, track shipments in real-time, and generate automated invoices based on storage time, dispatch, or delivery. From order fulfillment to returns, the software simplifies complex logistics workflows and helps you deliver reliable, transparent service.",
        "Stay in control of fleet schedules, warehouse capacity, and partner SLAs—all through a single, easy-to-use dashboard built for logistics success.",
      ],
    bulletPoints: [
      'Client-wise inventory & dispatch records',
      'Package scanning and real-time delivery status',
      'Billing by weight, volume, or parcel count',
      'Service-based invoice with GST & reverse charges',
      'Partner/vendor payment ledger',
      'SLA monitoring and performance report',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Fleet/Truck Operators & Transport Agencies',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro helps transport agencies and fleet operators manage vehicle movement, trip planning, fuel logs, and delivery tracking from a centralized system.",
        "Whether you're running intercity cargo or local delivery routes, the platform streamlines operations with driver-wise records, route scheduling, maintenance alerts, and customer-wise billing.",
        "Keep your fleet productive, reduce downtime, and ensure timely deliveries with real-time insights and simplified logistics control—all in one platform.",
      ],
    bulletPoints: [
      'Trip-wise fuel & toll expense recording',
      'Route and vehicle scheduling with load management',
      'Lorry receipt (LR) generation with auto invoice',
      'Driver advance & settlement tracking',
      'Client-wise outstanding reports',
      'GPS integration-ready interface',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Courier & Parcel Delivery Services',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro offers an all-in-one solution tailored for courier and parcel delivery service providers to easily manage bookings, shipments, delivery routes, and customer communications.",
        "Everything is organized under one platform, from parcel tracking and consignment generation to cash collection and proof of delivery. Stay on top of pickups, drop-offs, and partner performance—while offering a smooth experience to customers and agents alike.",
      ],
    bulletPoints: [
      'AWB barcode-based parcel entry',
      'Delivery boy assignment and tracking',
      'COD and prepaid invoice split system',
      'Pickup & drop report generation',
      'Auto SMS for delivery status',
      'Customer dispute & return management system',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Warehouse & Cold Storage Operators',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro helps warehouse and cold storage businesses efficiently manage space, inventory movement, and temperature-controlled stock with precision.",
        "From inward-outward tracking to location-based item mapping, the system ensures organized storage and fast retrieval. For cold storage, batch-level tracking, expiry alerts, and environmental logging help maintain product quality and regulatory compliance, while optimizing operational efficiency",
      ],
    bulletPoints: [
      'Rack, pallet, and zone-wise inventory view',
      'Inward/outward logs with gate pass entry',
      'Rent billing based on space, weight, or time',
      'Item aging and spoilage tracking',
      'GST-compliant service invoicing',
      'Client-wise storage and service history',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Freight Forwarding & Customs Clearance Agents',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Saniiro supports freight forwarders and customs agents with a centralized platform to manage shipments, handle multi-country documentation, and track cargo movement in real time.",
        "From booking to clearance, you can streamline invoices, manage client records, and stay audit-ready with accurate documentation. Improve efficiency across air, sea, or road shipments with tools designed for global logistics coordination.",
        "Shipment tracking with document uploads (B/L, Invoice, etc.)",
      ],
    bulletPoints: [
      'HS code and duty-wise billing',
      'Agent-wise expense tracking (clearance, port, CHA)',
      'Multi-currency invoice for international clients',
      'Job number-based documentation management',
      'Client CRM for repeat business',
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

export default function LogisticsSupplyChainPage() {

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