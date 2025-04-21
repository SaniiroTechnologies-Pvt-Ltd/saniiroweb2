import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Stack, 
  Container,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
  Divider
} from '@mui/material';
import { 
  Store,
  Business,
  AccountBalance,
  CheckCircle,
  ArrowForward,
  PlayArrow,
  ContactSupport
} from '@mui/icons-material';

const detailedContent = {
  small: {
    title: "Best Business Management Software for Small Enterprises",
    mainDescription: "Saniiro is an all-in-one, cloud-based business software designed to simplify and streamline operations for small and growing businesses. It integrates billing, accounting, inventory, CRM, and more into one easy-to-use platform, helping you manage everything from payments to stock—all while staying GST-compliant.",
    subDescription: "Small business owners often juggle multiple roles, and managing operations manually can slow growth and lead to errors. Saniiro removes that burden with powerful automation, real-time insights, and centralized control, so you can focus on scaling your business, not just running it.",
    subtitle: "Why Saniiro is the Right Fit for Small Businesses",
    features: [
      {
        title: "Time-Saving Automation for Daily Operations",
        description: "Minimize manual work with automated tools for billing, tax calculation, expense tracking, and reminders. Free up time to focus on business growth while Saniiro handles routine tasks in the background."
      },
      {
        title: "Built-in GST & Tax Compliance",
        description: "Stay compliant effortlessly with auto-generated GST invoices, GSTR1/3B returns, and e-way bill creation—all aligned with Indian tax regulations. No more spreadsheet chaos or missed filings."
      },
      {
        title: "Secure Team Collaboration & Role Management",
        description: "Add users with custom access levels and enable seamless collaboration with your team, partners, and auditors. Work securely from anywhere, whether you're in the office or on the move."
      },
      {
        title: "Efficient Inventory & Stock Management",
        description: "Keep stock in check with real-time syncing, barcode integration, batch tracking, and inventory alerts. Manage multiple branches or godowns with complete visibility and control"
      },
      {
        title: "Advanced Reporting & Smart Insights",
        description: "Generate instant reports on sales, expenses, inventory, and customers. Use dashboards and smart analytics to make better, faster decisions for your business's financial health."
      },
      {
        title: "Powerful Features That Drive Productivity",
        description: "Easily convert quotes to invoices, accept payments via online links, track expenses, reconcile bank transactions, and manage recurring billing or subscriptions. The integrated CRM helps you follow up on leads, manage support tickets, and stay connected with customers."
      }
    ]
  },
  medium: {
    title: "Enterprise Solutions for Medium-Sized Businesses",
    mainDescription: "Comprehensive business management solution tailored for growing medium-sized enterprises, offering advanced features and scalability.",
    subDescription: "Medium-sized businesses need robust solutions that can handle complex operations while remaining flexible enough to adapt to changing needs.",
    subtitle: "Key Benefits for Medium Enterprises",
    features: [
      {
        title: "Advanced Enterprise Resource Planning",
        description: "Integrated ERP solution that connects all aspects of your business operations seamlessly."
      },
      {
        title: "Multi-Branch Management",
        description: "Efficiently manage multiple locations and branches with centralized control and reporting."
      },
      {
        title: "Scalable Infrastructure",
        description: "Cloud-based infrastructure that grows with your business needs."
      },
      {
        title: "Enhanced Security Features",
        description: "Enterprise-grade security protocols to protect your business data and operations."
      },
      {
        title: "Custom Workflow Automation",
        description: "Automate complex business processes with customizable workflow solutions."
      },
      {
        title: "Advanced Analytics",
        description: "Comprehensive business intelligence tools for data-driven decision making."
      }
    ]
  },
  large: {
    title: "Enterprise-Grade Solutions for Large Organizations",
    mainDescription: "Complete enterprise solution designed for large-scale operations, offering maximum customization and advanced features.",
    subDescription: "Large enterprises require sophisticated solutions that can handle complex operations across multiple locations and departments.",
    subtitle: "Enterprise Advantages",
    features: [
      {
        title: "Global Operations Management",
        description: "Manage worldwide operations with multi-currency and multi-language support."
      },
      {
        title: "Advanced Integration Capabilities",
        description: "Seamlessly integrate with existing enterprise systems and third-party applications."
      },
      {
        title: "Enterprise-Scale Security",
        description: "Military-grade security features with advanced access control and audit trails."
      },
      {
        title: "Custom Development Options",
        description: "Tailored solutions development to meet specific enterprise requirements."
      },
      {
        title: "Advanced Business Intelligence",
        description: "Sophisticated analytics and reporting tools for enterprise-wide insights."
      },
      {
        title: "24/7 Premium Support",
        description: "Dedicated support team with guaranteed response times and priority handling."
      }
    ]
  }
};

