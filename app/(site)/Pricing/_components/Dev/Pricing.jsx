"use client";

import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import PricingToggle from './PricingToggle';
import PricingCard from './PricingCard';
import PricingComparison from './PricingComparison';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import the carousel styles
import useSnackbar from '@/hooks/useSnackbar';
import PricingCardSkeleton from './PricingCardSkeleton'; // Import the skeleton component

const RenderPricingCard = ({ plan, planIndex, planNames, billingPeriod, onCompare }) => {
  const planName = plan.Name.replace(/saniiro/i, "").trim();
  // const buttonText = ['Standard'].find(o => o === planName) ? "Start Free Trial"
  //   : ['Professional', 'Expert'].find(o => o === planName) ? 'Buy Now'
  //     : 'Get Started';
  const buttonText = [planNames[2]].find(o => o === planName) ? "Start Free Trial"
    : [planNames[3], planNames[4]].find(o => o === planName) ? 'Buy Now'
      : 'Get Started';

  return (<PricingCard
    key={planIndex}
    title={planName}
    price={plan.price}
    slug={plan.Slug}
    yearlyPrice={plan.price}
    features={plan.features}
    isPopular={plan.IsPopular === 1 ? 1 : 0}
    buttonText={buttonText}
    billingPeriod={billingPeriod}
    onCompare={() => onCompare(planIndex)}
  />
  )
};

const Pricing = ({ subscriptionPlans }) => {
  const triggerSnackbar = useSnackbar();

  const [billingPeriod, setBillingPeriod] = useState('Monthly');
  const [showComparison, setShowComparison] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null); // user selected plan to compare
  const [loading, setLoading] = useState(true);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [plans, setPlans] = useState([]);
  const [comparisons, setComparisons] = useState([]);

  useEffect(() => {
    if (subscriptionPlans && subscriptionPlans.length > 0) {
      const firstPlan = subscriptionPlans[0];
      setLoading(false); // Set loading to false after data is set

      // Extract category names, plans, and comparisons data from the first plan
      const categories = subscriptionPlans.map(plan => plan.CategoryName); // ['Monthly', 'Yearly']
      setAvailableCategories(categories); // Set the available categories
      setPlans(firstPlan.Price); // Set plans/packages from the first plan
      setComparisons(firstPlan.Compare); // Set comparisons from the first plan
      setBillingPeriod(categories[0]); // Set 'Monthly' billing period to the first category name
    } else {
      // Handle the case where subscriptionPlans is empty or not an array
      triggerSnackbar('No subscription plans available.', 'error');
      setLoading(false); // Set loading to false
    }
  }, [subscriptionPlans]);

  // switch between 'Monthly' and 'Yearly', default 'Monthly'
  const handleBillingChange = (newBillingPeriod) => {
    setBillingPeriod(newBillingPeriod);
    // const newPlan = subscriptionPlans.find(plan => plan.CategoryName === newBillingPeriod);
    // // Update plans and comparisons based on the new selected plan
    // if (newPlan) {
    //   setPlans(newPlan.Price); // Update plans
    //   setComparisons(newPlan.Compare); // Update comparisons
    // }
  };

  const handleCompare = (planIndex) => {
    setSelectedPlan(planIndex);
    setShowComparison(true);
    // Scroll to comparison table
    setTimeout(() => {
      const comparisonElement = document.getElementById('pricing-comparison');
      if (comparisonElement) {
        comparisonElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 720 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 720, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Extract plan names from selectedPlan.Price
  // const planNames = plans?.map(p => p.Name.replace(/saniiro/i, "").trim()) || [];
  const planNames = plans?.map(p => p.Name) || [];

  return (
    <Box sx={{
      bgcolor: 'background.default',
      minHeight: 'auto',
      py: 4,
      animation: 'fadeIn 0.5s ease-in-out',
      '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    }}>

      {/* Toggle button */}
      <PricingToggle
        billingPeriod={billingPeriod}
        handleBillingChange={handleBillingChange}
        categories={availableCategories}
        discountLabel={'Save 20%'}
        loading={loading}
      />

      <Container sx={{ mb: 2, px: { xs: 1, md: 4 } }}>
        {/* Conditional rendering based on screen size */}
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          {/* Flex layout for screens above 720px */}
          {loading ? (
            <Stack sx={{ display: 'flex', direction: 'row', justifyContent: 'center', gap: 2, }} >
              {[...Array(5)].map((_, index) => (
                <PricingCardSkeleton key={index} />
              ))}
            </Stack>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4 }}>
              {plans.map((plan, index) => {

                const currentPlanName = plan.Name;
                const buttonText = [planNames[2]].find(o => o === currentPlanName) ? "Start Free Trial"
                  : [planNames[3], planNames[4]].find(o => o === currentPlanName) ? 'Buy Now'
                    : 'Get Started';

                return (<PricingCard
                  key={index}
                  title={currentPlanName}
                  price={plan.price}
                  slug={plan.Slug}
                  yearlyPrice={plan.price}
                  features={plan.features}
                  isPopular={plan.IsPopular === 1}
                  buttonText={buttonText}
                  billingPeriod={billingPeriod}
                  onCompare={() => handleCompare(index)}
                />)
              })}

              {/* {plans.map((plan, index) =>
                <RenderPricingCard
                  key={index}
                  plan={plan}
                  planNames={planNames}
                  planIndex={index}
                  billingPeriod={billingPeriod}
                  onCompare={handleCompare} />)} */}
            </Box>
          )}
        </Box>

        {/* Carousel for mobile devices rendering */}
        <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
          {/* Carousel for screens below 720px */}
          {loading ? (
            <Stack sx={{ display: 'flex', direction: 'row', gap: 2, justifyContent: 'center' }} >
              {[...Array(5)].map((_, index) => (
                <PricingCardSkeleton key={index} />
              ))}
            </Stack>
          ) : (
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
              {plans.map((plan, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <RenderPricingCard
                    plan={plan}
                    planIndex={index}
                    planNames={planNames}
                    billingPeriod={billingPeriod}
                    onCompare={handleCompare}
                  />
                </div>
              ))}
            </Carousel>
          )}
        </Box>

        {comparisons && showComparison && (
          <Box id="pricing-comparison" sx={{
            mt: '4rem',
            scrollMarginTop: '5rem',
            animation: 'fadeInUp 0.5s ease-in-out',
            '@keyframes fadeInUp': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              fontWeight="medium"
              sx={{ mb: 3 }}
            >
              {billingPeriod !== null ? `${plans[selectedPlan].Name} Plan Comparison` : 'Plans Comparison'}
            </Typography>
            <PricingComparison comparisons={comparisons} plans={plans} highlightPlan={selectedPlan} planNames={planNames} />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Pricing;
