"use client";

import React, { useState } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import PaymentModal from "./PaymentModal";
import SweetAlert from "../SweetAlert/SweetAlert";

const PackageDetails = ({ slug, price, Name }) => {
  const [openModal, setOpenModal] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0); 

  const applyCouponCode = () => {
    if (couponCode.trim().toUpperCase() === "SANJAY") {
      setSuccess(true);
      setError("");
      setCouponDiscount(10); 
      SweetAlert.success("Coupon Applied Successfully");
      
    } else {
      setSuccess(false);
      setError("Coupon code invalid.");
      setCouponDiscount(0);
      SweetAlert.error("Invalid Coupon Code");
   
    }
  };

  const clearCouponCode = () => {
    setCouponCode("");
    setSuccess(false);
    setCouponDiscount(0);
  };

  const handleClose = () => setOpenModal(false);

  const couponDiscountAmount = (price * couponDiscount) / 100; 
  const subTotal = Math.max(price - couponDiscountAmount, 0); 
  const gst = (subTotal * 18) / 100; 
  const total = subTotal + gst; 

  return (
    <Box p={3} borderRadius={2} border="1px solid #ccc" bgcolor="#f9f9f9">
      <Typography variant="h5" mb={3} textAlign="center" color="#052973">
        Package Details: {Name}
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="space-between">
        <Box
          flex={2}
          border={1}
          borderColor="grey.300"
          borderRadius={2}
          overflow="hidden"
        >
          <Stack direction="row" bgcolor="#052973" color="white" p={1}>
            <Typography flex={1} textAlign="left" fontWeight="bold">
              Package Name
            </Typography>
            <Typography flex={1} textAlign="right" fontWeight="bold">
              Details
            </Typography>
          </Stack>
          <Box>
            {/* Cost */}
            <Stack
              direction="row"
              p={1}
              borderBottom={1}
              borderColor="grey.300"
            >
              <Typography flex={1} textAlign="left">
                Cost
              </Typography>
              <Typography flex={1} textAlign="right">
                ₹{parseFloat(price).toFixed(2)}
              </Typography>
            </Stack>

            {/* Coupon Code */}
            <Stack
              direction="row"
              p={1}
              borderBottom={1}
              borderColor="grey.300"
            >
              <Typography flex={1} textAlign="left">
                Coupon Code (-)
              </Typography>
              <Typography flex={1} textAlign="right">
                {couponDiscount > 0
                  ? `(${couponDiscount}%)   ₹${couponDiscountAmount.toFixed(2)}`
                  : "₹0.00"}
              </Typography>
            </Stack>

            {/* Sub Total */}
            <Stack
              direction="row"
              p={1}
              borderBottom={1}
              borderColor="grey.300"
            >
              <Typography flex={1} textAlign="left">
                Sub Total
              </Typography>
              <Typography flex={1} textAlign="right">
                ₹{subTotal.toFixed(2)}
              </Typography>
            </Stack>

            {/* GST */}
            <Stack
              direction="row"
              p={1}
              borderBottom={1}
              borderColor="grey.300"
            >
              <Typography flex={1} textAlign="left">
                GST (18%) (+)
              </Typography>
              <Typography flex={1} textAlign="right">
                ₹{gst.toFixed(2)}
              </Typography>
            </Stack>

            {/* Total */}
            <Stack direction="row" p={1} bgcolor="grey.200">
              <Typography flex={1} textAlign="left" fontWeight="bold">
                Total
              </Typography>
              <Typography flex={1} textAlign="right" fontWeight="bold">
                ₹{total.toFixed(2)}
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box flex={1} borderRadius={2} overflow="hidden">
          <Stack
            direction="row"
            bgcolor="#052973"
            color="white"
            p={1}
            style={{ borderTopLeftRadius: "2px" }}
          >
            <Typography flex={1} textAlign="left" fontWeight="bold">
              {Name}
            </Typography>
            <Typography flex={1} textAlign="right" fontWeight="bold">
              ₹{parseFloat(price).toFixed(2)}
            </Typography>
          </Stack>
          <Stack spacing={2} marginTop={3}>
            <Box>
              <Typography mb={1}>Coupon Code</Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  error={!!error}
                  InputProps={{
                    endAdornment: (
                      success && (
                        <Typography
                        style={{
                          color: "green",
                          fontSize: "22px",
                          fontWeight: "700",
                          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 255, 0, 0.5)"
                        }}
                        variant="caption"
                      >
                        ✓
                      </Typography>
                      
                      
                      )
                    ),
                  }}
                />
                {success ? (
                  <Button
                    onClick={clearCouponCode}
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    X
                  </Button>
                ) : (
                  <Button
                    style={{ backgroundColor: "#f15b25", color: "white" }}
                    onClick={applyCouponCode}
                    variant="contained"
                  >
                    APPLY
                  </Button>
                )}
              </Stack>
              {/* {error ? (
                <Typography mt={1} color="error">
                  {error}
                </Typography>
              ) : (
                success && (
                  <Typography mt={1} color="green">
                    Coupon Applied Successfully
                  </Typography>
                )
              )} */}
            </Box>

            {/* Reference Code */}
            <Box>
              <Typography mb={1}>Reference Code</Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter Reference Code"
                value={referenceCode}
                onChange={(e) => setReferenceCode(e.target.value)}
              />
            </Box>

            {/* Pay Now Button */}
            <Button
              style={{ backgroundColor: "#f15b25", color: "white" }}
              variant="contained"
              fullWidth
              size="large"
              onClick={() => setOpenModal(true)}
            >
              PAY NOW
            </Button>
          </Stack>
        </Box>
      </Stack>

      <PaymentModal
        open={openModal}
        onClose={handleClose}
        slug={slug}
        referenceCode={referenceCode}
        couponCode={couponCode}
      />
    </Box>
  );
};

export default PackageDetails;
