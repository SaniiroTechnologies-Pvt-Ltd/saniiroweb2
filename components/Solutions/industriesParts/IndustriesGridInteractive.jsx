import { Box, ButtonBase, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "react-multi-carousel/lib/styles.css";

import { Apartment, Checkroom, EnergySavingsLeaf, HomeWork, LocalGasStation, LocalMall, LocalShipping, MedicalServices, PrecisionManufacturing, ShoppingCart, Storefront, SupportAgent } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const industries = [
  { title: 'Retailers', icon: <Storefront color="primary" fontSize="large" /> },
  { title: 'Manufacturing', icon: <PrecisionManufacturing color="primary" fontSize="large" /> },
  { title: 'Wholesale', icon: <LocalMall color="primary" fontSize="large" /> },
  { title: 'Pharmaceutical', icon: <MedicalServices color="primary" fontSize="large" /> },
  { title: 'Gas Industry', icon: <LocalGasStation color="primary" fontSize="large" /> },
  { title: 'Service Providers', icon: <SupportAgent color="primary" fontSize="large" /> },
  { title: 'Real Estate', icon: <HomeWork color="primary" fontSize="large" /> },
  { title: 'Plywood & Marble', icon: <Apartment color="primary" fontSize="large" /> },
  { title: 'Renewable Energy', icon: <EnergySavingsLeaf color="primary" fontSize="large" /> },
  { title: 'Logistics & Supply Chain', icon: <LocalShipping color="primary" fontSize="large" /> },
  { title: 'E-commerce', icon: <ShoppingCart color="primary" fontSize="large" /> },
  { title: 'Khadi & Gram Udyog', icon: <Checkroom color="primary" fontSize="large" /> },
];

const emptyCellStyle = {
  flex: 1,
  minWidth: '200px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}

const cellStyle = {
  ...emptyCellStyle,
  transition: 'background 0.2s',
  '&:hover': {
    backgroundColor: 'rgba(5, 41, 115, 0.05)',
  },
  '& .custom-ripple': {
    backgroundColor: 'rgba(5, 41, 115, 0.2)',
  },
}

const withRightBorder = {
  borderRight: '2px solid #ddd',
}

const withBottomRightBorder = {
  ...withRightBorder,
  borderBottom: '2px solid #ddd',
}

const slugify = (text) => text.replace(/[^a-zA-Z0-9]+/g, '-').replace(/(^-|-$)/g, '');


const IndustriesGridInteractive = () => {

  const router = useRouter();
  const theme = useTheme();

  const isLg = useMediaQuery(theme.breakpoints.up('lg')); // ≥1200px
  const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg')); // 900-1200
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600-900
  const isXs = useMediaQuery(theme.breakpoints.down('sm')); // <600

  const itemsPerRow = isLg ? 4 : isMd ? 3 : isSm ? 2 : 1;


  const rows = [];
  for (let i = 0; i < industries.length; i += itemsPerRow) {
    rows.push(industries.slice(i, i + itemsPerRow));
  }

  const handleClick = (title) => {
    const slug = slugify(title)
    router.push(`By-Industries/${slug}`)
  }

  return (
    <React.Fragment>

      <Box width="100%" padding="40px" boxSizing="border-box" mb={5} backgroundColor={"#F1F1F1"}>
        {/* Header Title */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Industries We Serve
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Explore a wide range of industries we empower with our solutions.
          </Typography>
        </Box>

        <Stack spacing={0}>
          {rows.map((row, rowIndex) => (
            <Box key={rowIndex} display="flex" flexWrap="wrap">
              {row.map((item, colIndex) => {
                const isLastInRow = colIndex === row.length - 1;
                const isLastRow = rowIndex === rows.length - 1;

                const borderStyles = {
                  ...(isLastInRow ? {} : withRightBorder),
                  ...(isLastRow ? {} : { borderBottom: '2px solid #ddd' }),
                };

                return (
                  <ButtonBase
                    key={item.title}
                    onClick={() => handleClick(item.title)}
                    TouchRippleProps={{ classes: { rippleVisible: 'custom-ripple' } }}
                    sx={{ ...cellStyle, ...borderStyles, minWidth: 0, flex: 1 }}
                  >
                    {item.icon}
                    <Typography mt={1}>{item.title}</Typography>
                  </ButtonBase>
                );
              })}

              {/* Fill empty cells if last row is not full */}
              {row.length < itemsPerRow &&
                Array.from({ length: itemsPerRow - row.length }).map((_, i) => (
                  <Box
                    key={`empty-${i}`}
                    sx={{
                      ...emptyCellStyle,
                      ...(i < itemsPerRow - row.length - 1 ? withRightBorder : {}),
                      ...(rowIndex !== rows.length - 1 ? { borderBottom: '2px solid #ddd' } : {}),
                    }}
                  />
                ))}
            </Box>
          ))}
        </Stack>
      </Box>


      {/* <Stack spacing={0}>
        <Box display="flex">
          {industries.slice(0, 4).map((item, i) => (
            <ButtonBase
              key={i}
              onClick={() => handleClick(item.title)}
              TouchRippleProps={{ classes: { rippleVisible: 'custom-ripple' } }}
              sx={{ ...cellStyle, ...(i < 3 ? withBottomRightBorder : { borderBottom: '2px solid #ddd' }), }}
            >
              {item.icon}
              <Typography mt={1}>{item.title}</Typography>
            </ButtonBase>
          ))}
        </Box>

        <Box display="flex">
          {industries.slice(4, 8).map((item, i) => (
            <ButtonBase
              key={i}
              onClick={() => handleClick(item.title)}
              TouchRippleProps={{ classes: { rippleVisible: 'custom-ripple' } }}
              sx={{ ...cellStyle, ...(i < 3 ? withBottomRightBorder : { borderBottom: '2px solid #ddd' }) }}
            >
              {item.icon}
              <Typography mt={1}>{item.title}</Typography>
            </ButtonBase>
          ))}
        </Box>

        <Box display="flex">
          {industries.slice(8, 12).map((item, i) => (
            <ButtonBase
              key={i}
              onClick={() => handleClick(item.title)}
              TouchRippleProps={{ classes: { rippleVisible: 'custom-ripple' } }}
              sx={{ ...cellStyle, ...(i < 3 ? withBottomRightBorder : { borderBottom: '2px solid #ddd' }) }}
            >
              {item.icon}
              <Typography mt={1}>{item.title}</Typography>
            </ButtonBase>
          ))}
        </Box>

        <Box display="flex">
          {[...Array(4)].map((_, i) => (
            <Box key={i} sx={{ ...emptyCellStyle, ...(i < 3 ? withRightBorder : {}) }} />
          ))}
        </Box>
      </Stack> */}

    </React.Fragment>
  );
};

export default IndustriesGridInteractive;
