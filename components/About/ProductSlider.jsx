"use client";

import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../assets/logo1.png";
// import logo2 from "../assets/logo2.png";
// import logo3 from "../assets/logo3.png";
import Img from "../assets/Img.png";
import { Box, Stack, Typography, Button, Container, Avatar } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import apiEndpoints from "@/utils/apiEndpoints";

const ProductSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState({});

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${apiEndpoints.review}`);
        setReviews(response.data.Data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  const toggleReview = (reviewId) => {
    setExpandedReviews(prev => ({
      ...prev,
      [reviewId]: !prev[reviewId]
    }));
  };

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <Box width="100%" mt={5} backgroundColor={'background.default'} py={{ lg: 10 }}>
      <Carousel
        responsive={responsive}
        autoPlay
        showDots
        infinite
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customDot={<Box sx={{ width: 8, height: 8, bgcolor: "#F15B25", borderRadius: "50%", mx: 0.5 }} />}
        dotListClass="custom-dot-list"
        containerClass="carousel-container"
        itemClass="carousel-item"
        customTransition="transform 300ms ease-in-out"
        transitionDuration={300}
        ssr
        deviceType="desktop"
        itemAriaLabel="Review card"
        renderButtonGroupOutside
        renderDotsOutside
        className="review-carousel"
      >
        {reviews.map((review, index) => (
          <Stack
            key={review.id || index}
            justifyContent='center'
            alignItems="center"
            display={'flex'}
            flexDirection={"column"}
            p={2}
            mx={2}
            sx={{ height: "100%", minHeight: "80px", }}

          >
            <Stack
              bgcolor="background.paper"
              width="90%"
              boxShadow="0 4px 20px rgba(0,0,0,0.1)"
              gap={3}
              direction="row"
              p={3}
              borderRadius={2}
              sx={{
                height: "100%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Stack gap={2} position="relative" width="90%">
                {/* <Image
                    src={logo1}
                    alt={`Logo ${index + 1}`}
                    style={{ width: "100px", height: "40px", padding: "0 10px" }}
                  /> */}

                <Typography
                  component={'div'}
                  variant="body1"
                  color="text.secondary"
                  style={{
                    textAlign: "justify",
                    lineHeight: 1.6,
                    mb: 2,
                    position: "relative",
                    "&::before": {
                      content: '"""',
                      position: "absolute",
                      top: -20,
                      right: 0,
                      color: "#248F41",
                      fontSize: "100px",
                      lineHeight: 1,
                      opacity: 0.2,
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: expandedReviews[review.id] ? review.Review : truncateText(review.Review)
                  }}
                />

                {review.Review.length > 150 && (
                  <Button
                    onClick={() => toggleReview(review.id)}
                    sx={{
                      color: "secondary.main",
                      textTransform: "none",
                      alignSelf: "flex-end",
                      "&:hover": {
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {expandedReviews[review.id] ? "Show less" : "Show more"}
                  </Button>
                )}

                <Stack direction="row" gap={2} alignItems="center" mt="auto">
                  <Stack
                    direction="row"
                    sx={{
                      // width: { xs: "50px", sm: "60px", md: "80px" },
                      // height: { xs: "50px", sm: "60px", md: "80px" },
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "2px solid",
                      borderColor: 'secondary.main'
                    }}
                  >
                    <Avatar
                      alt={review.Name}
                      src={review.ImageName || Img}
                      sx={{ width: 48, height: 48 }}
                    />
                  </Stack>
                  <Stack>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="text.primary"
                      sx={{ fontSize: { xs: "14px", md: "18px" } }}
                    >
                      {review.Name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: { xs: "12px", md: "14px" } }}
                    >
                      {review.Designation}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductSlider;
