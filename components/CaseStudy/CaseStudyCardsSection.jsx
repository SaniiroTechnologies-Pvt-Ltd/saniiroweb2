"use client";

import { Box, CardContent, Paper, Stack, styled, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomPagination from "./CaseStudyPagination";
import { Masonry } from "@mui/lab";
import Image from "next/image";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const ViewAllButton = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" mt={4}>
    <Box
      sx={{
        px: 4,               // padding left/right = 32px
        py: 1.5,             // padding top/bottom = 12px
        borderRadius: 1,     // theme.spacing(1) = 8px → 4px if you prefer fixed
        border: "1px solid white",
        backgroundColor: "#FFFFFF",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#F15B25",
          color: "#FFFFFF",
          cursor: "pointer",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: { xs: "16px", md: "18px" },
          fontWeight: 600,
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        View all
      </Typography>
    </Box>
  </Stack>
);

const ShareExperienceBox = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: 'primary.main',
        py: { xs: 6, md: 10 },
        px: 2,
        textAlign: 'center',
        boxSizing: "border-box",
      }}
    >
      <Stack spacing={2} alignItems="center" justifyContent="center">
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            fontFamily: 'Work Sans',
            fontSize: { xs: '24px', sm: '28px', md: '35px' },
            color: 'primary.contrastText',
          }}
        >
          Share your experience with us
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Work Sans',
            fontSize: { xs: '14px', md: '18px' },
            fontWeight: 400,
            color: 'primary.contrastText',
            maxWidth: '600px',
          }}
        >
          We love to hear from you and we are always looking to improve our
          services.
        </Typography>

        <Link href="/Resources/Testimonials/now" style={{ textDecoration: 'none' }}>
          <Box
            onClick={() => window.scrollTo(0, 0)}
            sx={{
              mt: 4,
              backgroundColor: 'common.white',
              color: 'common.black',
              px: 6,
              py: 2,
              borderRadius: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'secondary.main',
                color: 'secondary.contrastText',
              },
              cursor: 'pointer',
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Work Sans',
                fontSize: { xs: '16px', md: '18px' },
                fontWeight: 600,
                color: 'inherit',
              }}
            >
              Share your Story
            </Typography>
          </Box>
        </Link>
      </Stack>
    </Box>
  );
};

const TestimonialsCardsSection = ({ caseStudies }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  // Assuming caseStudies[0] contains TotalCount
  const totalCount = caseStudies[0]?.TotalCount || 0; // Fallback to 0 if not available


  const router = useRouter();

  const handleExploreMoreClick = (slug) => {
    router.push(`/Resources/CaseStudy/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isMobile = useMediaQuery('(max-width:600px)');
  const columnss = isMobile ? 2 : 3;

  return (
    <>
      <Box sx={{
        width: '100%',
        maxWidth: 'xxl',
        mx: 'auto',
        p: { xs: 2, lg: 8 },
        pb: 6,
        backgroundColor: 'primary.main',
        boxSizing: "border-box"
      }}>
        <Masonry columns={columnss} spacing={{ xs: 1.5, md: 2, lg: 3 }}>
          {caseStudies.map((study, index) => (
            <Item key={index} elevation={3}
              width={{
                xs: "100%",
                md: "350px",
                lg: "300px",
                xl: "350px",
              }}
              height={'auto'}
              sx={{ borderRadius: 2 }}>
              <CardContent sx={{ p: { xs: 1, lg: 4 }, display: 'flex', flexDirection: 'column' }}>

                {/* CaseStudy Image */}
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: '60px', lg: '101.52px' },
                    height: { xs: '20px', lg: '32.71px' },
                    mb: 1,
                  }}
                >
                  <Image
                    // src={study.BrandLogo}
                    src="/saniiro.svg"
                    alt="Saniiro Logo"
                    fill
                    sizes="(max-width: 768px) 50px, 101.52px"
                    style={{ objectFit: 'contain' }}
                  />
                </Box>

                {/* CaseStudy Title */}
                <Typography
                  variant="subtitle1"
                  fontSize={{ sx: 9, md: 20 }}
                  fontWeight={400}
                  color="text.secondary"
                  fontFamily="Work Sans"
                  lineHeight={{ xs: 1.1, lg: 1.6 }}
                  letterSpacing={{ xs: 0, lg: 0.2 }}
                  textAlign={'left'}
                  mb={1}
                >
                  {study.Title}
                </Typography>

                {/* CaseStudy Description */}
                <Typography
                  variant="body2"
                  fontSize={{ sx: 16, md: 20 }}
                  fontWeight={400}
                  lineHeight={1.5}
                  letterSpacing={0.2}
                  textAlign={'left'}
                  mb={1}
                  dangerouslySetInnerHTML={{ __html: study.Description }}
                />

                {/* CaseStudy ReadMore Text and Icon */}
                <Typography
                  fontSize={{ sx: '6px', md: 20 }}
                  fontWeight={600}
                  color="primary.light"
                  fontFamily="Work Sans"
                  lineHeight={1.6}
                  letterSpacing={0.2}
                  textAlign={'left'}
                  mb={1}
                  display={'flex'}
                  flexDirection={'row'}
                  alignContent={'center'}
                  onClick={() => handleExploreMoreClick(study.Slug)}
                >
                  Read More
                  <ArrowRightAltIcon
                    sx={{
                      fontSize: "14px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>

                <Typography variant="subtitle2" fontSize={15} fontWeight={500} fontFamily="Work Sans">
                  {study.Author},
                </Typography>

                <Typography
                  fontSize={10}
                  fontWeight={400}
                  color="text.secondary"
                  fontFamily="Work Sans"
                >
                  {study.Designation}
                </Typography>

              </CardContent>
            </Item>
          ))}
        </Masonry>

        <CustomPagination
          totalCount={totalCount} // or FilteredCount if filtered
          pageSize={9}
          currentPage={currentPage}
          onChange={(value) => setCurrentPage(value)} // update state and refetch
        />

        <ViewAllButton />
      </Box >
      <ShareExperienceBox />

    </>
  );
};

export default TestimonialsCardsSection;
