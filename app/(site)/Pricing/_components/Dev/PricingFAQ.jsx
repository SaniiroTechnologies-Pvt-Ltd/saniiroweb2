"use client";

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import apiEndpoints from '@/utils/apiEndpoints';
import Pagination from '@/components/Pagination';
import CustomPagination from '@/components/CaseStudy/CaseStudyPagination';

// Dynamic fetch from API using slug
async function fetchPricingFAQ() {
  try {
    const res = await fetch(`${apiEndpoints.Faqs}`, {
      next: { revalidate: 60 },  // ISR + cache
      cache: 'no-store', // disable ISR if data updates frequently
    });

    if (!res.ok) {
      // Log the response status for debugging
      console.error(`Error fetching pricing faqs: ${res.status} ${res.statusText}`);
      throw new Error("Error fetching pricing faqs!");
    }

    return res.json();
  } catch (error) {
    // Handle the error gracefully
    console.error("An error occurred while fetching pricing faqs:", error);
    // Return a default value or an empty array
    return []; // or return null; depending on your use case
  }
}

const PricingFAQ = () => {
  const [faqItems, setFaqItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchFAQs = async () => {
      const pricingFAQsResponse = await fetchPricingFAQ();
      const faqs = pricingFAQsResponse.Data?.FrequentAskQuestions || [];
      setFaqItems(faqs);
    };

    fetchFAQs();
  }, []);

  const totalCount = faqItems.length;

  // Calculate the items to display based on the current page
  const displayedFAQs = faqItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h2" align="center" fontWeight="bold" color={'primary.main'} sx={{ mb: 4 }}>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 5, maxWidth: '550px', mx: 'auto' }}>
        Still have questions? We're here to help you make the right choice.
      </Typography>

      <Box sx={{ mb: 6 }}>
        {displayedFAQs.map((item, index) => (
          <Accordion key={index}
            sx={{
              borderRadius: "8px",
              marginBottom: "16px",
              p: "8px 16px",
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              boxShadow: "1px 0px 3px 2px #E8E8E8",
            }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography fontWeight="medium" fontSize={18}>{item.Question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary" dangerouslySetInnerHTML={{ __html: item.Description }} />
            </AccordionDetails>
          </Accordion>
        ))}

        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onChange={(value) => setCurrentPage(value)}
        />
      </Box>

      <Paper
        elevation={0}
        sx={{
          textAlign: 'center',
          p: 4,
          bgcolor: 'background.default',
          borderRadius: 2,
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Need a custom plan?
        </Typography>
        <Typography sx={{ mb: 2, color: 'text.secondary', maxWidth: '500px', mx: 'auto' }}>
          We understand that every business has unique requirements. Our team can create a customized solution just for you.
        </Typography>
        <Typography variant="body1" color="primary" fontWeight="bold">
          Call us at: +91 98765 43210
        </Typography>
      </Paper>
    </Container>
  );
};

export default PricingFAQ;
