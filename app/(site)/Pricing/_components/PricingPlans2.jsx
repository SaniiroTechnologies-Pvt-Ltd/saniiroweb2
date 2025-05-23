
import React, { useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import PricingHeader from '../components/PricingHeader';
import PricingToggle from '../components/PricingToggle';
import PricingCard from '../components/PricingCard';
import PricingFAQ from '../components/PricingFAQ';
import PricingComparison from '../components/PricingComparison';

const PricingPlans2 = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [showComparison, setShowComparison] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBillingChange = (newBillingPeriod) => {
    setBillingPeriod(newBillingPeriod);
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

  const pricingPlans = [
    {
      title: 'Starter',
      price: 999,
      yearlyPrice: 9599,
      features: [
        'Up to 3 users',
        'Basic invoicing',
        'Expense tracking',
        'GST ready',
        'Email support'
      ],
      buttonText: 'Get Started',
      isPopular: false
    },
    {
      title: 'Basic',
      price: 1999,
      yearlyPrice: 19199,
      features: [
        'Up to 5 users',
        'Standard invoicing',
        'Expense tracking',
        'GST ready',
        'Basic reports'
      ],
      buttonText: 'Get Started',
      isPopular: false
    },
    {
      title: 'Standard',
      price: 2499,
      yearlyPrice: 23999,
      features: [
        'Up to 10 users',
        'Advanced invoicing',
        'Expense tracking',
        'Comprehensive reports',
        '24/7 chat support'
      ],
      buttonText: 'Start Free Trial',
      isPopular: true
    },
    {
      title: 'Premium',
      price: 4999,
      yearlyPrice: 47999,
      features: [
        'Unlimited users',
        'Advanced invoicing with automations',
        'Expense tracking with approvals',
        'Advanced analytics & dashboards',
        'Priority 24/7 support'
      ],
      buttonText: 'Contact Sales',
      isPopular: false
    },
    {
      title: 'Enterprise',
      price: 9999,
      yearlyPrice: 95999,
      features: [
        'Unlimited users',
        'Custom modules',
        'API access',
        'Dedicated success manager',
        'White-label solution'
      ],
      buttonText: 'Contact Sales',
      isPopular: false
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: 'background.default', 
      minHeight: '100vh',
      animation: 'fadeIn 0.5s ease-in-out',
      '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    }}>
      <PricingHeader 
        title="Simple, Transparent Pricing" 
        subtitle="Choose the perfect plan for your business needs"
      />
      
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <PricingToggle 
          billingPeriod={billingPeriod}
          handleBillingChange={handleBillingChange}
        />
        
        <Grid 
          container 
          spacing={2} 
          sx={{ 
            mb: 8,
            display: 'flex',
            justifyContent: 'center',
            px: { xs: 1, md: 4 }
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Grid 
              item 
              key={index} 
              xs={12}
              sm={6}
              md={2.4}
              sx={{
                display: 'flex',
                mt: plan.isPopular ? { xs: 4, md: 0 } : 0,
                mb: plan.isPopular ? { xs: 4, md: 0 } : 0,
                zIndex: plan.isPopular ? 2 : 1,
                transition: 'all 0.3s ease',
                animation: `cardAppear 0.5s ease-in-out ${index * 0.1}s both`,
                '@keyframes cardAppear': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' }
                }
              }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                yearlyPrice={plan.yearlyPrice}
                features={plan.features}
                isPopular={plan.isPopular}
                buttonText={plan.buttonText}
                billingPeriod={billingPeriod}
                onCompare={() => handleCompare(index)}
              />
            </Grid>
          ))}
        </Grid>
        
        {showComparison && (
          <Box id="pricing-comparison" sx={{ 
            scrollMarginTop: '2rem',
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
              {selectedPlan !== null ? `${pricingPlans[selectedPlan].title} Plan Comparison` : 'Plans Comparison'}
            </Typography>
            <PricingComparison highlightPlan={selectedPlan} />
          </Box>
        )}
      </Container>
      
      <PricingFAQ />
    </Box>
  );
};

export default PricingPlans2;
