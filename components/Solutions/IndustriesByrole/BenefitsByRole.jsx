"use client";

import { CheckCircleRounded } from "@mui/icons-material";
import { Box, Grid, Typography, List, ListItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import OfficeImg from "../../assets/icons/image120.png"; // Adjust the path as necessary

const roles = [
  {
    title: "Business <span style='color: #F15B25'>Owners & Founders</span>",
    benefits: [
      "Get real-time dashboards to monitor KPIs across departments, including sales, finance, and inventory.",
      "Approve budgets, review P&L statements, and track multi-branch performance from a centralized mobile-friendly interface.",
      "Make informed, data-driven decisions with visual reports and predictive analytics that highlight trends and opportunities.",
      "Set strategic goals and assign team targets directly through the system with real-time tracking.",
    ],
    // image: "/images/business-owners.jpg",
    image: OfficeImg,
  },
  {
    title: "<span style='color: #F15B25'>Accountants & Finance</span>",
    benefits: [
      "Automate complex accounting tasks including GST returns, TDS, e-invoicing, and payment follow-ups.",
      "Manage general ledgers, journal entries, cash flows, and financial closures effortlessly through intuitive interfaces.",
      "Use rule-based approval systems to eliminate manual errors and maintain compliance with government regulations.",
      "Generate real-time financial statements, audit reports, and tax summaries ready for filing or review.",
    ],
    // image: "/images/accountants.jpg",
    image: OfficeImg,
  },
  {
    title: "<span style='color: #F15B25'>Inventory Managers</span>",
    benefits: [
      "Gain real-time visibility into stock levels across warehouses, outlets, or production units.",
      "Use barcode scanning, batch tracking, and expiry alerts to reduce wastage and ensure optimal inventory health.",
      "Automate reorder triggers for fast-moving or critical items to avoid stockouts or overstocking.",
      "Analyze historical data to forecast demand and optimize purchase cycles.",
    ],
    // image: "/images/inventory.jpg",
    image: OfficeImg,
  },
  {
    title: "<span style='color: #F15B25'>Production & Operations</span>",
    benefits: [
      "Track every stage of production from raw material procurement to final product dispatch, with detailed job work tracking.",
      "Monitor production timelines, work orders, machine usage, and downtime to increase efficiency.",
      "Integrate with inventory and finance modules to ensure cost control and resource planning.",
      "Streamline vendor management and ensure timely coordination across departments with automated alerts and task assignments.",
    ],
    // image: "/images/production.jpg",
    image: OfficeImg,
  },
  {
    title: "<span style='color: #F15B25'>Sales & CRM Teams</span>",
    benefits: [
      "Manage leads, deals, and customer interactions through a centralized CRM with automated follow-up reminders.",
      "Use GPS-based tracking to monitor field agent visits and enhance accountability and planning.",
      "Analyze customer behavior and segment data for targeted sales strategies and upselling opportunities.",
      "Access real-time sales pipeline reports, conversion metrics, and product-wise performance dashboards.",
    ],
    // image: "/images/sales.jpg",
    image: OfficeImg,
  },
  {
    title: "<span style='color: #F15B25'>Marketing Teams</span>",
    benefits: [
      "Plan and execute multi-channel marketing campaigns via SMS, WhatsApp, email, and social media—all from one dashboard.",
      "Segment customers based on behavior, demographics, or purchase history for hyper-targeted campaigns.",
      "Monitor open rates, engagement metrics, and ROI through built-in analytics tools.",
      "Automate lead-nurturing workflows and integrate campaigns with sales pipelines for seamless handoffs.",
    ],
    // image: "/images/marketing.jpg",
    image: OfficeImg,
  },
  {
    title: "<span style='color: #F15B25'>IT & Admin Teams</span>",
    benefits: [
      "Manage user access roles, permissions, and activity logs for security and compliance across the organization.",
      "Customize the system to fit departmental workflows and ensure cross-platform compatibility.",
      "Maintain data backups, recovery plans, and system health checks with minimal downtime.",
      "Ensure a secure environment with multi-level authentication, audit logs, and encryption standards.",
    ],
    // image: "/images/it-admin.jpg",
    image: OfficeImg,
  },
  {
    title: "<span style='color: #F15B25'>Auditors & Consultants</span>",
    benefits: [
      "Access complete and audit-ready financial and operational records through structured, real-time reports.",
      "Export data in multiple formats (Excel, PDF, CSV) with built-in drill-down capabilities and audit trails.",
      "Eliminate the need for third-party software with integrated compliance tools and version-controlled documentation.",
      "Collaborate securely with internal teams to validate records, conduct risk analysis, and recommend improvements.",
    ],
    // image: "/images/auditors.jpg",
    image: OfficeImg,
  },
];

const BenefitsByRole = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile view

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", mt: 4 }}>
      <Typography variant="h4" fontWeight="bold" color="#052973"  textAlign="center">
        Key Benefits by Role – At a Glance
      </Typography>

      {roles.map((role, index) => (
        <Grid container spacing={4} alignItems="center" key={index} sx={{ mt: 4 }}>
          {/* Text Section - Left on Even, Right on Odd */}
          <Grid item xs={12} md={6} sx={{ order: index % 2 === 0 ? 1 : 2 }}>
            <Typography variant="h5" fontWeight="bold" 
            dangerouslySetInnerHTML={{ __html: role.title }}></Typography>
            <List>
              {role.benefits.map((benefit, idx) => (
                <ListItem key={idx} sx={{justifyContent:"flex-start", alignItems:"center", gap:2}}>
                  <CheckCircleRounded sx={{color: "#F15B25"}} />
                  <Typography>{benefit}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Image Section - Right on Even, Left on Odd */}
          {!isMobile && (
            <Grid item xs={12} md={6} sx={{ order: index % 2 === 0 ? 2 : 1 }}>
              <Image src={role.image} width={500} height={300} alt={role.title} />
            </Grid>
          )}
        </Grid>
      ))}
    </Box>
  );
};

export default BenefitsByRole;
