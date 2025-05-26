
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
  Stack,
  useTheme
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
  const theme = useTheme();

  const displayPrice = billingPeriod === 'Yearly' ? yearlyPrice : price;
  const numberFormat = new Intl.NumberFormat('en-IN', {
    style: 'currency', // 'decimal', 'currency', 'percent'
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  const formattedPrice = numberFormat.format(displayPrice);

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
        transform: isPopular ? 'scale(1.05)' : 'none',
        boxShadow: isPopular ? 8 : 1,
        border: isPopular ? `1px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.common.white}`,
        overflow: 'visible',
        borderRadius: 2,
        transition: 'transform 0.3s, box-shadow 0.3s',
        width: '220px',
        margin: '0px',
        '&:hover': {
          boxShadow: isPopular ? 10 : 4,
          transform: isPopular ? 'scale(1.07)' : 'scale(1.02)'
        }
      }}
    >

      {isPopular && (
        <Chip
          label="Most Popular"
          sx={{
            backgroundColor: 'primary.main',
            color: 'common.white',
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            fontWeight: '600',
            px: 0,
            fontSize: 10,
          }}
        />
      )}

      <CardHeader
        title={title.replace(/saniiro/i, "").trim()}
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
              Save {numberFormat.format(price * 12 - yearlyPrice)}
            </Typography>
          )}
        </Box>

        <Box sx={{ borderTop: '1px solid #e0e0e0', my: 0, pt: 1 }} />

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
            size="small"
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
            Compare Detail
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
