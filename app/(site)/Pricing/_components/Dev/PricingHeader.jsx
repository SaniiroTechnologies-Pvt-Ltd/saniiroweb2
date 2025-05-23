
import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const PricingHeader = ({ title = "Simple, Transparent Pricing", subtitle = "Choose the perfect plan for your business needs. All plans include our core features with no hidden costs." }) => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 6 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        fontWeight="bold"
        sx={{
          background: 'linear-gradient(90deg, #3f51b5 0%, #7b1fa2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2
        }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
        {subtitle}
      </Typography>
    </Container>
  );
};

export default PricingHeader;
