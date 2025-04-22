"use client";

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import { Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ScheduleSend, BarChart, Cloud, Business, Campaign, Verified } from '@mui/icons-material';

const iconMap = {
  ScheduleSendIcon: ScheduleSend,
  BarChartIcon: BarChart,
  CloudIcon: Cloud,
  BusinessIcon: Business,
  CampaignIcon: Campaign,
  VerifiedIcon: Verified,
};

const operations = [
  {
    image: 'ScheduleSendIcon', // Represents automation and recurring processes
    headText: '<span style="color: #F15B25">Automate Follow-Ups</span> Effortlessly',
    subText: 'Let the system handle reminders and communications so your team can focus on high-value interactions.',
  },
  {
    image: 'BarChartIcon', // Represents analytics and financial insights
    headText: 'Get <span style="color: #F15B25">Real-Time Performance</span> Insights',
    subText: 'Generate custom reports on sales activity, team performance, and lead conversion rates.',
  },
  {
    image: 'CloudIcon', // Represents cloud-based solutions
    headText: 'Cloud-Based <span style="color: #F15B25">CRM Access</span>',
    subText: 'Access customer data from anywhere with complete security and real-time syncing.',
  },
  {
    image: 'BusinessIcon', // Represents multi-entity management
    headText: 'Simplify <span style="color: #F15B25">Multi-Branch</span> Customer Management',
    subText: 'View, manage, and analyze customer data across branches in one dashboard.',
  },
  {
    image: 'CampaignIcon', // Represents compliance and verification
    headText: 'Effective <span style="color: #F15B25">Campaign Tracking<span>',
    subText: 'Analyze email/SMS campaigns and track engagement with built-in analytics.',
  },
  {
    image: 'VerifiedIcon', // Represents compliance and verification
    headText: 'Stay <span style="color: #F15B25">Organized & Compliant<span>',
    subText: 'Capture and store every customer interaction to ensure clear documentation and seamless audits.',
  },
];



export default function CrmFolderOperationList() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('smm')); // Determines if the view is for mobile

  return (
    <>
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
              Revolutionize Customer Engagement with CRM
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
              Saniiro CRM empowers you to manage your customer lifecycle efficiently—from lead generation to closing deals and retaining long-term customers.

            </Typography>
          </Stack>
        </Stack>
        <List sx={{ width: '100%', maxWidth: 1080, bgcolor: 'background.paper', fontFamily: "Work Sans" }}>
          {operations.map((operation, index) => {
            const IconComponent = iconMap[operation.image] || WorkIcon;

            return (<React.Fragment>
              <ListItem key={index} sx={{ marginTop: "20px", marginBottom: "20px" }}>
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

            </React.Fragment>)
          })
          }
        </List>
      </Stack>
    </>
  );
}

// <ListItem>
//   <ListItemAvatar>
//     <Avatar>
//       <WorkIcon />
//     </Avatar>
//   </ListItemAvatar>
//   <ListItemText
//     primary="Enhance Customer Satisfaction with Real-Time Stock Visibility"
//     secondary="With Saniiro&apos;s real-time Stock Management System, businesses can track inventory across multiple locations and channels. Ensure your customers get what they need, when they need it — reducing delays and boosting retention."
//   />
// </ListItem>
// <ListItem>
//   <ListItemAvatar>
//     <Avatar>
//       <BeachAccessIcon />
//     </Avatar>
//   </ListItemAvatar>
//   <ListItemText
//     primary="Enhance Customer Satisfaction with Real-Time Stock Visibility"
//     secondary="With Saniiro&apos;s real-time Stock Management System, businesses can track inventory across multiple locations and channels. Ensure your customers get what they need, when they need it — reducing delays and boosting retention."
//   />
// </ListItem>