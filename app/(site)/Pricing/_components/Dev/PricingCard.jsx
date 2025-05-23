
import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Stack
} from '@mui/material';
import CompareIcon from '@mui/icons-material/Compare';
import { useRouter } from 'next/navigation';

const PricingCard = ({
  title,
  price,
  slug,
  yearlyPrice,
  billingPeriod,
  features,
  isPopular,
  buttonText = "Get Started",
  onCompare
}) => {

  const router = useRouter();

  const displayPrice = billingPeriod === 'Yearly' ? yearlyPrice : price;
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(displayPrice);

  const pushToCheckoutPage = () => {
    sessionStorage.setItem("price", price);
    sessionStorage.setItem("planName", title);
    router.push(`/Pricing/checkout/${slug}`);
  }

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transform: isPopular === 1 ? 'scale(1.05)' : 'none',
        boxShadow: isPopular === 1 ? 8 : 1,
        border: isPopular ? '1px solid #3f51b5' : '1px solid #e0e0e0',
        overflow: 'visible',
        borderRadius: 2,
        transition: 'transform 0.3s, box-shadow 0.3s',
        width: { md: '110px', lg: '160px', xl: '230px' },
        margin: '10px',
        '&:hover': {
          boxShadow: isPopular === 1 ? 10 : 4,
          transform: isPopular === 1 ? 'scale(1.07)' : 'scale(1.02)'
        }
      }}
    >
      {isPopular === 1 && (
        <Chip
          label="Most Popular"
          color="primary"

          sx={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            fontWeight: 'bold',
            px: 0,
            fontSize: 10,
          }}
        />
      )}

      <CardHeader
        title={title}
        titleTypographyProps={{ variant: 'h6', align: 'center', fontWeight: 'bold' }}
        sx={{ mt: 2 }}
      />

      <CardContent sx={{ pt: 1, px: 3, flex: '1 1 auto' }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h5" component="div" fontWeight="bold">
            {formattedPrice}
            <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              /{billingPeriod === 'Yearly' ? 'year' : 'month'}
            </Typography>
          </Typography>

          {billingPeriod === 'Yearly' && (
            <Typography variant="body2" color="success.main" fontWeight="medium">
              Save ₹{(price * 12 - yearlyPrice).toLocaleString('en-IN')}
            </Typography>
          )}
        </Box>

        {/* <Box sx={{ borderTop: '1px solid #e0e0e0', my: 2, pt: 1 }} /> */}

        {/* <List disablePadding sx={{ mb: 1 }}>
          {features.slice(0, 5).map((feature, index) => (
            <ListItem key={index} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckIcon fontSize="small" color={isPopular ? "primary" : "action"} />
              </ListItemIcon>
              <ListItemText 
                primary={feature} 
                primaryTypographyProps={{ 
                  variant: 'body2',
                  fontWeight: 'medium'
                }} 
              />
            </ListItem>
          ))}
        </List> */}
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Stack spacing={1} width="100%">
          <Button
            variant={isPopular ? "contained" : "outlined"}
            fullWidth
            color="primary"
            size="medium"
            sx={{
              borderRadius: 1,
              py: 1,
              fontWeight: 'medium',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
              }
            }}
            onClick={() => pushToCheckoutPage()}
          >
            {buttonText}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            size="medium"
            startIcon={<CompareIcon />}
            onClick={onCompare}
            sx={{
              borderRadius: 1,
              py: 1,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
              }
            }}
          >
            Compare
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
