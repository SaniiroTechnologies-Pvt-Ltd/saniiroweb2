"use client";

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import { Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Assessment, Autorenew, Business, GroupWork, Inventory, LocalShipping, PointOfSale, PrecisionManufacturing, RequestQuote, VolunteerActivism } from '@mui/icons-material';

const iconMap = {
  RequestQuoteIcon: RequestQuote,
  AssessmentIcon: Assessment,
  PointOfSaleIcon: PointOfSale,
  InventoryIcon: Inventory,
  PrecisionManufacturingIcon: PrecisionManufacturing,
  GroupWorkIcon: GroupWork,
  LocalShippingIcon: LocalShipping,
  VolunteerActivismIcon: VolunteerActivism,
  AutorenewIcon: Autorenew,
  BusinessIcon: Business,
};

const operations = [
  {
    image: 'RequestQuoteIcon', // Represents automation and recurring processes
    headText: '<span style="color: #F15B25">Billing & Invoicing</span>',
    subText: 'Saniiro simplifies billing by automating GST-ready invoices, credit and debit notes, and recurring billing cycles. Whether you\'re managing subscription models, AMCs, or one-time services, you can easily convert quotes into invoices and attach online payment links for faster collections. The system also maintains detailed billing history, helping businesses track dues and streamline receivables effortlessly.',
  },
  {
    image: 'AssessmentIcon', // Represents analytics and financial insights
    headText: '<span style="color: #F15B25">GST Compliance & Financial Reporting</span>',
    subText: 'Stay fully compliant with simplified GST filing and comprehensive financial reporting. Saniiro generates GSTR1, GSTR3B, ITC, and audit logs with export-ready formats like JSON, Excel, or PDF. Real-time access to Profit & Loss, Balance Sheets, and Trial Balances allows finance teams to make informed decisions, while NSDL integration supports seamless e-invoicing and e-way bill generation.',
  },
  {
    image: 'PointOfSaleIcon', // Represents cloud-based solutions
    headText: '<span style="color: #F15B25">Retail & POS</span>',
    subText: 'Designed for retail businesses, supermarkets, and franchises, Saniiro’s POS features offer barcode-based billing, multi-payment support, and customer loyalty management. You can manage discounts, coupons, and promotional offers, track performance across multiple outlets, and monitor cashier efficiency. Even without internet access, offline billing ensures uninterrupted service with automatic data sync when reconnected.',
  },
  {
    image: 'InventoryIcon', // Represents multi-entity management
    headText: '<span style="color: #F15B25">Inventory Management</span>',
    subText: 'Gain end-to-end visibility of your stock across multiple godowns, warehouses, or retail locations. With batch tracking, serial number control, and expiry date alerts, Saniiro ensures accurate stock records. Features like reorder notifications, inward/outward tracking, and stock journals help avoid shortages or overstocking, while detailed reports provide insights into item movements and valuation.',
  },
  {
    image: 'PrecisionManufacturingIcon', // Represents compliance and verification
    headText: '<span style="color: #F15B25">Manufacturing Planning<span>',
    subText: 'For manufacturers, Saniiro manages the complete production lifecycle—from raw material planning to final output. Create Bills of Materials (BOM), track material consumption, and calculate yield and wastage. The platform supports job work, subcontracting, and multi-stage production workflows, allowing businesses to align production schedules with inventory and demand while keeping costs under control.',
  },
  {
    image: 'GroupWorkIcon', // Represents compliance and verification
    headText: '<span style="color: #F15B25">Sales CRM<span>',
    subText: 'Saniiro empowers sales teams to track leads, manage pipelines, and close deals more efficiently. Leads can be captured via web forms, imports, or integrations and automatically assigned to sales reps. Field visits and customer interactions are GPS-tracked, and automated reminders ensure timely follow-ups. From orders to deliveries, every interaction is logged, while detailed sales reports help optimize performance by area, product, or rep.',
  },
  {
    image: 'LocalShippingIcon', // Represents compliance and verification
    headText: '<span style="color: #F15B25">Order & Delivery Management<span>',
    subText: 'Efficiently manage the full order-to-delivery lifecycle with real-time tracking and mobile updates. Orders can be processed into delivery challans, with status updates recorded on the go. Saniiro handles rejected or returned goods with ease, supports delivery due tracking, and ensures accurate status reporting, enabling businesses to meet customer expectations and maintain operational clarity.',
  },
  {
    image: 'VolunteerActivismIcon', // Represents compliance and verification
    headText: '<span style="color: #F15B25"Education & Non-Profits<span>',
    subText: 'Saniiro helps educational institutions and non-profits manage donations, memberships, grants, and events with transparency. Auto-generated receipts, fund allocation tracking, and donor-ready financial reports make reporting and compliance easier. The platform also supports volunteer attendance, event expense tracking, and can manage student-related payments, sponsorships, and fundraising campaigns.',
  },
  {
    image: 'AutorenewIcon', // Represents compliance and verification
    headText: '<span style="color: #F15B25">Subscriptions & AMC<span>',
    subText: 'Service businesses can automate recurring billing for monthly, quarterly, or annual plans with ease. Saniiro tracks subscription renewals, sends reminders via SMS or WhatsApp, and supports multi-tier pricing and discounts. With online payment options, businesses can offer a seamless customer experience while maintaining consistent cash flow and tracking service histories.',
  },
  {
    image: 'BusinessIcon', // Represents compliance and verification
    headText: '<span style="color: #F15B25">Multi-Branch Operations<span>',
    subText: 'For companies with multiple locations or departments, Saniiro offers centralized control with branch-wise flexibility. Admins can assign specific permissions, manage access roles, and consolidate financials, sales, and inventory across all branches. Inter-branch transfers, unified master data management, and performance comparisons help streamline operations while maintaining control at every level.',
  },
];

