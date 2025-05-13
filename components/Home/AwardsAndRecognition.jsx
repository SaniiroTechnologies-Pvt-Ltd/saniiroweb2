"use client";

import { Box, Stack, Typography, useTheme, useMediaQuery, Grid, Card, CardMedia, CardContent } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Review1 from "../assets/Google.jpg";
import Review2 from "../assets/Indiamart.jpg";
import Review3 from "../assets/softwaresuggest.jpg";
import Review4 from "../assets/Justdial.jpg";
import Review5 from "../assets/Glassdoor.jpg";
import Badge2 from "../assets/badge2.svg";
import Badge4 from "../assets/badge4.svg";
import Badge5 from "../assets/index.png";
import Badge6 from "../assets/badge6.png";
import Badge7 from "../assets/badge10.png";
import Badge8 from "../assets/badge8.png";

const RecognitionShowcase = () => {
 const theme = useTheme();

 const badges = [
  { src: Badge5, title: "Committed To Deliver", year: "2021" },
  { src: Badge2, title: "Top Accounting Software", year: "2022" },
  { src: Badge6, title: "Trending Brand", year: "2022" },
  { src: Badge4, title: "Top ERP Software", year: "2023" },
  { src: Badge7, title: "Best Usability", year: "2023" },
  { src: Badge8, title: "Highest Satisfaction", year: "2024" },
 ];

 const reviews = [
  { src: Review1, title: "Google 4.8/5", link: "https://www.google.com/search?q=saniiro+technologies+private+limited#lrd=0x396db5d77b0ba47d:0xffe52a26f83d76e9,1" },
  { src: Review2, title: "Indiamart 5/5", link: "https://www.indiamart.com/proddetail/saniiro-retail-billing-software-21781701512.html" },
  { src: Review3, title: "SW Suggest 4.8/5", link: "https://www.softwaresuggest.com/saniiro" },
  { src: Review4, title: "Justdial 4.8/5", link: "https://www.justdial.com/jdmart/Jaipur/Saniiro-Technologies-Pvt-Ltd" },
  { src: Review5, title: "Glassdoor 4/5", link: "https://www.glassdoor.co.in/Reviews/Saniiro-Technologies-Reviews-E4434548.htm" },
 ];

 return (
  <Box maxWidth="xxl" mx="auto" px={{ xs: 2, sm: 4, md: 24 }} py={{ xs: 4, md: 8 }}>
   <Typography
    variant="h4"
    fontWeight="bold"
    textAlign="center"
    mb={6}
    color="primary.main"
   >
    Awards & Recognitions
   </Typography>

   {/* Badges Grid */}
   <Typography
    variant="h6"
    textAlign="center"
    fontWeight={600}
    color="text.secondary"
    mb={2}
   >
    Certificates & Accreditation
   </Typography>
   <Grid container spacing={2} justifyContent="center" mb={6}>
    {badges.map((badge, i) => (
     <Grid item xs={6} sm={4} md={3} lg={2} key={`badge-${i}`}>
      <Card
       elevation={0}
       sx={{
        position: "relative",
        textAlign: "center",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        '&:hover': {
         transform: "scale(1.03)",
        },
       }}
      >
       <Box
        sx={{
         height: {xs:140, lg: 90},
         position: "relative",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "#fafafa",
        }}
       >
        <Image
         src={badge.src}
         alt={`badge-${i}`}
         fill
         style={{ objectFit: "contain" }}
        />
        <Box
         sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.4)",
          color: "white",
          display: {xs: "flex", lg: 'none'},
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          transition: "opacity 0.3s ease",
          '&:hover': {
           opacity: 1,
          },
         }}
        >
         <Typography variant="subtitle1" color={'common.white'} fontWeight={600} fontSize={{xs: '0.9rem'}}>{badge.title}</Typography>
         <Typography variant="caption" color={'common.white'}>{badge.year}</Typography>
        </Box>
       </Box>
       <CardContent sx={{ px: 0, py: 0, height: '32px', pb: 0, display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', justifyContent: 'space-between', }}>
        <Typography variant="subtitle2" fontWeight={600} fontSize={'0.7rem'}>{badge.title}</Typography>
        <Typography variant="caption" color="text.secondary">{badge.year}</Typography>
       </CardContent>
      </Card>
     </Grid>
    ))}
   </Grid>

   {/* Review Platforms Grid */}
   <Typography
    variant="h6"
    textAlign="center"
    fontWeight={600}
    color="text.secondary"
    mb={2}
   >
    Featured On
   </Typography>
   <Grid container spacing={2} justifyContent="center">
    {reviews.map((review, i) => (
     <Grid item xs={6} sm={6} md={4} lg={2.4} key={`review-${i}`}>
      <Card
       elevation={0}
       sx={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "center",
        height: 100,
        p: 2,
        borderRadius: 2,
       }}
      >
       <Link href={review.link} target="_blank" rel="noopener noreferrer">
        <CardMedia
         component="img"
         src={review.src.src}
         alt={`review-${i}`}
         sx={{ objectFit: "fill", maxHeight: 80 }}
        />
       </Link>
       <CardContent sx={{ px:0, my: 'auto' }}>
        <Typography variant="subtitle2" fontSize={{xs: '0.7rem', sm: '0.8rem', md: '0.8rem', lg: '0.7rem' }} fontWeight={600}>{review.title}</Typography>
       </CardContent>
      </Card>
     </Grid>
    ))}
   </Grid>
  </Box>
 );
};

export default RecognitionShowcase;
