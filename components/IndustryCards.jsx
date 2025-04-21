import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Stack, 
  Container,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  Store,
  Business,
  AccountBalance,
  CheckCircle,
  PlayArrow,
  ContactSupport,
  KeyboardArrowRight
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
    mainDescription: "Saniiro is a comprehensive, cloud-based business management software for medium-sized enterprises designed to streamline and scale operations with ease. From billing and accounting to inventory, production, CRM, and POS, everything is unified in one powerful, easy-to-use dashboard.",
    subDescription: "As medium-sized enterprises grow, relying on spreadsheets or disconnected systems to manage multiple branches, teams, or departments becomes a challenge. Saniiro bridges this gap by offering enterprise-level capabilities with the simplicity and agility that mid-sized businesses need.",
    subtitle: "What Makes Saniiro a Smart Choice",
    features: [
      {
        title: "Centralized Multi-Branch & User Access",
        description: "Effectively manage multiple departments and locations using Saniiro’s unified dashboard. Assign role-based access, monitor real-time activity, and maintain total visibility across your entire enterprise."
      },
      {
        title: "Comprehensive Financial & GST Compliance Suite",
        description: "Stay tax-compliant and organized with automated profit & loss statements, balance sheets, and GST-ready invoicing. Easily manage GSTR1, GSTR3B, and other returns—making Saniiro the perfect business management software for medium-sized enterprises in India."
      },
      {
        title: "Smart Inventory & Production Management",
        description: "Track stock in real-time across warehouses with batch numbers, barcodes, and expiry alerts. Manage the entire production process—from raw material procurement to finished goods—with bill of materials (BOM) and movement tracking features built-in."
      },
      {
        title: "Integrated CRM & Streamlined Sales Workflow",
        description: "Boost your customer relationships and sales funnel with integrated CRM tools. Log site visits, manage leads, track follow-ups, and empower your sales team on the go with the mobile app—all from your business management platform."
      },
      {
        title: "Retail-Optimized POS with Real-Time Insights",
        description: "Whether you’re running multiple retail outlets or a single storefront, Saniiro offers a fast, reliable POS system. Enable barcode billing, return management, tax automation, and loyalty rewards, while tracking real-time performance across all locations."
      },
      {
        title: "Mobile-First, Automated & Seamlessly Integrated",
        description: "Operate from anywhere with mobile apps for Android and iOS. Automate daily workflows like approvals, payment reminders, and reports. Saniiro supports seamless integration with payment gateways, WhatsApp, e-commerce platforms, and Excel/CSV formats."
      }
    ]
  },
  large: {
    title: "Comprehensive Solutions for Non-Profit Organizations",
    mainDescription: "Saniiro is a powerful, cloud-based software tailored for NGOs, charitable trusts, religious institutions, and social organizations that need streamlined financial and operational control. Designed to reduce administrative overhead, it unifies fund accounting, donation tracking, compliance, volunteer coordination, and inventory management in a single, easy-to-use platform—so you can focus on your mission, not on paperwork.",
    subDescription: "Whether you're running donation drives, managing grants, organizing volunteers, or reporting to stakeholders, Saniiro ensures transparency, accountability, and real-time access to your critical data.",
    subtitle: "Why Saniiro is a Smart Choice for Non-Profits",
    features: [
      {
        title: "Fund-Based Accounting with Real-Time Control",
        description: "Track donations, grants, and sponsorships by source, purpose, or project. Allocate budgets to cost centers, monitor fund utilization, and ensure resources are being used exactly where they’re meant to be, with full auditability."
      },
      {
        title: "Simplified Billing & GST Compliance",
        description: "Easily generate donation receipts, manage membership contributions, and handle subscription-based giving. Stay compliant with Indian GST laws by auto-generating GSTR reports, e-invoices, and e-way bills for applicable services."
      },
      {
        title: "Inventory & Asset Tracking for Aid Distribution",
        description: "Manage inventory and donated items across multiple locations—be it offices, warehouses, camps, or field events. Barcode tagging, batch tracking, and stock reports help you monitor supplies used for outreach or internal operations."
      },
      {
        title: "Volunteer & Event Management Tools",
        description: "Organize volunteer hours, assign roles, and track attendance with geo-tagging and mobile app check-ins. Plan and execute events smoothly with centralized control over logistics, supplies, and team participation."
      },
      {
        title: "Advanced Reporting for Donor & Board Transparency",
        description: "Generate ready-to-share reports on fund allocation, program spending, and donation trends. Share updates with donors, trustees, or auditors instantly, with built-in approval workflows for every financial activity."
      },
      {
        title: "Seamless Mobility & Integrations",
        description: "Operate from anywhere—be it donation camps or remote fieldwork—using the Saniiro mobile app. Integrate effortlessly with Razorpay, PayU, WhatsApp, email systems, and cloud workspaces to manage donations, communication, and documentation in one place."
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
    title: 'Expansive Enterprises',
    description: 'Scalable and robust tools designed to streamline operations and drive success for large-scale organizations.',
    color: '#F15B25',
    type: 'large',
    icon: AccountBalance
  },
];

const IndustryCards = () => {
  const [activeSection, setActiveSection] = useState('small');
  const [isScrolling, setIsScrolling] = useState(false);
  const contentRefs = useRef({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerRef = useRef(null);

  useEffect(() => {
    industryData.forEach(item => {
      contentRefs.current[item.type] = React.createRef();
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const container = containerRef.current;
      if (!container) return;

      const scrollPosition = container.scrollTop;
      const offset = isMobile ? 100 : 20;
      
      let currentSection = industryData[0].type;
      Object.keys(contentRefs.current).forEach(type => {
        const element = contentRefs.current[type].current;
        if (element && element.offsetTop - offset <= scrollPosition) {
          currentSection = type;
        }
      });

      setActiveSection(currentSection);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isScrolling, isMobile]);

  const scrollToSection = (type) => {
    setIsScrolling(true);
    const element = contentRefs.current[type].current;
    if (element && containerRef.current) {
      const offset = isMobile ? 80 : 20;
      containerRef.current.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    setActiveSection(type);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const renderSidebarCard = (item, index) => {
    const Icon = item.icon;
    const isActive = activeSection === item.type;

    return (
      <Card
        onClick={() => scrollToSection(item.type)}
        sx={{
          cursor: 'pointer',
          mb: 2,
          transition: 'all 0.3s ease',
          bgcolor: isActive ? 'white' : '#f8f9fa',
          border: `2px solid ${isActive ? '#F15B25' : 'transparent'}`,
          borderRadius: 2,
          boxShadow: isActive 
            ? '0 4px 12px rgba(241, 91, 37, 0.12)'
            : '0 1px 4px rgba(0,0,0,0.05)',
          '&:hover': {
            transform: 'translateX(4px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Icon sx={{ fontSize: 28, color: isActive ? '#F15B25': '#052973' }} />
            <Stack>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: isActive ? '#F15B25': '#052973',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {item.description}
              </Typography>
            </Stack>
            {isActive && ( <KeyboardArrowRight sx={{ color: '#F15B25', ml: 'auto' }} />
            )}
          </Stack>
        </CardContent>
      </Card>
    );
  };

  const renderMobileNav = () => (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        bgcolor: 'white',
        borderBottom: '1px solid #e0e0e0',
        pb: 1,
        pt: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          overflowX: 'auto',
          px: 2,
          pb: 1,
          '::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {industryData.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.type;
          
          return (
            <Card
              key={index}
              onClick={() => scrollToSection(item.type)}
              sx={{
                minWidth: 160,
                cursor: 'pointer',
                bgcolor: isActive ? 'white' : '#f8f9fa',
                border: `2px solid ${isActive ? '#F15B25' : 'transparent'}`,
                borderRadius: 2,
                boxShadow: isActive 
                  ? '0 4px 12px rgba(241, 91, 37, 0.12)'
                  : '0 1px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                transform: isActive ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <CardContent sx={{ px: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon sx={{ fontSize: 20, color: isActive ? '#F15B25' : '#052973' }} />
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      color: isActive ? '#F15B25' : '#052973',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.875rem',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );

  return (
    <Box 
      sx={{ 
        width: '100%', 
        bgcolor: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        py: { xs: 4, md: 4 }
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          px: { xs: 2, md: 3 },
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}
      >
        <Typography 
          variant="h2" 
          align="center"
          sx={{ 
            color: '#052973',
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            fontWeight: 700,
            mb: { xs: 3, md: 4 }
          }}
        >
          Industry Solutions by Size
        </Typography>

        <Box 
          sx={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            height: {
              xs: 'calc(100vh - 140px)', // Mobile height
              md: 'calc(100vh - 180px)'  // Desktop height
            }
          }}
        >
          {isMobile && renderMobileNav()}

          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={4}
            sx={{ 
              flexGrow: 1,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Sidebar for desktop */}
            {!isMobile && (
              <Box
                sx={{
                  width: 320,
                  flexShrink: 0,
                  overflowY: 'auto',
                  pr: 2,
                  position: 'sticky',
                  top: 0,
                  maxHeight: '100%',
                  '::-webkit-scrollbar': { display: 'none' },
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                }}
              >
                {industryData.map((item, index) => renderSidebarCard(item, index))}
              </Box>
            )}

            {/* Content Area */}
            <Box
              ref={containerRef}
              sx={{
                flex: 1,
                overflowY: 'auto',
                pr: { xs: 0, md: 1 },
                height: '100%',
                '::-webkit-scrollbar': {
                  width: '4px',
                },
                '::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                  borderRadius: '4px',
                },
                '::-webkit-scrollbar-thumb': {
                  background: '#c1c1c1',
                  borderRadius: '4px',
                  '&:hover': {
                    background: '#a1a1a1',
                  },
                },
              }}
            >
              {industryData.map((item, index) => (
                <Box
                  key={index}
                  ref={contentRefs.current[item.type]}
                  sx={{
                    mb: { xs: 3, md: 4 },
                    scrollMarginTop: { xs: '80px', md: '20px' },
                  }}
                >
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: { xs: 2, md: 5 },
                      bgcolor: '#f8f9fa',
                      borderRadius: { xs: 2, md: 4 },
                      border: '1px solid #e0e0e0'
                    }}
                  >
                    {detailedContent[item.type] && (
                      <Stack spacing={{ xs: 3, md: 4 }}>
                        <Typography 
                          variant="h3" 
                          sx={{ 
                            color: '#052973',
                            fontSize: { xs: '1.5rem', md: '2.25rem' },
                            fontWeight: 700,
                            lineHeight: 1.3
                          }}
                        >
                          {detailedContent[item.type].title}
                        </Typography>
                        
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            lineHeight: { xs: 1.6, md: 1.8 }
                          }}
                        >
                          {detailedContent[item.type].mainDescription}
                        </Typography>
                        
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            lineHeight: { xs: 1.6, md: 1.8 }
                          }}
                        >
                          {detailedContent[item.type].subDescription}
                        </Typography>

                        <Divider sx={{ my: { xs: 2, md: 3 } }} />

                        <Typography 
                          variant="h4" 
                          sx={{ 
                            color: '#052973',
                            fontSize: { xs: '1.25rem', md: '1.75rem' },
                            fontWeight: 600,
                            lineHeight: 1.3
                          }}
                        >
                          {detailedContent[item.type].subtitle}
                        </Typography>

                        <List sx={{ pt: { xs: 1, md: 2 } }}>
                          {detailedContent[item.type].features.map((feature, idx) => (
                            <ListItem 
                              key={idx}
                              sx={{
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                mb: { xs: 2, md: 3 },
                                p: 0
                              }}
                            >
                              <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'flex-start',
                                mb: { xs: 0.5, md: 1 }
                              }}>
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                  <CheckCircle sx={{ 
                                    color: '#F15B25',
                                    fontSize: { xs: 20, md: 24 }
                                  }} />
                                </ListItemIcon>
                                <Typography 
                                  variant="h6" 
                                  sx={{ 
                                    color: '#052973',
                                    fontWeight: 600,
                                    fontSize: { xs: '1rem', md: '1.25rem' }
                                  }}
                                >
                                  {feature.title}
                                </Typography>
                              </Box>
                              <Typography 
                                variant="body1" 
                                sx={{ 
                                  pl: { xs: 4.5, md: 6 },
                                  color: 'text.secondary',
                                  fontSize: { xs: '0.875rem', md: '1rem' },
                                  lineHeight: { xs: 1.5, md: 1.7 }
                                }}
                              >
                                {feature.description}
                              </Typography>
                            </ListItem>
                          ))}
                        </List>

                      </Stack>
                    )}
                  </Paper>
                </Box>
              ))}
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default IndustryCards; 