const industryData = [
  {
    title: 'Small Business',
    description: 'Tailored solutions to help small businesses grow and succeed in the modern market.',
    color: '#F15B25',
    type: 'small',
    icon: Store
  },
  {
    title: 'Medium Enterprise',
    description: 'Comprehensive tools and services designed for medium-sized enterprises.',
    color: '#F15B25',
    type: 'medium',
    icon: Business
  },
  {
    title: 'Large Enterprise',
    description: 'Enterprise-grade solutions for large-scale business operations and management.',
    color: '#F15B25',
    type: 'large',
    icon: AccountBalance
  },
];

const IndustryCards = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#fff' }}>
      <Container maxWidth="xl">
        <Stack spacing={4} py={8}>
          {/* Header Section */}
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography 
              variant="h2" 
              sx={{ 
                color: '#052973',
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 2
              }}
            >
              Industry Solutions by Size
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ 
                maxWidth: '800px',
                mb: 4
              }}
            >
              Discover tailored solutions designed specifically for businesses of different sizes.
              Our comprehensive approach ensures the perfect fit for your organization.
            </Typography>
          </Stack>

          {/* Cards as Tabs */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={3}
            sx={{ mb: 4 }}
          >
            {industryData.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  onClick={() => handleTabChange(null, index)}
                  sx={{
                    flex: 1,
                    cursor: 'pointer',
                    minHeight: 280,
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    bgcolor: selectedTab === index ? 'white' : '#f8f9fa',
                    border: `2px solid ${selectedTab === index ? '#F15B25' : 'transparent'}`,
                    borderRadius: 4,
                    boxShadow: selectedTab === index 
                      ? '0 8px 24px rgba(241, 91, 37, 0.12)'
                      : '0 2px 8px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 28px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: -20,
                      top: -30,
                      width: 140,
                      height: 140,
                      borderRadius: '50%',
                      // color: selectedTab === index ? '#F15B25' : '#052973',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Icon sx={{ fontSize: 50, color: '#052973' }} />
                  </Box>

                  <CardContent sx={{ ml: 2, mt: 8, p: 3, textAlign: 'left' }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#052973',
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                        mb: 3,
                        minHeight: 60
                      }}
                    >
                      {item.description}
                    </Typography>
                   
                  </CardContent>
                </Card>
              );
            })}
          </Stack>

          {/* Content Area */}
          <Fade in={true} timeout={500}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, md: 5 },
                bgcolor: '#f8f9fa',
                borderRadius: 4,
                border: '1px solid #e0e0e0'
              }}
            >
              {detailedContent[industryData[selectedTab].type] && (
                <Stack spacing={4}>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#052973',
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 700,
                    }}
                  >
                    {detailedContent[industryData[selectedTab].type].title}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    {detailedContent[industryData[selectedTab].type].mainDescription}
                  </Typography>
                  
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                    {detailedContent[industryData[selectedTab].type].subDescription}
                  </Typography>

                  <Divider sx={{ my: 3 }} />

                  <Typography 
                    variant="h4" 
                    sx={{ 
                      color: '#052973',
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      fontWeight: 600,
                    }}
                  >
                    {detailedContent[industryData[selectedTab].type].subtitle}
                  </Typography>

                  <List sx={{ pt: 2 }}>
                    {detailedContent[industryData[selectedTab].type].features.map((feature, idx) => (
                      <ListItem 
                        key={idx}
                        sx={{
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          mb: 3,
                          p: 0
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: '#F15B25' }} />
                          </ListItemIcon>
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: '#052973',
                              fontWeight: 600 
                            }}
                          >
                            {feature.title}
                          </Typography>
                        </Box>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            pl: 6,
                            color: 'text.secondary'
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>

                  <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    spacing={2} 
                    justifyContent="center"
                    mt={4}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<PlayArrow />}
                      sx={{
                        bgcolor: '#F15B25',
                        '&:hover': { bgcolor: '#d94d1f' },
                        borderRadius: '25px',
                        px: 4
                      }}
                    >
                      Request Demo
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      endIcon={<ContactSupport />}
                      sx={{
                        color: '#052973',
                        borderColor: '#052973',
                        borderRadius: '25px',
                        px: 4,
                        '&:hover': {
                          borderColor: '#052973',
                          bgcolor: 'rgba(5, 41, 115, 0.04)',
                        },
                      }}
                    >
                      Talk to Sales
                    </Button>
                  </Stack>
                </Stack>
              )}
            </Paper>
          </Fade>
        </Stack>
      </Container>
    </Box>
  );
};

export default IndustryCards; 