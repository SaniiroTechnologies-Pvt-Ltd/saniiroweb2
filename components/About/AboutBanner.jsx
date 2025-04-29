import { Stack, Typography } from "@mui/material";
import React from "react";
import Aboutbanner from "../assets/AboutBanner.svg";
import Button from "../utils/Button";
import Image from "next/image";
import Link from "next/link";
import NavLight from "../Navbar/NavLight";

const AboutBanner = () => {
  return (
    <>
      <Stack >
        <Stack
          paddingTop={{ xs: "20px", sm: "25px", md: "0px" }}
          position={"relative"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {/* <NavLight /> */}
          <Stack
            sx={{
              width: "100%",
            }}
          >
            <Image width={"100%"} height={"100%"} src={Aboutbanner} alt="About Banner" />{" "}
          </Stack>

          <Stack
            gap={{ xs: 1, md: 2 }}
            alignItems={"center"}
            position={"absolute"}
            top={{ xs: "10%", md: "20%", }}
          >
            <Typography
              color={"#4DB267"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
              fontSize={{ xs: "12px", sm: "16px", md: "18px", lg: "38px", }}
              textAlign={"center"}
            >
              Welcome to Saniiro
            </Typography>
            <Typography
              color={"#052973"}
              fontWeight={"bold"}
              fontSize={{ xs: "12px", sm: "16px", md: "18px", lg: "46px", }}
              textAlign={"center"}
              width={{ xs: "75%", sm: "75%", md: "80%", lg: "70%", }}
            >
              Online Accounting Software for Every Business
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row", }}
              gap={{ xs: 1, md: 2, }}
              width={{ xs: "100px", sm: "150px", md: "500px", lg: "500px", xl: "500px", }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                LinkComponent={'a'}
                href="/request-demo"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Work Sans",
                  p: { xs: "8px 9px", sm: "8px 10px", md: "8px 12px", lg: "8px 16px", xl: "10px 20px", },
                }}
              >
                <Typography
                  fontSize={{ xs: "8px", sm: "12px", md: "16px", lg: "18px", xl: "18px", }}
                >
                  SIGN UP FOR FREE
                </Typography>
              </Button>

              <Link href="/request-demo" legacyBehavior>
                <Button
                  LinkComponent={"a"}
                  sx={{
                    bgcolor: "white",
                    color: "black",
                    border: "1px solid black",
                    fontWeight: "bold",
                    fontFamily: "Work Sans",
                    p: { xs: "8px 9px", sm: "8px 10px", md: "8px 12px", lg: "8px 16px", xl: "10px 20px" },
                    "&:hover": { bgcolor: "white" },
                  }}
                >
                  REQUEST DEMO
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Stack >
    </>
  );
};

export default AboutBanner;
