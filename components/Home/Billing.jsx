"use client";

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "../utils/Button";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    id: 1,
    src: "/home/billing-module.gif",
    title: "Billing/Invoicing",
    disc: "Saniiro books is the fastest-growing billing software designed for micro, small, and medium business houses. Create GST-compliant invoices seamlessly.",
    bulletPoints: [
      "E-way bill generation",
      "E-invoice generation",
      "Android and iOS app availability for billing",
    ],
    Path: "/Features/Billing-module",
  },
  {
    id: 2,
    src: "/home/inventory-module.gif",
    title: "Inventory",
    disc: "Optimize your inventory processes with Saniiro Books' robust inventory management module. Maintain accurate stock levels and streamline operations.",
    bulletPoints: [
      "Godown/Location-wise inventory management",
      "Manage minimum/re-order levels",
      "Barcode management",
    ],
    Path: "/Features/Inventory-module",
  },
  {
    id: 3,
    src: "/home/accounting-module.gif",
    title: "Accounting",
    disc: "Enhance financial accuracy with automated accounting tools, GST report generation, and bank reconciliation features.",
    bulletPoints: [
      "Financial reports generation",
      "GSTR-1 and GSTR-3B report generation",
      "Outstanding reminders",
      "Bank reconciliation",
    ],
    Path: "/Features/Accounting-module",
  },
  {
    id: 4,
    src: "/home/crm1-module.gif",
    title: "CRM",
    disc: "Optimize your client management processes with integrated CRM tools that improve customer engagement and retention.",
    bulletPoints: [
      "Lead tracking",
      "Automated follow-ups",
      "Sales pipeline visibility",
    ],
    Path: "/Features/Crm-module",
  },
];

// Responsive settings for carousel
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Billing = ({ bgColor }) => {
  return (
    <>
      {/* Desktop & Tablet View */}
      <Stack sx={{ display: { xs: "none", lg: "block" }, }}>
        <Stack alignItems="center" justifyContent="center" gap={6} p="60px 0">
          {features.map((d, index) => (
            <Stack
              key={index}
              sx={{
                alignItems: "center",
                justifyContent: d.id % 2 === 0 ? "center" : "space-evenly",
                width: "90%",
                direction: "row",
                gap: "30px",
                flexDirection: { xs: "column", md: d.id % 2 === 0 ? "row-reverse" : "row" },
              }}
            >
              {/* Image Section */}
              <Stack alignItems="center"
                sx={{
                  width: { md: "50%", lg: d.id !== 2 || d.id !== 4 ? "49%" : "37%", },
                  height: { md: "70vh", },
                }}>
                <Box sx={{ width: d.id === 2 ? "68%" : "67%", position: "relative", }}>
                  <Image src={d.src} alt={d.title} width={0} height={0} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                </Box>
              </Stack>

              {/* Text Section */}
              <Stack gap={2} width="38%">
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "49px",
                    fontWeight: "bold",
                  }}>
                  {d.title}
                </Typography>
                <Typography>{d.disc}</Typography>
                <Stack component="ul" sx={{ pl: 2 }}>
                  {d.bulletPoints.map((point, i) => (
                    <Typography key={i} component="li">
                      {point}
                    </Typography>
                  ))}
                </Stack>
                <Link href={d.Path} onClick={() => window.scrollTo(0, 0)}>
                  <Button
                    type="button"
                    sx={{
                      color: "primary.contrastText",
                      width: "186px",
                      height: "48px",
                      fontSize: "20px",
                      bgcolor: "primary.main",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "primary.light", color: "primary.contrastText" },
                    }}
                  >
                    Learn More
                  </Button>
                </Link>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* Mobile View */}
      <Box sx={{ display: { xs: "block", lg: "none" }, width: "100%", backgroundColor: "#eff2f6" }}>
        <Stack margin="19px auto" width="90%">
          <Carousel responsive={responsive} showDots infinite autoPlaySpeed={5000} removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}>
            {features.map((d, index) => (
              <Stack key={index} gap={2} alignItems="center">
                <Image width={280} height={280} src={d.src} alt={d.title} />
                <Typography sx={{ fontSize: "38px", fontWeight: 600, textAlign: "left" }}>
                  {d.title}
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                  {d.disc}
                </Typography>
                <Stack component="ul" sx={{ marginBottom: "25px", pl: 2 }}>
                  {d.bulletPoints.map((point, i) => (
                    <Typography key={i} component="li">
                      {point}
                    </Typography>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Carousel>
        </Stack>
      </Box>
    </>
  );
};

export default Billing;
