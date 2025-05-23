"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import SaveUpTo from "./SaveUpTo";
import FeatureTable from "./PricingFeaturesTable";
import TagSection from "./PracingTagSection";
import PricingPlans from "./PricingPlans";

const PricingOptions = ({ subscriptionPlans }) => {
  const [subscriptionType, setSubscriptionType] = useState("");
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
  const featureTableRef = useRef(null);

  useEffect(() => {
    // Set the initial subscription type to the first plan's category name if available
    if (subscriptionPlans.length > 0) {
      setSubscriptionType(subscriptionPlans[0].CategoryName);
      setSelectedPlanDetails(subscriptionPlans[0]);
    }
  }, [subscriptionPlans]);

  // Handles pricing plan details
  const handlePlan = (selectedPlan) => {
    setSubscriptionType(selectedPlan);
    const selectedPlanData = subscriptionPlans.find(
      (plan) => plan.CategoryName === selectedPlan
    );
    setSelectedPlanDetails(selectedPlanData);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            zIndex: "1",
            position: "absolute",
            translateY: "-25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {subscriptionPlans.map((plan) => (
              <Stack
                key={plan.CategoryName}
                sx={{
                  background: "#34A853",
                  borderRadius: "8px",
                  boxShadow: "3px 4px 4.3px 0px #00000040",
                }}
                direction="row"
                spacing={4}
                p={"16px 4px"}
              >
                <Box>
                  <Typography
                    sx={{
                      padding: "13px 42px",
                      borderRadius: "5px",
                      background: subscriptionType === plan.CategoryName ? "#FFFFFF" : "none",
                      opacity: subscriptionType === plan.CategoryName ? 0.7 : 1,
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "16px",
                      textAlign: "center",
                      color: subscriptionType === plan.CategoryName ? "#000000" : "#FFFFFF",
                      cursor: "pointer",
                    }}
                    onClick={() => handlePlan(plan.CategoryName)}
                  >
                    {plan.CategoryName}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
      </Box>

      <SaveUpTo percentage={34} />

      {selectedPlanDetails &&
        <PricingPlans pricingPlans={selectedPlanDetails} featureTableRef={featureTableRef} />}

      <TagSection />
      
      {selectedPlanDetails && (
        <FeatureTable ref={featureTableRef} features={selectedPlanDetails.Compare} />
      )}
    </>
  );
};

export default PricingOptions;


{/* {selectedPlanDetails && (
        <PriceCardSection selectedPlanDetails={selectedPlanDetails} />
      )} */}