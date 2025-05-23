import React from 'react';
import { Card, CardHeader, CardContent, Skeleton, Box } from '@mui/material';

const PricingCardSkeleton = () => {
  return (
    <Card sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', position: 'relative', borderRadius: 2, margin: '10px' }}>
      <CardHeader
        title={<Skeleton variant="text" width="80%" />}
        sx={{ mt: 2 }}
      />
      <CardContent sx={{ flex: '1 1 auto', textAlign: 'center' }}>
        <Box sx={{ mb: 2 }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </Box>
        <Skeleton variant="rectangular" height={100} />
      </CardContent>
    </Card>
  );
};

export default PricingCardSkeleton;
