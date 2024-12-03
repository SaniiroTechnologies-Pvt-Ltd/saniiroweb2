import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import instagramImg from "./assets/instagram.png";
import linkedinImg from "./assets/linkedin.png";
import Image from "next/image";
import Link from "next/link";
const SocialMediaCard = () => {
  return (
    <Stack
      sx={{
        boxShadow: "0px 0px 10px 0px #0000001F",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Stack gap={2}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontSize: "25px",
            fontWeight: 300,
            lineHeight: "27px",
            letterSpacing: "0em",
            textAlign: "left",
          }}
        >
          Social Platform
        </Typography>
        <Stack
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
        gap: "20px",
      }}
    >
      <Stack direction={"row"} gap={2}>
        <Image
          height={40}
          width={43}
          alt="Instagram Image"
          src={instagramImg}
        />
        <Link
          href="https://www.instagram.com/business_accounting_software/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Stack gap={"4px"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Follow us on Instagram:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              @saniiro.official
            </Typography>
          </Stack>
        </Link>
      </Stack>

      <Link
        href="https://www.linkedin.com/company/saniiro-technologies-pvt-ltd"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Stack direction={"row"} gap={2}>
          <Image
            height={40}
            width={43}
            alt="LinkedIn Image"
            src={linkedinImg}
          />
          <Stack gap={"4px"}>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "13px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Join our LinkedIn page:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "21px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              #saniiro
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Stack>
      </Stack>
    </Stack>
  );
};

export default SocialMediaCard;
