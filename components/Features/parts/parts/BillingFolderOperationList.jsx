import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import { Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Autorenew, Insights, Cloud, AccountTree, Verified } from '@mui/icons-material';

const iconMap = {
  AutorenewIcon: Autorenew,
  InsightsIcon: Insights,
  CloudIcon: Cloud,
  AccountTreeIcon: AccountTree,
  VerifiedIcon: Verified,
};

const operations = [
  {
    image: 'AutorenewIcon', // Represents automation and recurring processes
    headText: '<span style="color: #F15B25">Automate Billing</span> Effortlessly',
    subText: 'Streamline workflows with automated billing to save time and eliminate errors. Focus on growth while repetitive tasks are handled seamlessly.',
  },
  {
    image: 'InsightsIcon', // Represents analytics and financial insights
    headText: 'Get <span style="color: #F15B25">Real-Time Financial</span> Insights',
    subText: 'Make smarter decisions with live reports and analytics. Gain instant clarity on your financial status anytime, anywhere.',
  },
  {
    image: 'CloudIcon', // Represents cloud-based solutions
    headText: 'Cut IT Costs with <span style="color: #F15B25">Cloud Billing</span>',
    subText: 'Securely access billing data from any device with our cloud solution. Lower infrastructure costs while boosting collaboration and productivity.',
  },
  {
    image: 'AccountTreeIcon', // Represents multi-entity management
    headText: 'Simplify <span style="color: #F15B25">Multi-Entity Billing</span>',
    subText: 'Easily manage multiple companies with consolidated and detailed reports. Saniiro makes complex financial management effortless and efficient.',
  },
  {
    image: 'VerifiedIcon', // Represents compliance and verification
    headText: 'Stay <span style="color: #F15B25">Tax Compliant<span>',
    subText: 'Generate GST invoices and e-way bills instantly to ensure compliance. Reduce the risk of errors and simplify audits with automated tax features.',
  },
];



export default function BillingFolderOperationList() {

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
              Revolutionize Your Invoicing and Billing Processes
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
              Enhance your business operations with Saniiro's Billing Management Software. Designed for modern enterprises, this comprehensive invoicing software streamlines billing processes, improves security, and provides real-time insights into your financial transactions.​

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