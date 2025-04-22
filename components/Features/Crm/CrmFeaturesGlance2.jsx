"use client";

import React from 'react';
import Image from 'next/image';
import { Box, Grid, Typography, List, ListItem, useMediaQuery, useTheme, } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OfficeImg from "../../assets/icons/image120.png"; // Adjust the path as necessary

const features = [
  {
    title:
      'Enhance <span style="color: #F15B25">Productivity</span> with Automated <span style="color: #F15B25">CRM Processes</span>',
    image: OfficeImg,
    subTexts: [
      "- Automate lead assignment and communication workflows.",
      "- Schedule meetings, follow-ups, and updates automatically.",
      "- Centralized customer data with easy access to histories, deals, and preferences.",
      "- Maintain accountability with detailed task tracking.",
      "- Improve customer engagement with personalized messages and reminders.",
    ],
  },
  {
    title:
      'Achieve <span style="color: #F15B25">Cost Savings</span> with Cloud CRM',
    image: OfficeImg,
    subTexts: [
      "- No need for high-cost infrastructure.",
      "- Access CRM data from any location.",
      "- Secure cloud environment with advanced encryption.",
      "- Real-time updates and software enhancements included.",
      "- Boost team collaboration remotely.",
    ],
  },
  {
    title:
      'Gain Full Visibility Over <span style="color: #F15B25">Sales & Marketing</span> Software',
    image: OfficeImg,
    subTexts: [
      "- Monitor campaigns and conversion rates.",
      "- Generate department-specific or consolidated reports.",
      "- Customize dashboards to track specific KPIs.",
      "- Get daily activity summaries to improve sales team performance.",
    ],
  },
  {
    title: 'Simplify <span style="color: #F15B25">Compliance</span> and <span style="color: #F15B25">Documentation</span>',
    image: OfficeImg,
    subTexts: [
      "- Keep a log of all customer interactions.",
      "- Reduce errors in data tracking.",
      "- Ensure compliance with customer data handling policies.",
      "- Prepare for audits effortlessly with organized CRM records.",
    ],
  },
];

