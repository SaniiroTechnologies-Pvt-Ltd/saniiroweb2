import Banner from "@/components/Banner";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { fetchMetadata } from "@/utils/FetchMetadata";

// Metadata | Solution / By Industries / Real Estate
export async function generateMetadata() {
  try {
    return await fetchMetadata('service-provider');
  } catch (error) {
    console.error(error);
  }
}

const headings = [
  "Best Service Provider Software is essential for businesses that rely on appointments, client management, and on-time service delivery. Managing schedules, invoicing, and customer communication manually can slow you down and lead to errors.",
  "Saniiro is built to streamline operations for a wide range of service-based businesses—whether you're running a salon, repair shop, consultancy, or cleaning service. It offers automated scheduling, invoicing, GST-compliant accounting, and a built-in CRM, all in one easy-to-use platform.",
  "With real-time tracking, centralized control, and smart analytics, Saniiro helps you improve efficiency, enhance customer satisfaction, and scale your service business with confidence.",
];

const categories = [
  {
    title: 'CA & Accounting Firms',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Chartered Accountants and accounting firms handle complex client portfolios, compliance deadlines, and financial records. Saniiro helps streamline your operations by offering a powerful platform to manage clients, tasks, documents, and timelines from a single dashboard.",
        "Easily organize ITR filings, GST returns, audits, and financial reporting. Automate reminders for compliance dates, securely store client documents, and track task progress for your entire team. Whether you’re managing individual clients or corporate accounts, Saniiro ensures accuracy, transparency, and timely delivery.",
        "Enhance your firm’s productivity and build stronger client relationships with a tool designed for finance professionals.",
      ],
    bulletPoints: [
      'Client ledger, billing, and service tracking',
      'Follow-up management with due-date alerts',
      'Recurring billing for monthly/yearly services',
      'Document and compliance status tracking',
      'CRM for client engagement and renewal reminders',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Travel Agencies',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Travel agencies handle dynamic schedules, multiple vendors, and diverse client needs. Saniiro provides an integrated solution to streamline trip planning, client communication, invoicing, and payment tracking—all from one platform.",
        "Manage domestic and international bookings, hotel reservations, visa services, and tour packages with ease. Track customer inquiries, generate invoices instantly, and maintain a centralized database of clients and itineraries. With built-in tools for reporting and follow-ups, it’s easier than ever to stay organized and boost repeat business.",
        "Whether you run a local agency or manage a growing team, Saniiro gives you the control and visibility you need to deliver seamless travel experiences.",
      ],
    bulletPoints: [
      'Booking-wise costing and commission reports',
      'Vendor management for flights, hotels, and transport',
      'GST-compliant invoice and advance receipt',
      'Tour package creation with profit analysis',
      'CRM for customer leads, renewals, and feedback',
    ],
    image: '/industry/retails/office.png',
  },
  {
    title: 'Real Estate Agencies',
    subtitle: 'Efficient Inventory & Billing',
    descriptions:
      [
        "Real estate businesses juggle multiple listings, client meetings, and complex documentation daily. Saniiro offers a centralized platform to manage property portfolios, track inquiries, automate follow-ups, and generate agreements and invoices effortlessly.",
        "Whether you're dealing with sales, rentals, or lease management, you can store all property details, client histories, and financial records in one place. Streamline commission tracking, appointment scheduling, and document generation to save time and close more deals.",
        "Perfect for solo agents or multi-location real estate firms looking to stay organized and grow their network.",
      ],
    bulletPoints: [
      'Property listing with image and rate details',
      'Customer follow-up and requirement match',
      'Broker commission and split deal tracking',
      'Legal documentation and token money tracking',
      'CRM with lead source and closure analysis',
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

export default function ServiceProvider() {
  
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