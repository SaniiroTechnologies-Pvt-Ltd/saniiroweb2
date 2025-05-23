// PricingPlans.jsx
"use client";

import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { useRouter } from "next/navigation";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const PricingPlans = ({ pricingPlans, featureTableRef }) => {

  const theme = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  // console.log('pricingPlans: ', pricingPlans);
  const plans = pricingPlans.Price;

  const pushToCheckoutPage = (plan) => {
    sessionStorage.setItem("price", plan.price);
    sessionStorage.setItem("planName", plan.Name);
    router.push(`/Pricing/checkout/${plan.Slug}`);
  }

  const renderCard = (plan) => (
    <Box

      key={plan.id}
      sx={{
        position: "relative",
        border: `2px solid ${theme.palette.grey[100]}`,
        borderRadius: 2,
        aspectRatio: "16 / 9",
        width: { xs: '80%', md: '204px' },
        height: '230px',
        p: 2,
        mx: 0,
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        '&:hover': {
          borderColor: 'secondary.main',
          boxShadow: 4,
          // Change the color of the icon on hover
          '& .check-icon': {
            color: 'secondary.main',
          },
        },
      }}
    >
      {/* Space for Ribbon */}
      {/* <Box sx={{ height: '12px', backgroundColor: 'ribbonColor', }}> */}
      {/* Ribbon content can go here if needed */}
      {/* </Box> */}

      {/* Flex container for plan name and icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
        {/* <CheckCircleOutlineIcon sx={{ marginRight: 1, fontSize: { xs: 18, md: 16, lg: 18 } }} className="check-icon" /> */}
        <Typography variant="body1"
          fontWeight={600}
          fontSize={{ xs: 18, md: 16, lg: 18 }}
          className="check-icon">{plan.Name}</Typography>
      </Box>

      {/* Ribbon */}
      {plan.IsPopular === 1 && (
        <Box
          sx={{
            position: "absolute",
            top: 4,
            right: 4,
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
            px: 0.5,
            py: 0.5,
            fontSize: 10,
            fontWeight: 600,
            borderRadius: 1,
          }}
        >
          Most Popular
        </Box>
      )}

      <Stack spacing={0} textAlign="center">
        <Typography fontSize={16} fontWeight={600}>₹{plan.price}</Typography>
        <Typography variant="body2" color="text.secondary" textTransform={'capitalize'}>
          {(() => {
            if (plan.Name.includes('Basic') || plan.Name.includes('Lite') || plan.Name.includes('Standard')) {
              return '1 User';
            } else if (plan.Name.includes('Professional')) {
              return "3 Users";
            } else if (plan.Name.includes('Expert')) {
              return "5 Users";
            }
            return '1 User'; // Default case if none match
          })()}
          {/* {" "}{plan.usercondition.slice(1, 5)} */}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => featureTableRef.current.scrollIntoView({ behavior: "smooth" })}
          sx={{
            p: 1,
            borderColor: "#F15B25",
            color: "#F15B25",
            textTransform: "none",
            '&:hover': {
              backgroundColor: '#F15B25',
              color: 'white',
            }
          }}
        >
          Compare
        </Button>

        {/* <Link href={`/Pricing/checkout/${plan.Slug}`} passHref> */}
        <Button
          variant="contained"
          size="small"
          sx={{
            p: 1,
            backgroundColor: "#F15B25",
            color: "white",
            textTransform: "none",
            '&:hover': {
              backgroundColor: '#d0481b',
            }
          }}
          onClick={() => pushToCheckoutPage(plan)}
        >
          {plan.IsFreeTrial === 0 ? "Buy Now" : "Start Free Trial"}
        </Button>
        {/* </Link> */}
      </Stack>
    </Box>
  );

  return (
    <Box width="100%" px={3} py={5}>
      <Typography
        variant="h5"
        textAlign="center"
        mb={3}
        fontWeight="bold"
        color="primary.main"
      >
        Change Plan
      </Typography>

      {isMobile ? (
        <Carousel responsive={responsive} infinite={false} arrows={false}>
          {plans.map(renderCard)}
        </Carousel>
      ) : (
        <Stack direction="row" justifyContent="center" spacing={2}>
          {plans.map(renderCard)}
        </Stack>
      )}
    </Box>
  );
};

export default PricingPlans;