export default function CrmFeaturesGlance2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('smm')); // Determines if the view is for mobile

  // Responsive configuration for the carousel
  const responsiveConfig = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  // Container styles with centered alignment and padding
  const containerStyles = {
    maxWidth: '1080px',
    mx: 'auto',
    mt: 12,
    px: { xs: 2, md: 4 }, // Padding for responsive spacing
  };

 
  const titleFontSize = {
    xs: '1.25rem', // Slightly smaller for extra-small screens
    sm: '1.5rem',  // Increased to match small screen readability
    md: '2rem',    // Slight reduction for medium screens for consistency
    lg: '2.5rem',  // Retained for large screens
  };

  const listTitleFontSize = {
    xs: '1rem', // Slightly smaller for extra-small screens
    sm: '1.2rem', // Small increase for small screens
    md: '1.5rem', // Optimal for medium screens
    lg: '1.75rem', // Slight reduction for large screens to keep consistency
  };

  const listItemFontSize = {
    xs: '0.85rem', // Slight adjustment for smaller screens
    sm: '0.95rem', // Gradual increase for small devices
    md: '1.125rem', // Optimal readability for medium devices
    lg: '1.2rem', // Slight increase for large screens
  };
  

  // Main headline
  const headline = 'Revolutionize CRM with Saniiro';

  return (
    <Box container sx={containerStyles}>
      {/* Headline */}
      <Typography
        fontFamily={"Work Sans"}
        variant="h3"
        sx={{
          textAlign: { xs: 'left', md: 'center' },
          mb: { xs: 0, md: 6 },
          fontSize: titleFontSize,
          fontWeight: 700,
          color: '#052973',
        }}
      >
        {headline}
      </Typography>

      {/* Render Carousel for Mobile */}
      {isMobile && (
        <Carousel
          responsive={responsiveConfig}
          showDots={true}
          arrows={false}
          infinite={false}
          autoPlaySpeed={5000}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          containerClass="feature-carousel-container"
        >
          {features.map((feature, index) => (
            <Box key={index} sx={{ py: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: '200px', sm: '250px' },
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: 2,
                    }}
                  >
                    <Image
                      fill
                      sizes="100vw"
                      objectFit="contain"
                      src={feature.image}
                      alt="Feature Image"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: listTitleFontSize,
                      textAlign: left,
                    }}
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                  <List sx={{ listStyleType: 'disc', pl: 3 }}>
                    {feature.subTexts.map((subText, idx) => (
                      <ListItem
                        key={idx}
                        sx={{
                          display: 'list-item',
                          fontSize: listItemFontSize,
                          fontWeight: 400,
                          lineHeight: 1.4,
                          py: 0.25,
                        }}
                      >
                        {subText.replace(/^-/, '').trim()}
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Carousel>
      )}

      {/* Render Grid for Medium+ */}
      {!isMobile &&
        features.map((feature, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <Grid
              container 
              spacing={0}
              alignItems="center"
              key={index}
              sx={{ my: 4, px: { xs: 2, md: 4 } }} // Padding for left and right
            >
              {isImageLeft && (
                <Grid  xs={12} md={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: '200px', md: '300px' },
                      overflow: 'hidden',
                      mx: 'auto', // Center alignment
                      display: {xs: 'none', md: 'block'}
                    }}
                  >
                    <Image
                      fill
                      sizes="100vw"
                      objectFit="contain"
                      src={feature.image}
                      alt="Feature Image"
                    />
                  </Box>
                </Grid>
              )}
              <Grid  sx={{ m: 0}} xs={12} md={6} >
                <Box> {/* Padding */}
                  <Typography
                    fontFamily={"Work Sans"}
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: listTitleFontSize,
                      fontKerning:'normal',
                      textAlign: {sx:'left'}
                    }}
                    dangerouslySetInnerHTML={{ __html: feature.title }}
                  />
                  <List sx={{ listStyleType: {md: 'disc' }, pl: {xs:0, md: 3} }}>
                    {feature.subTexts.map((subText, idx) => (
                      <ListItem
                        fontFamily={"Work Sans"}
                        key={idx}
                        sx={{
                          display: 'list-item',
                          fontSize: listItemFontSize,
                          fontWeight: 400,
                          lineHeight: 1.4,
                          py: 0.25,
                        }}
                      >
                        {subText.replace(/^-/, '').trim()}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              
              {!isImageLeft && (
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: '200px', md: '300px' },
                      overflow: 'hidden',
                      mx: 'auto', // Center alignment
                      display: {xs: 'none', md: 'block'}
                    }}
                  >
                    <Image
                      fill
                      sizes="100vw"
                      objectFit="contain"
                      src={feature.image}
                      alt="Feature Image"
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          );
        })}
    </Box>
  );
}

// export default function FeaturesGlance2() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   // Container style with centered content up to 1080px width
//   const containerStyles = {
//     maxWidth: '1080px',
//     mx: 'auto',
//     p: { xs: 2, md: 4 },
//   };

//   // Responsive typography styles: adjust font sizes for title and list items
//   const titleFontSize = {
//     xs: '1.25rem',
//     sm: '1.5rem',
//     md: '1.75rem',
//     lg: '2rem',
//   };

//   const listItemFontSize = {
//     xs: '0.875rem',
//     sm: '1rem',
//     md: '1rem',
//   };

//   // Mobile view: use Carousel (show one feature per slide)
//   if (isMobile) {
//     const responsiveConfig = {
//       superLargeDesktop: {
//         breakpoint: { max: 4000, min: 1024 },
//         items: 1,
//       },
//       desktop: {
//         breakpoint: { max: 1024, min: 768 },
//         items: 1,
//       },
//       tablet: {
//         breakpoint: { max: 768, min: 464 },
//         items: 1,
//       },
//       mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//       },
//     };

