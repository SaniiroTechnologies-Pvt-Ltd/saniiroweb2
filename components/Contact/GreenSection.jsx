"use client";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import contactsection3 from "../assets/Contactsection3.svg";
import Button from "../utils/Button";
import indiaFlag from "../assets/indiaflag.svg";
import gmail1 from "../assets/gmail1.svg";
import gmail from "../assets/gmail.svg";
import icon1Contact from "../assets/icon1contact.svg";
import icon2Contact from "../assets/icon2contact.svg";
import icon3Contact from "../assets/icon3contact.svg";
import icon4Contact from "../assets/icon4contact.svg";
import Boxes from "../assets/Boxes.svg";
import Link from "next/link";
import Image from "next/image";

const GrennSection = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        alignItems={{ lg: "center", xs: "none" }}
        pt={{ lg: 4, xs: "none" }}
        position={{ lg: "absolute", xs: "none" }}
        top={"-11%"}
      >
        <Stack
          bgcolor={"tertiary.main"}
          width={{ lg: "85%", xs: "none" }}
          borderRadius={{ lg: 1, xs: "none" }}
          p={"20px 24px"}
          direction={{ lg: "row", xs: "column" }}
          gap={2}
          zIndex={1}
        >
          <Stack
            width={{ lg: "25%", xs: "100%" }}
            bgcolor={"white"}
            borderRadius={1}
          >
            <Stack p={"20px 25px"} gap={2}>
              <Button
                sx={{
                  borderRadius: 1,
                  fontWeight: "bold",
                  bgcolor: "tertiary.main",
                  color: "white",
                  width: "100px",
                  height: "25px",
                  fontSize: "12px",
                }}
              >
                I'M NEW HERE
              </Button>
              <Stack>
                <Image
                  src={icon1Contact}
                  alt=""
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
              </Stack>
              <Typography>
                Looking for a demo, or have questions about our products and
                pricing?
              </Typography>
              <Link href="#">sales@saniiro.com</Link>
            </Stack>
          </Stack>
          <Stack
            width={{ lg: "75%", xs: "100%" }}
            bgcolor={"white"}
            borderRadius={1}
          >
            <Stack p={"20px 25px"} gap={2}>
              <Button
                sx={{
                  borderRadius: 1,
                  fontWeight: "bold",
                  bgcolor: "primary.main",
                  color: "white",
                  width: "150px",
                  height: "25px",
                  fontSize: "12px",
                }}
              >
                EXISTING CUSTOMER
              </Button>
              <Stack direction={{ lg: "row", xs: "column" }} gap={5}>
                <Stack
                  width={{ lg: "30%", xs: "100%" }}
                  gap={2}
                  borderRight={{ lg: "1px solid #248F41", xs: "none" }}
                >
                  <Stack>
                    <Image
                      src={icon2Contact}
                      alt=""
                      style={{ width: "50px", height: "50px", objectFit: "contain" }}
                    />
                  </Stack>
                  <Typography>
                    Looking for a demo, or have questions about our products and
                    pricing?
                  </Typography>
                  <Link href="#">sales@saniiro.com</Link>
                </Stack>
                <Stack
                  width={{ lg: "30%", xs: "100%" }}
                  gap={2}
                  borderRight={{ lg: "1px solid #248F41", xs: "none" }}
                >
                  <Stack>
                    <Image
                      src={icon3Contact}
                      alt=""
                      style={{ width: "50px", height: "50px", objectFit: "contain" }}
                    />
                  </Stack>
                  <Typography>
                    Looking for a demo, or have questions about our products and
                    pricing?
                  </Typography>
                  <Link href="#">sales@saniiro.com</Link>
                </Stack>
                <Stack width={{ lg: "30%", xs: "100%" }} gap={2}>
                  <Stack>
                    <Image
                      src={icon4Contact}
                      alt=""
                      style={{ width: "50px", height: "50px", objectFit: "contain" }}
                    />
                  </Stack>
                  <Typography>
                    Looking for a demo, or have questions about our products and
                    pricing?
                  </Typography>
                  <Link href="#">sales@saniiro.com</Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          alignItems={"end"}
          width={"98%"}
          position={"absolute"}
          bottom={"-11%"}
        >
          <Image src={Boxes} alt="" style={{ objectFit: "contain" }} />
        </Stack>
      </Stack>

      <Stack alignItems={"center"} pt={"19%"} gap={{ lg: 10, xs: 3 }}>
        <Stack
          width={{ lg: "90%", xs: "100%" }}
          direction={{ lg: "row", xs: "column" }}
        >
          <Stack width={{ lg: "47%", xs: "100%" }}>
            <Image
              src={contactsection3}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Stack>
          <Stack
            p={"20px 25px"}
            gap={{ lg: 3, xs: "10px" }}
            width={{ lg: "40%", xs: "none" }}
          >
            <Button
              sx={{
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "#248F41",
                color: "white",
                width: "100px",
                height: "25px",
                fontSize: "12px",
              }}
            >
              I'M NEW HERE
            </Button>
            <Typography fontSize={{ lg: "40px", xs: "24px" }} letterSpacing={1}>
              Find your way around Saniiro with Concierge
            </Typography>
            <Typography>
              Not sure which saniiro product is the right fit for your company? No
              worries. We'll work with you to determine what solutions will best
              suit your business.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          width={{ lg: "90%", xs: "100%" }}
          direction={{ lg: "row", xs: "column-reverse" }}
        >
          <Stack
            m={"0 auto"}
            p={{
              lg: "20px 25px",
              xs: "20px 0px",
            }}
            gap={3}
            width={{ lg: "40%", xs: "90%" }}
          >
            <Button
              sx={{
                borderRadius: 1,
                fontWeight: "bold",
                bgcolor: "#248F41",
                color: "white",
                width: "100px",
                height: "25px",
                fontSize: "12px",
              }}
            >
              I'M NEW HERE
            </Button>
            <Typography
              sx={{
                width: {
                  xs: "95%",
                },
              }}
              fontSize={{ lg: "40px", xs: "24px" }}
              letterSpacing={1}
            >
              Interested in a product? Talk to our sales team
            </Typography>
            <Typography
              sx={{
                width: {
                  xs: "95%",
                },
              }}
            >
              From questions about pricing to one-on-one personalized demos,
              we'd love to connect and help get you started.
            </Typography>
          </Stack>
          <Stack
            width={{ lg: "60%", xs: "100%" }}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Stack
              width={{ lg: "80%", xs: "90%" }}
              bgcolor={"#FFFFFF"}
              gap={3}
              p={{ lg: "50px 70px", xs: "20px 0px" }}
              borderRadius={1}
            >
              <Stack direction={"row"} gap={1} justifyContent={"center"}>
                <Stack justifyContent={"center"}>
                  <Image
                    src={indiaFlag}
                    alt=""
                    style={{ width: "25px", height: "20px" }}
                  />
                </Stack>
                <Typography fontSize={"18px"}>India</Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"center"} gap={5}>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                    color: "black",
                    gap: 8,
                    border: "1px solid lightgray",
                    padding: "8px",
                    borderRadius: 5,
                  }}
                >
                  <Stack>
                    <Image src={gmail1} alt="" />
                  </Stack>
                  022-6971-1021
                </Typography>
                {/* <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                    color: "black",
                    gap: 8,
                    border: "1px solid lightgray",
                    padding: "8px",
                    borderRadius: 5,
                  }}
                >
                  <Stack>
                    <Image src={gmail1} alt="" />
                  </Stack>
                  1800-201-0000
                </Typography> */}
              </Stack>
              <Stack direction={"row"} justifyContent={"center"} gap={5}>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                    color: "black",
                    gap: 8,
                    border: "1px solid lightgray",
                    padding: "8px",
                    borderRadius: 5,
                  }}
                >
                  <Stack>
                    <Image src={gmail} alt="" />
                  </Stack>
                  sales@saniiro.com
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GrennSection;
