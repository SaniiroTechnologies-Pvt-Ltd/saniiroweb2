"use client";

import { Divider, Stack, Typography } from "@mui/material";
import lo from "../assets/lo.svg";
import Lock from "../assets/Lock.png";
import Button from "../utils/Button";
import Link from "next/link";
import Image from "next/image";
import ShareExperienceForm from "./ShareExperienceForm";

const ShareExperience = () => {

  return (
    <Stack
      display={{ xs: "flex", lg: "flex" }}
      pt={5}
      pb={5}
      height={{ xs: "100%" }}
      margin={"0 auto"}
      bgcolor={"#052973"}
      className="textured-background-Experience"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack
        zIndex={11}
        maxWidth={"1640px"}
        bgcolor={"rgb(230, 245, 255)"}
        width={{ xs: "90%", sm: "80%", md: "70%" }}
        borderRadius={2}
        direction={{ xs: "column", lg: "row" }}
        p={3}
      >
        {/* Left side Contents */}
        <Stack sx={{
          width: { xs: '100%', lg: '100%' },
          zIndex: 11,
          p: 3,
          gap: 8
        }}>
          <Link href="/">
            <Image
              src={lo}
              alt="Logo"
              style={{ width: "100%", maxWidth: "150px", height: "auto" }}
            />
          </Link>

          <Stack gap={2}>
            <Image
              src={Lock}
              alt="Lock Image"
              style={{ width: "100%", maxWidth: "290px", height: "auto" }}
            />
            <Typography fontSize={{ xs: "14px", sm: "18px" }} fontWeight={"bold"} textAlign={"center"}>
              Enhanced sign-in security
            </Typography>
            <Typography fontSize={{ xs: "14px", sm: "18px" }} textAlign={"center"} p={"0 11px"}>
              Move away from risky passwords and experience one-tap access to Zoho. Download and install OneAuth.
            </Typography>
            <Button
              sx={{
                bgcolor: "transparent",
                color: "#0079FF",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Know More
            </Button>
          </Stack>
        </Stack>

        {/* <Stack justifyContent={"center"} alignItems={"center"}>
          <Stack
            sx={{
              content: "''",
              width: "2px",
              height: "90%",
              bgcolor: "#0139ff",
            }}
          />
        </Stack> */}

        <Divider
          orientation="vertical"
          sx={{ color: 'primary.main', }}
          flexItem
        />

        {/* Right side Share Experience Form */}
        <Stack alignItems={"center"}  zIndex={11} p={3}>
          <ShareExperienceForm />
        </Stack>
      </Stack>
    </Stack>

  );
};

export default ShareExperience;
