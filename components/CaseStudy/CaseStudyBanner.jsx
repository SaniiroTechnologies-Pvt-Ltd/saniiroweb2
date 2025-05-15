import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import NavigationAppbar from "@/components/Navbar/NavigationAppbar";


const CaseStudyBanner = () => {
  return (
    <>
      {/* desktop view  */}

      <Box
        bgcolor={"primary.main"}
        className="textured-background"
        boxSizing={'border-box'}
      >
        <NavigationAppbar isAppbarLight={true} />
        <Grid container spacing={4} justifyContent="center" height={{ xs: '45dvh', sm: '35dvh', md: '50dvh', lg: '50dvh', xl: '60dvh' }}>
          <Grid item width={'100%'}>
            <Typography
              variant={'h4'}
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={{
                xs: "30px",
                sm: "30px",
                md: "50px",
                lg: "60px",
                xl: "75px",
              }}
              letterSpacing={1}
              fontWeight={"bold"}
              lineHeight={{ xs: 1.3, lg: 1 }}
              color={"#4DB267"}
            >
              Trusted by Over{" "}
            </Typography>

            <Typography
              variant={'h4'}
              textAlign={"center"}
              textTransform={"uppercase"}
              letterSpacing={1}
              fontWeight={"bold"}
              lineHeight={{ xs: 1.3, lg: 1 }}
              color={"transparent"}
              className="text-stroke"
              fontSize={{
                xs: "30px",
                sm: "30px",
                md: "50px",
                lg: "60px",
                xl: "75px",
              }}
            >
              250,000+
            </Typography>

            <Typography
              variant={'h4'}
              textAlign={"center"}
              textTransform={"uppercase"}
              fontSize={{
                xs: "30px",
                sm: "30px",
                md: "50px",
                lg: "60px",
                xl: "75px",
              }}
              letterSpacing={1}
              fontWeight={"bold"}
              color={"white"}
              lineHeight={{ xs: 1.3, lg: 1 }}
            >
              Businesses Worldwide
            </Typography>

          </Grid>
        </Grid>
        {/* <Stack gap={4} py={14}>
          <Stack
            p={"50px 0px 0 0"}
            gap={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack direction={"row"}>
              <Typography
                textTransform={"uppercase"}
                fontSize={"75px"}
                letterSpacing={1}
                fontWeight={"bold"}
                lineHeight={1}
                color={"tertiary.main"}
              >
                Trusted by Over
              </Typography>
              <Typography
                textTransform={"uppercase"}
                fontSize={"75px"}
                letterSpacing={1}
                fontWeight={"bold"}
                color={"transparent"}
                lineHeight={1}
                className="text-stroke"
              >
                &nbsp;
                250,000+
              </Typography>
            </Stack>
            <Typography
              textTransform={"uppercase"}
              fontSize={"75px"}
              letterSpacing={1}
              fontWeight={"bold"}
              color={"white"}
              lineHeight={1}
            >
              Businesses Worldwide
            </Typography>
          </Stack>
        </Stack> */}
      </Box>

    </>
  );
};

export default CaseStudyBanner;