//     return (
//       <Box sx={containerStyles}>
//         <Carousel
//           responsive={responsiveConfig}
//           showDots={true}
//           arrows={false}
//           infinite={false}
//           containerClass="feature-carousel-container"
//         >
//           {features.map((feature, index) => (
//             <Box key={index} sx={{ py: 2 }}>
//               <Grid container spacing={2} alignItems="center">
//                 <Grid item xs={12}>
//                   <Box
//                     sx={{
//                       position: 'relative',
//                       width: '100%',
//                       height: { xs: '200px', sm: '250px' },
//                       // borderRadius: 2,
//                       overflow: 'hidden',
//                       // boxShadow: 2,
//                     }}
//                   >
//                     <Image
//                       fill
//                       sizes="100vw"
//                       objectFit="contain"
//                       src={feature.image}
//                       alt="Feature Image"
//                     />
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       fontWeight: 700,
//                       mb: 1,
//                       fontSize: titleFontSize,
//                     }}
//                     dangerouslySetInnerHTML={{ __html: feature.title }}
//                   />
//                   <List sx={{ listStyleType: 'disc', pl: 3 }}>
//                     {feature.subTexts.map((subText, idx) => (
//                       <ListItem
//                         key={idx}
//                         sx={{
//                           display: 'list-item',
//                           fontSize: listItemFontSize,
//                           fontWeight: 400,
//                           lineHeight: 1.4,
//                           py: 0.25,
//                         }}
//                       >
//                         {subText.replace(/^-/, '').trim()}
//                       </ListItem>
//                     ))}
//                   </List>
//                 </Grid>
//               </Grid>
//             </Box>
//           ))}
//         </Carousel>
//       </Box>
//     );
//   }

//   // Desktop/Tablet view: use Grid layout with alternating image positions
//   return (
//     <Box sx={{...containerStyles,}}>
//       {features.map((feature, index) => {
//         const isImageLeft = index % 2 === 0;
//         return (
//           <Grid
//             container
//             justifyItems={'center'}
//             spacing={4}
//             alignItems="center"
//             key={index}
//             sx={{ my: 4,}}
//           >
//             {isImageLeft && (
//               <Grid item xs={12} md={6}>
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     width: '100%',
//                     height: { xs: '200px', md: '300px' },
//                     // borderRadius: 2,
//                     overflow: 'hidden',
//                     // boxShadow: 2,
//                   }}
//                 >
//                   <Image
//                     fill
//                     //sizes="100vw"
//                     objectFit="contain"
//                     src={feature.image}
//                     alt="Feature Image"
//                   />
//                 </Box>
//               </Grid>
//             )}
//             <Grid item xs={12} md={6}>
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontWeight: 700,
//                   mb: 2,
//                   fontSize: titleFontSize,
//                 }}
//                 dangerouslySetInnerHTML={{ __html: feature.title }}
//               />
//               <List sx={{ listStyleType: 'disc', pl: 3 }}>
//                 {feature.subTexts.map((subText, idx) => (
//                   <ListItem
//                     key={idx}
//                     sx={{
//                       display: 'list-item',
//                       fontSize: listItemFontSize,
//                       fontWeight: 400,
//                       lineHeight: 1.4,
//                       py: 0.25,
//                     }}
//                   >
//                     {subText.replace(/^-/, '').trim()}
//                   </ListItem>
//                 ))}
//               </List>
//             </Grid>
//             {!isImageLeft && (
//               <Grid item xs={12} md={6}>
//                 <Box
//                   sx={{
//                     position: 'relative',
//                     width: '100%',
//                     height: { xs: '200px', md: '300px' },
//                     // borderRadius: 2,
//                     overflow: 'hidden',
//                     // boxShadow: 2,
//                   }}
//                 >
//                   <Image
//                     fill
//                     sizes="100vw"
//                     objectFit="contain"
//                     src={feature.image}
//                     alt="Feature Image"
//                   />
//                 </Box>
//               </Grid>
//             )}
//           </Grid>
//         );
//       })}
//     </Box>
//   );
// }





