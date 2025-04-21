import React from 'react';
import Image from 'next/image';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OfficeImg from "../../../assets/icons/image120.png"; // Adjust the path as necessary

const features = [
  {
    title:
      'Ensure <span style="color: #F15B25">Seamless Order</span> Fulfillment with <span style="color: #F15B25">Inventory Management Software</span>',
    image: OfficeImg,
    subTexts: [
      "- Real-time synchronization of orders and inventory.",
      "- Batch-wise tracking and expiry management.",
      "- Automated returns and damaged goods handling.",
      "- On-time deliveries with fewer fulfillment errors.",
    ],
  },
  {
    title:
      'Save Big with <span style="color: #F15B25">Smart Stock Management System</span>',
    image: OfficeImg,
    subTexts: [
      "- Eliminate obsolete inventory and reduce overhead costs.",
      "- Automate manual processes to increase efficiency.",
      "- Optimize warehouse space and improve accuracy.",
      "- Enable smarter purchasing with historical trends and reports.",
    ],
  },
  {
    title:
      'Gain Full Visibility with <span style="color: #F15B25">Cloud-Based Inventory</span> Software',
    image: OfficeImg,
    subTexts: [
      "- Monitor stock across all warehouses in real-time.",
      "- Track inventory by SKU, batch number, or product category.",
      "- Instantly locate items for faster order processing.",
      "- Easily conduct stock audits and reconciliations.",
    ],
  },
  {
    title: 'Simplify <span style="color: #F15B25">Procurement</span> and <span style="color: #F15B25">Vendor</span> Coordination',
    image: OfficeImg,
    subTexts: [
      "- Generate purchase orders with minimal effort",
      "- Track Goods Received Notes (GRN) and supplier performance",
      "- Set reorder levels and automate purchasing decisions",
      "- Use Saniiro’s Inventory Management Software for smooth supply chain operations",
    ],
  },
];

export default function AccountingFeaturesGlance2() {
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
  const headline = 'Revolutionize Inventory & Boost Growth with Saniiro';

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
                      textAlign: {sx:'left', md:'center'}
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





