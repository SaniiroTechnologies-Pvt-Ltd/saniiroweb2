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

// const operations = [
//   {
//     image: 'Visibility',
//     headText: '<span style="color: #000">Enhance Customer Satisfaction with</span> <span style="color: #F15B25"> Real-Time Stock Visibility</span>',
//     subText: 'With Saniiro’s real-time Stock Management System, businesses can track inventory across multiple locations and channels. Ensure your customers get what they need, when they need it reducing delays and boosting retention.',
//   },
//   {
//     image: 'Savings',
//     headText: '<span style="color: #F15B25">Reduce Holding Costs</span> with Smart Inventory Management Software',
//     subText: 'Avoid overstocking, reduce storage costs, and maintain optimal stock levels. Saniiro’s Inventory Management Software helps businesses make informed decisions and automate reorder processes to free up working capital and reduce waste.',
//   },
//   {
//     image: 'CloudSync',
//     headText: 'Prevent Stockouts with <span style="color: #F15B25">Cloud-Based Inventory</span> Replenishment',
//     subText: 'Saniiro’s Cloud-Based Inventory Software offers automated alerts, intelligent forecasting, and real-time inventory data to avoid stockouts. Ensure timely replenishment and never miss a sales opportunity due to low stock.',
//   },
//   {
//     image: 'TrendingUp',
//     headText: '<span style="color: #F15B25">Optimize Working Capital</span> with Inventory Software for <span style="color: #F15B25">Growing Businesses</span>',
//     subText: 'This Inventory Management Software gives you the ability to allocate working capital efficiently. By streamlining warehouse processes and automating stock control, your business can scale operations without the stress of manual tracking.',
//   },
//   {
//     image: 'Handshake',
//     headText: ' <span style="color: #F15B25">Strengthen Supplier Relationships</span> with an <span style="color: #F15B25">Integrated Stock</span> Management System',
//     subText: 'Track supplier performance, purchase history, and return cycles. With Saniiro’s Inventory and Procurement Software, negotiate better deals and create a consistent supply chain flow backed by accurate data and insights.',
//   },
// ]

const operations = [
  {
    image: 'AutorenewIcon', // Represents automation and streamlined processes
    headText: '<span style="color: #F15B25">Automate Financial Processes</span> Effortlessly',
    subText: 'Streamline financial workflows with automated accounting features. Save time, reduce errors, and focus on driving business growth.',
  },
  {
    image: 'InsightsIcon', // Represents analytics and insights
    headText: 'Gain <span style="color: #F15B25">Real-Time Business</span> Insights',
    subText: 'Make smarter decisions with real-time financial data. Access detailed reports and analytics to strategize effectively and confidently.',
  },
  {
    image: 'CloudIcon', // Represents cloud-based solutions
    headText: 'Reduce IT Costs with <span style="color: #F15B25">Cloud Accounting</span>',
    subText: 'Leverage secure, cloud-based architecture to access data from anywhere. Cut IT expenses and enhance productivity across your team.',
  },
  {
    image: 'AccountTreeIcon', // Represents multi-entity management
    headText: '<span style="color: #F15B25">Simplify Multi-Entity</span> Management',
    subText: 'Effortlessly handle multiple businesses with consolidated reporting. Organize financial tasks for smooth and efficient operations.',
  },
  {
    image: 'VerifiedIcon', // Represents compliance and legal adherence
    headText: 'Ensure Compliance with <span style="color: #F15B25">Tax Regulations</span>',
    subText: 'Generate e-invoices and GST reports with automated systems. Stay legally compliant while reducing risks and manual errors.',
  },
];


export default function AccountingFolderOperationList() {

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
              How Saniiro Inventory Management Software Simplifies Stock Control
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
              Maximize operational efficiency with Saniiro’s powerful Inventory Management Software. Designed for modern businesses, this all-in-one platform simplifies inventory tracking, purchasing, and sales processes. Saniiro’s Cloud-Based Inventory Software gives you complete control over your stock — from anywhere, at any time.

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