import React from 'react';
import { Box, ToggleButtonGroup, ToggleButton, Stack, Typography, Skeleton } from '@mui/material';

const PricingToggle = ({ billingPeriod, handleBillingChange, categories, discountLabel, loading }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', gap: 2, mb: 5 }}>
      {loading ? (
        <Stack direction="row" spacing={2} borderRadius={30} p={0.5} boxShadow={1} mt={-4}>
          <Skeleton variant="rectangular" borderRadius={30} width={100} height={40} />
          <Skeleton variant="rectangular" borderRadius={30} width={100} height={40} />
        </Stack>
      ) : (
        <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 30, p: 0.5, boxShadow: 1, mt: -4 }}>
          <ToggleButtonGroup
            exclusive
            value={billingPeriod}
            onChange={(e, newValue) => {
              if (newValue !== null) {
                handleBillingChange(newValue);
              }
            }}
            sx={{
              '& .MuiToggleButtonGroup-grouped': {
                border: 0,
                borderRadius: 30,
                px: 3,
                py: 1,
                fontSize: '0.875rem',
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  }
                }
              }
            }}
          >
            {categories.map((category) => (
              <ToggleButton key={category} value={category}>
                {category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      )
      }

      {
        billingPeriod === 'Yearly' && (
          <Stack direction={"row"} sx={{ zIndex: "1" }}>
            <Typography
              sx={{
                paddingY: 3,
                paddingX: "8px",
                fontFamily: "Work Sans",
                fontSize: "10px",
                fontWeight: "bold",
                lineHeight: "10px",
                letterSpacing: "0em",
                textAlign: "center",
                textTransform: "uppercase",
                color: "secondary.main",
              }}
            >
              {discountLabel}
            </Typography>
            <Box
              component={"img"}
              src="/images/curveArrow.png"
              alt="arrow"
              sx={{
                transform: "scaleX(-1)",
                width: "50px",
                height: "50px",
              }}
            />
          </Stack>
        )
      }
    </Box >
  );
};

export default PricingToggle;
