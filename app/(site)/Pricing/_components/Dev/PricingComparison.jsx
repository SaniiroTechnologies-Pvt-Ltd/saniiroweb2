import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Container,
  Chip,
  useTheme,
  useMediaQuery,
  Card,
  Fade,
  alpha,
  Tooltip
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const PricingComparison = ({ comparisons, plans, highlightPlan = null, planNames }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (feature) => {
    setExpanded(expanded === feature ? null : feature);
  };

  const [expandedSections, setExpandedSections] = useState(() =>
    comparisons.reduce((acc, curr, i) => {
      acc[curr.heading] = i === 0; // only first section expanded
      return acc;
    }, {})
  );

  const handleToggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };


  const renderCheckmark = (values) => {
    return values === "true" ?
      (<CheckIcon fontSize="small" sx={{ color: theme.palette.secondary.main }} />) : values === "false" ?
        (<CloseIcon fontSize="small" sx={{ color: theme.palette.grey[400] }} />) : '';
    // !Array.isArray(values) ?
    //   resnderQuantityRate(values) : values;
  };


  const renderValue = (value) => {
    if (typeof value === "boolean" || value === "true" || value === "false") {
      const boolVal =
        typeof value === "string"
          ? value.toLowerCase() === "true"
          : Boolean(value);
      return boolVal ? (
        <CheckIcon color="success" fontSize="small" />
      ) : (
        <CloseIcon color="error" fontSize="small" />
      );
    } else if (Array.isArray(value)) {
      return (
        <Table size="small">
          <TableBody>
            {value.map((row, i) => (
              <TableRow key={i}>
                <TableCell sx={{ borderBottom: 0, px: 0.5 }}>
                  <Typography variant="caption">
                    {typeof row === "object" && row !== null
                      ? Object.entries(row)
                        .map(([k, v]) => `${k}: ${v}`)
                        .join(", ")
                      : String(row)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    } else {
      return (
        <Tooltip title={String(value)}>
          <Typography variant="body2" noWrap>
            {value}
          </Typography>
        </Tooltip>
      );
    }
  };



  // const PricingComparisonTableBody = ({ comparisons, planNames, expandedSections, onToggleSection }) => {
  //   return (
  //     <TableBody>
  //       {comparisons.map((feature, index) => (
  //         <React.Fragment key={feature.heading}>
  //           {feature?.Data?.length > 0 && (
  //             <TableRow sx={{ bgcolor: "action.hover" }}>
  //               <TableCell colSpan={6} sx={{ py: 2 }}>
  //                 <Accordion
  //                   expanded={expandedSections[feature.heading]}
  //                   onChange={() => onToggleSection(feature.heading)}
  //                   disableGutters
  //                   elevation={0}
  //                   sx={{
  //                     backgroundColor: "transparent",
  //                     boxShadow: "none",
  //                     borderBottom: "1px solid #eee",
  //                     "&::before": { display: "none" },
  //                     transition: "all 0.3s ease-in-out",
  //                     width: '100%',
  //                   }}
  //                 >
  //                   <AccordionSummary expandIcon={<ExpandMoreIcon />}>
  //                     <Typography variant="subtitle1" fontWeight="bold">
  //                       {feature.heading}
  //                     </Typography>
  //                   </AccordionSummary>
  //                   <AccordionDetails sx={{ p: 0, width: '100%' }}>
  //                     {feature.Data.map((subFeature) => (
  //                       <TableRow key={subFeature.field1} hover>
  //                         <TableCell component="th" scope="row">
  //                           {subFeature.field1 || feature.heading}
  //                         </TableCell>
  //                         {planNames.map((plan) => {
  //                           const matched = subFeature.CompareCheckbox.find((d) => d.Name === plan);
  //                           return (
  //                             <TableCell key={plan} align="center">
  //                               {matched ? renderValue(matched.Value) : "-"}
  //                             </TableCell>
  //                           );
  //                         })}
  //                       </TableRow>
  //                     ))}
  //                   </AccordionDetails>
  //                 </Accordion>
  //               </TableCell>
  //             </TableRow>
  //           )}
  //         </React.Fragment>
  //       ))}
  //     </TableBody>
  //   );
  // };

  const PricingComparisonTableBody = ({ comparisons, planNames, highlightPlan, popularPlans = [] }) => {
    return (
      <TableBody>
        {comparisons.map((feature) => (
          <React.Fragment key={feature.heading}>
            {feature?.Data?.length > 1 && (
              <TableRow sx={{ bgcolor: "action.hover" }}>
                <TableCell sx={{ bgcolor: '#EBEBEB', py: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {feature.heading}
                  </Typography>
                </TableCell>
                <TableCell colSpan={planNames.length} sx={{ py: 2 }}>
                </TableCell>
              </TableRow>
            )}

            {feature.Data.map((subFeature) => (
              <TableRow key={subFeature.field1} hover>
                <TableCell component="th" scope="row" sx={{ bgcolor: '#EBEBEB', }}>
                  {subFeature.field1 || feature.heading}
                </TableCell>
                {planNames.map((plan, index) => {
                  const matched = subFeature.CompareCheckbox.find((d) => d.Name === plan);
                  const isHighlighted = highlightPlan === index;
                  const isPopular = popularPlans.includes(plan);
                  return (
                    <TableCell key={plan} align="center"
                      sx={{
                        bgcolor: isHighlighted
                          ? alpha(theme.palette.secondary.main, 0.2)
                          : isPopular
                            ? alpha(theme.palette.primary.main, 0.1)
                            : "inherit",
                      }}
                    >
                      {matched ? renderValue(matched.Value) : "-"}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </React.Fragment>
        ))}
      </TableBody>
    );
  };


    // Mobile view renders cards for each plan
    if (isMobile) {
      const plansToShow = plans.length > 0 ? [plans[highlightPlan]] : [];
  
      return (
        <Box sx={{ py: 2, px: 2 }}>
          <Fade in={true} timeout={500}>
            <Box>
              {plansToShow.map((plan, planIndex) => (
                <Card
                  key={plan.Name}
                  sx={{
                    mb: 4,
                    overflow: 'visible',
                    boxShadow: 2,
                    borderLeft: highlightPlan === planIndex ? `4px solid ${theme.palette.primary.main}` : 'none',
                    animation: `slideIn 0.3s ease-in-out ${planIndex * 0.1}s both`,
                    '@keyframes slideIn': {
                      '0%': { opacity: 0, transform: 'translateX(-10px)' },
                      '100%': { opacity: 1, transform: 'translateX(0)' }
                    }
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: plan.Name === 'Saniiro Standard' ? 'secondary.main' : 'background.paper',
                      color: plan.Name === 'Saniiro Standard' ? 'secondary.contrastText' : 'text.primary',
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      position: 'relative'
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold" align="center">
                      {plan.Name.charAt(0).toUpperCase() + plan.Name.slice(1)}
                    </Typography>
                    {plan.IsPopular === 1 && (
                      <Chip
                        label="Popular"
                        color="secondary"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: -12,
                          right: 20,
                          fontWeight: 'bold',
                        }}
                      />
                    )}
                  </Box>
  
                  <Box sx={{ p: 2 }}>
                    {comparisons.map((category) => (
                      <Box key={category.heading} sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                          {category.heading}
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        {category.Data.map((feature) => {
                          const match = feature.CompareCheckbox.find(d => d.Name === plan.Name);
                          return (
                            <Box
                              key={feature.field1}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                py: 1,
                                borderBottom: '1px solid',
                                borderColor: 'divider'
                              }}
                            >
                              <Typography variant="body2">{feature.field1}</Typography>
                              {renderCheckmark(match?.Value)}
                            </Box>
                          );
                        })}
                      </Box>
                    ))}
                  </Box>
                </Card>
              ))}
            </Box>
          </Fade>
        </Box>
      );
    }
  
  

  // Desktop view renders a table
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Fade in={true} timeout={500}>
        <TableContainer component={Paper} sx={{
          boxShadow: 3, borderRadius: 2,
          overflow: 'hidden',
          '& .MuiTableRow-root:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            transition: 'background-color 0.2s'
          }
        }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="A plan Comparison Table Data">
            <TableHead>
              <TableRow sx={{ bgcolor: '#ebebeb' }}>
                <TableCell sx={{ width: '20%', fontWeight: 'bold', }}>Features</TableCell>
                {plans.map((plan, index) => (
                  <TableCell
                    key={plan.Name.trim()}
                    align="center"
                    sx={{
                      width: '14%',
                      position: 'relative',
                      overflow: 'hidden',
                      bgcolor: highlightPlan === index ? alpha(theme.palette.secondary.main, 0.2) : plan.IsPopular === 1 ?
                        alpha(theme.palette.primary.main, 0.1) : 'inherit',
                    }}
                  >
                    {/* Ribbon */}
                    {plan.IsPopular === 1 && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 1,
                          right: 1,
                          width: 60,
                          textAlign: 'center',
                          backgroundColor: 'secondary.main',
                          color: 'common.white',
                          // color: 'secondary.main',
                          fontSize: '10px',
                          fontWeight: 600,
                          p: '0px',
                          zIndex: 2,
                          // borderRadius: '2px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Popular
                      </Box>
                    )}

                    <Typography
                      variant="subtitle1"
                      fontWeight={highlightPlan === index ? 'bold' : 'medium'}
                      sx={{ color: highlightPlan === index ? 'secondary.main' : 'inherit' }}
                    >
                      {plan.Name.trim()}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <PricingComparisonTableBody
              comparisons={comparisons}
              planNames={plans.map(p => p.Name)}
              highlightPlan={highlightPlan}
              popularPlans={plans.map(p => { return p.IsPopular === 1 ? p.Name : '' })}
            />
          </Table>

        </TableContainer>
      </Fade>
    </Container >
  );
};

export default PricingComparison;