export default function UseCaseOperationList() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('smm')); // Determines if the view is for mobile

  return (
    <React.Fragment>
      <Stack sx={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Stack marginTop={14} sx={{ width: '100%', maxWidth: 1080, }}>
          <Stack>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Work Sans",
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "28px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#052973"
              }}
            >
              Saniiro in Action: Business Solutions Across Every Function
            </Typography>
            <Typography
              sx={{
                fontFamily: "Work Sans",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "center",
                opacity: "80%",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              Saniiro offers a comprehensive business solution, streamlining billing, GST compliance, inventory, manufacturing, sales, order management, and POS operations. Designed for efficiency, it supports multi-branch management, CRM, and retail functions, ensuring seamless financial reporting and automation. Whether for SMEs, manufacturers, or service providers, Saniiro simplifies business processes with real-time tracking and smart integrations.

            </Typography>
          </Stack>
        </Stack>
        <List sx={{ width: '100%', maxWidth: 1080, bgcolor: 'background.paper', fontFamily: "Work Sans" }}>
          {operations.map((operation, index) => {
            const IconComponent = iconMap[operation.image] || WorkIcon;

            return (
              <React.Fragment key={index}>
                <ListItem sx={{ marginTop: "20px", marginBottom: "20px" }}>
                  {!isMobile && <ListItemAvatar>
                    <Avatar sx={{ width: 84, height: 84, marginRight: 4, backgroundColor: '#052973' }}>
                      <IconComponent sx={{ width: 56, height: 56, }} />
                    </Avatar>
                  </ListItemAvatar>}
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          component="h1"
                          variant="body1"
                          fontSize={24}
                          fontWeight={600}
                          fontFamily={'Work Sans'}

                          dangerouslySetInnerHTML={{ __html: operation.headText }}
                        >
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: 'text.primary', display: 'inline' }}
                          fontSize={16}
                          fontWeight={400}
                          lineHeight={1}
                          letterSpacing={0}
                        >
                          {operation.subText}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" sx={{ marginX: '24px' }} />
              </React.Fragment>
            )
          })
          }
        </List>
      </Stack>
    </React.Fragment>
  );
}