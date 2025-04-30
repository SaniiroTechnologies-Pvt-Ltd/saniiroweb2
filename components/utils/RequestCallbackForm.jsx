"use client"

import apiEndpoints from "@/utils/apiEndpoints";
import countryCodes from "@/components/data/country_codes_data.json";
import { ChatBubble, Email, Language, Person, PhoneAndroid } from "@mui/icons-material";
import { Box, Button, CircularProgress, Grid, InputAdornment, MenuItem, TextField, Tooltip, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import SweetAlert from "../SweetAlert/SweetAlert";
import ReCAPTCHA from "react-google-recaptcha";

const inputStyles = {
  borderRadius: "12px", backgroundColor: "#FFFFFF",
};
const inputSize = "small";


export default function RequestCallbackForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isClient, setIsClient] = useState(false); // Detect client-side
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Ensure this runs only on client-side after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // initial form values
  const [formValues, setFormValues] = useState({
    Name: "",
    PhoneCode: "91",
    PhoneNumber: "",
    Email: "",
    Message: ""
  });

  // Find selected country data (only run when `isClient` is true)
  const selectedCountry = isClient
    ? countryCodes.find((country) => `${country.dial_code}` === formValues.PhoneCode)
    : null;

  const handlePhoneChange = (e) => {
    if (!selectedCountry) return; // Prevent errors during SSR
    const maxLength = selectedCountry?.mobile_number_length || 10;

    let value = e.target.value.replace(/\D/g, ""); // Keep only numbers

    // 🚨 Remove leading '0' if present
    if (value.startsWith("0")) {
      value = value.substring(1);
    }

    // 🚀 Restrict to max length & update state
    setFormValues({ ...formValues, PhoneNumber: value.slice(0, maxLength) }); // Restricts non-numeric input
  };


  const handleCaptchaVerification = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  // normal validation
  const validateFields = () => {

    const newErrors = {};
    if (!formValues.Name.trim()) newErrors.Name = "Full Name is required";
    if (!formValues.PhoneCode.trim()) newErrors.PhoneCode = "Phone Code Name is required";
    if (!formValues.PhoneNumber.trim()) newErrors.PhoneNumber = "Phone Number Name is required";
    if (!formValues.Email.trim()) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.Email)) newErrors.Email = "Invalid email address";
    if (!formValues.Message.trim()) newErrors.Message = "Message is required";
    if (!captchaVerified.trim()) newErrors.Message = "captcha is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return; // stop form submission if validation fails

    if (!captchaVerified) {
      SweetAlert.error("Error", "Please verify that you are not a robot.");
      return; // 🚀 Prevents submission if CAPTCHA is not verified
    }

    setLoading(true); // ✅ Enable loading state immediately
    await finalSubmit(); // ✅ Proceed with submission right away
  };


  const finalSubmit = async () => {

    const payload = { ...formValues };
    await axios.post(apiEndpoints.RequestDemo, payload).then(response => {
      if (response.data.Code === 1000) {
        SweetAlert.success("Success", "Thank you for your submission! Our team will call you shortly.");
        resetForm();
      } else {
        SweetAlert.error("Error", response?.data?.message || "Submission failed.");
      }
    })
      .catch(() => {
        SweetAlert.error("Error", "Something went wrong during submission.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const resetForm = () => {
    setFormValues({
      Name: "",
      PhoneCode: "91",
      PhoneNumber: "",
      Email: "",
      Message: ""
    });
    setCaptchaVerified(false); // ✅ Clears CAPTCHA verification
    setErrors({});
  };

  return (
    <Fragment>
      <Box
        component="form"
        onSubmit={handleFormSubmit}
        sx={{ mx: { xs: 0, md: 2, lg: 2 }, px: { xs: 0, md: 4, lg: 2 } }}
      >
        <Grid container spacing={2}>
          {/* Full Name */}
          <Grid item xs={12}>
            <Tooltip
              title={errors.Name || ""}
              open={Boolean(errors.Name)}
              placement="bottom-end"
              arrow
              disableFocusListener
              disableHoverListener={!errors.Name}
              disableTouchListener
            >
              <TextField
                fullWidth
                size={inputSize}
                placeholder="What do we call you?"
                name="Name"
                value={formValues.Name}
                onChange={(e) => {
                  setFormValues({ ...formValues, Name: e.target.value });
                }}
                error={Boolean(errors.Name)}
                InputProps={{
                  sx: {
                    ...inputStyles,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.Name ? "#f44336" : "#ccc",
                      borderWidth: errors.Name ? "2px" : "1px", // 🎯 Here we increase border width
                    },
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: "text.tertiary" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Tooltip>
          </Grid>

          {/* Work Email */}
          <Grid item xs={12}>
            <Tooltip
              title={errors.Email || ""}
              open={Boolean(errors.Email)}
              placement="bottom-end"
              arrow
              disableFocusListener
              disableHoverListener={!errors.Email}
              disableTouchListener
            >
              <TextField
                fullWidth
                size={inputSize}
                type="email"
                placeholder="Please enter your Business email ID"
                name="Email"
                value={formValues.Email}
                onChange={(e) => setFormValues({ ...formValues, Email: e.target.value })}
                error={Boolean(errors.Email)}
                InputProps={{
                  sx: {
                    ...inputStyles,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.Email ? "#f44336" : "#ccc",
                      borderWidth: errors.Email ? "2px" : "1px", // 🎯 Here we increase border width
                    },
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: "text.tertiary" }} />
                    </InputAdornment>
                  ),
                }}
              // required
              />
            </Tooltip>
          </Grid>

          {/* Phone Code */}
          <Grid item xs={4}>
            <Tooltip
              title={errors.PhoneCode || ""}
              open={Boolean(errors.PhoneCode)}
              placement="bottom-end"
              arrow
              disableFocusListener
              disableHoverListener={!errors.PhoneCode}
              disableTouchListener
            >
              <TextField
                fullWidth
                size={inputSize}
                select
                placeholder="Phone Code"
                name="PhoneCode"
                value={formValues.PhoneCode}
                onChange={(e) => setFormValues({ ...formValues, PhoneCode: e.target.value })}
                error={Boolean(errors.PhoneCode)}
                InputProps={{
                  sx: {
                    ...inputStyles,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.PhoneCode ? "#f44336" : "#ccc",
                      borderWidth: errors.PhoneCode ? "2px" : "1px", // 🎯 Here we increase border width
                    },
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Language sx={{ color: "text.tertiary" }} />
                    </InputAdornment>
                  ),
                }}
              >
                {countryCodes.map((code, index) => (
                  <MenuItem key={code.dial_code + index} value={code.dial_code}>
                    {code.name} (+{code.dial_code})
                  </MenuItem>
                ))}

              </TextField>
            </Tooltip>
          </Grid>

          {/* Phone Number */}
          <Grid item xs={8}>
            <Tooltip
              title={errors.PhoneNumber || ""}
              open={Boolean(errors.PhoneNumber)}
              placement="bottom-end"
              arrow
              disableFocusListener
              disableHoverListener={!errors.PhoneNumber}
              disableTouchListener
            >
              <TextField
                fullWidth
                size={inputSize}
                placeholder="Phone Number"
                type="tel"
                name="PhoneNumber"
                value={formValues.PhoneNumber}
                // onChange={(e) => setFormValues({ ...formValues, PhoneNumber: e.target.value })}
                onChange={handlePhoneChange}
                error={Boolean(errors.PhoneNumber)}
                InputProps={{
                  maxLength: selectedCountry?.mobile_number_length || 10,
                  sx: {
                    ...inputStyles,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.PhoneNumber ? "#f44336" : "#ccc",
                      borderWidth: errors.PhoneNumber ? "2px" : "1px", // 🎯 Here we increase border width
                    },
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneAndroid sx={{ color: "text.tertiary" }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box sx={{ fontSize: "12px", color: "gray" }}>
                        {formValues.PhoneNumber.length} / {selectedCountry?.mobile_number_length || 10}
                      </Box>
                    </InputAdornment>
                  ),
                }}
              // required
              />
            </Tooltip>
          </Grid>

          {/* Message */}
          <Grid item xs={12}>
            <Tooltip
              title={errors.Message || ""}
              open={Boolean(errors.Message)}
              placement="bottom-end"
              arrow
              disableFocusListener
              disableHoverListener={!errors.Message}
              disableTouchListener
            >
              <TextField
                fullWidth
                size={inputSize}
                placeholder="How can our team helps you?"
                type="tel"
                name="Message"
                value={formValues.Message}
                onChange={(e) => setFormValues({ ...formValues, Message: e.target.value })}
                error={Boolean(errors.Message)}
                multiline  // ✅ Enables textarea behavior
                rows={4}   // ✅ Defines default visible rows
                InputProps={{
                  sx: {
                    ...inputStyles,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.Message ? "#f44336" : "#ccc",
                      borderWidth: errors.Message ? "2px" : "1px", // 🎯 Here we increase border width
                    },
                    alignItems: "flex-start",
                  },
                  startAdornment: (
                    <InputAdornment position="start" sx={{ marginTop: "12px" }}>
                      <ChatBubble sx={{ color: "text.tertiary", fontSize: "20px" }} />
                    </InputAdornment>
                  ),
                }}
              // required
              />
            </Tooltip>
          </Grid>

          {/* reCaptcha */}
          <Grid item xs={12}>
            <Tooltip
              title={captchaVerified || ""}
              open={captchaVerified}
              placement="bottom-end"
              arrow
              disableFocusListener
              disableHoverListener={!captchaVerified}
              disableTouchListener
            >
              {/* ✅ Add reCAPTCHA below the last input field */}
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaVerification}
              />

              {/* 🚀 Show error if CAPTCHA isn’t verified */}
              {!captchaVerified && (
                <Typography component={"span"} style={{ color: "red" }}>
                  Please verify that you are not a robot.
                </Typography>
              )}
            </Tooltip>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                borderRadius: "10px",
                backgroundColor: "secondary.main",
                fontWeight: "bold",
                height: "50px",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "secondary.light",
                  borderColor: "primary.main",
                  border: "1px solid"
                },
              }}
            >
              <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1
              }}>
                {loading && <CircularProgress size={20} sx={{ color: "primary.contrastText" }} />}
                {"Submit Request"}
              </Box>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}