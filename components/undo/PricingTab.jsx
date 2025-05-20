"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import PriceCardSection from "./PriceCardSection";
import SaveUpTo from "./SaveUpTo";
import axios from "axios";
import FeatureTable from "./PricingFeaturesTable";
import TagSection from "./PracingTagSection";
import apiEndpoints from "@/utils/apiEndpoints";
import PricingPlans from "../Pricing/PricingPlans";

const PricingTab = () => {
  const [plan, setPlan] = useState("Monthly");
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
  const featureTableRef = useRef(null);

  const handlePlan = (selectedPlan) => {
    setPlan(selectedPlan);
    const selectedPlanData = subscriptionPlans.find(
      (plan) => plan.CategoryName === selectedPlan
    );
    setSelectedPlanDetails(selectedPlanData);
  };

  useEffect(() => {
    const fetchSubscriptionPlans = async () => {
      try {
        const response = await axios.get(
          `${apiEndpoints.priceComparison}`
        );
        const plans = response.data.Data;
        setSubscriptionPlans(plans);
        if (plans.length > 0) {
          setPlan(plans[0].CategoryName);
          setSelectedPlanDetails(plans[0]);
        }
      } catch (error) {
        console.error("Error fetching subscription plans:", error);
      }
    };

    fetchSubscriptionPlans();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: 'border-box'
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
            {subscriptionPlans.map((d) => (
              <Stack
                key={d.CategoryName}
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
                      background: plan === d.CategoryName ? "#FFFFFF" : "none",
                      opacity: plan === d.CategoryName ? 0.7 : 1,
                      fontFamily: "Work Sans",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "16px",
                      textAlign: "center",
                      color: plan === d.CategoryName ? "#000000" : "#FFFFFF",
                      cursor: "pointer",
                    }}
                    onClick={() => handlePlan(d.CategoryName)}
                  >
                    {d.CategoryName}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
      </Box>

      <SaveUpTo percentage={34} />

      {selectedPlanDetails && <PricingPlans pricingPlans={selectedPlanDetails} featureTableRef={featureTableRef} />}

      <TagSection />
      {selectedPlanDetails && (
        <FeatureTable ref={featureTableRef} features={selectedPlanDetails.Compare} />
      )}
    </>
  );
};

export default PricingTab;


{/* {selectedPlanDetails && (
        <PriceCardSection selectedPlanDetails={selectedPlanDetails} />
      )} */}