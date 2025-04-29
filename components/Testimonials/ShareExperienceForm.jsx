"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Tooltip,
  styled,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import apiEndpoints from "@/utils/apiEndpoints";
import SweetAlert from "@/components/SweetAlert/SweetAlert";
import CountryStateSelector from "@/components/Home/CountryStateSelector";
import ReCAPTCHA from "react-google-recaptcha";
import { ChatBubble, CloudUpload } from "@mui/icons-material";

// for file upload button input
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const inputStyles = {
  borderRadius: "12px", backgroundColor: "#FFFFFF",
};
const inputSize = "small";

const ShareExperienceForm = () => {
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isClient, setIsClient] = useState(false); // Detect client-side
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("123");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    designation: "",
    companyName: "",
    feedback: "",
    captcha: "",
    file: null,
    CountryId: selectedCountry,
    StateId: selectedState,
  });

  const [errors, setErrors] = useState({});

  const [countriesLoading, setCountriesLoading] = useState(false);
  const [statesLoading, setStatesLoading] = useState(false);

  // Ensure this runs only on client-side after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setCountriesLoading(true);
        const countriesRes = await axios.get(apiEndpoints.Country);
        const countriesData = countriesRes.data.Data || [];
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries", error);
      } finally {
        setCountriesLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states
  useEffect(() => {
    const fetchStates = async () => {
      try {
        setStatesLoading(true);
        if (selectedCountry) {
          const statesRes = await axios.get(apiEndpoints.State, {
            params: { CountryId: selectedCountry },
          });
          setStates(statesRes.data.Data || []);
        }
      } catch (error) {
        console.error("Error fetching states", error);
      } finally {
        setStatesLoading(false);
      }
    };
    fetchStates();
    setSelectedState("");
  }, [selectedCountry]);

  const handleCaptchaVerification = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };


  const validateFields = () => {
    const newErrors = {};
    if (!formValues.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formValues.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = "Invalid email address";
    if (!formValues.designation.trim()) newErrors.designation = "Designation is required";
    if (!formValues.companyName.trim()) newErrors.companyName = "Company Name is required";
    if (!formValues.feedback.trim()) newErrors.feedback = "Feedback is required";
    if (!selectedCountry) newErrors.CountryId = "Country is required";
    if (!selectedState) newErrors.StateId = "State is required";
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

    SweetAlert.success("Success", "Temperory sent.");
    setLoading(false);
    resetForm();

    // await axios.post(apiEndpoints.RequestDemo, payload).then(response => {
    //   if (response.data.Code === 1000) {
    //     SweetAlert.success("Success", "Thank you for your submission! Our team will call you shortly.");
    //     resetForm();
    //   } else {
    //     SweetAlert.error("Error", response?.data?.message || "Submission failed.");
    //   }
    // })
    //   .catch(() => {
    //     SweetAlert.error("Error", "Something went wrong during submission.");
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };


  const resetForm = () => {
    setFormValues({
      fullName: "",
      email: "",
      designation: "",
      companyName: "",
      feedback: "",
      captcha: "",
      file: null,
      CountryId: selectedCountry,
      StateId: selectedState,
    });

    setCaptchaVerified(false); // ✅ Clears CAPTCHA verification
    setSelectedState("");
    setSelectedCountry("123");
    setErrors({});
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit} sx={{ mx: { xs: 0, md: 2, lg: 2 }, px: { xs: 0, md: 4, lg: 2 } }}>
      <Grid container spacing={2}>
        {/* Full Name */}
        <Grid item xs={12}>
          <Tooltip
            title={errors.fullName || ""}
            open={Boolean(errors.fullName)}
            placement="bottom-end"
            arrow
            disableFocusListener
            disableHoverListener={!errors.fullName}
            disableTouchListener
          >
            <TextField
              fullWidth
              size={inputSize}
              placeholder="Full Name"
              name="fullName"
              value={formValues.fullName}
              onChange={(e) => {
                setFormValues({ ...formValues, fullName: e.target.value });
              }}
              error={Boolean(errors.fullName)}
              InputProps={{
                sx: {
                  ...inputStyles,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.fullName ? "#f44336" : "#ccc",
                    borderWidth: errors.fullName ? "2px" : "1px", // 🎯 Here we increase border width
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: "text.tertiary" }} />
                  </InputAdornment>
                ),
              }}
            // required
            />
          </Tooltip>
        </Grid>

        {/* Work Email */}
        <Grid item xs={12}>
          <Tooltip
            title={errors.email || ""}
            open={Boolean(errors.email)}
            placement="bottom-end"
            arrow
            disableFocusListener
            disableHoverListener={!errors.email}
            disableTouchListener
          >
            <TextField
              fullWidth
              size={inputSize}
              type="email"
              placeholder="Work Email"
              name="email"
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              error={Boolean(errors.email)}
              InputProps={{
                sx: {
                  ...inputStyles,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.email ? "#f44336" : "#ccc",
                    borderWidth: errors.email ? "2px" : "1px", // 🎯 Here we increase border width
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: "text.tertiary" }} />
                  </InputAdornment>
                ),
              }}
            // required
            />
          </Tooltip>
        </Grid>

        {/* Designation */}
        <Grid item xs={12}>
          <Tooltip
            title={errors.designation || ""}
            open={Boolean(errors.designation)}
            placement="bottom-end"
            arrow
            disableFocusListener
            disableHoverListener={!errors.designation}
            disableTouchListener
          >
            <TextField
              fullWidth
              size={inputSize}
              placeholder="Designation"
              name="designation"
              value={formValues.designation}
              onChange={(e) => setFormValues({ ...formValues, designation: e.target.value })}
              error={Boolean(errors.designation)}
              InputProps={{
                sx: {
                  ...inputStyles,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.designation ? "#f44336" : "#ccc",
                    borderWidth: errors.designation ? "2px" : "1px", // 🎯 Here we increase border width
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon sx={{ color: "text.tertiary" }} />
                  </InputAdornment>
                ),
              }}
            // required
            />
          </Tooltip>
        </Grid>

        {/* Company Name */}
        <Grid item xs={12}>
          <Tooltip
            title={errors.companyName || ""}
            open={Boolean(errors.companyName)}
            placement="bottom-end"
            arrow
            disableFocusListener
            disableHoverListener={!errors.companyName}
            disableTouchListener
          >
            <TextField
              fullWidth
              size={inputSize}
              placeholder="Company Name"
              name="companyName"
              value={formValues.companyName}
              onChange={(e) => setFormValues({ ...formValues, companyName: e.target.value })}
              error={Boolean(errors.companyName)}
              InputProps={{
                sx: {
                  ...inputStyles,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.companyName ? "#f44336" : "#ccc",
                    borderWidth: errors.companyName ? "2px" : "1px", // 🎯 Here we increase border width
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleIcon sx={{ color: "text.tertiary" }} />
                  </InputAdornment>
                ),
              }}
            // required
            />
          </Tooltip>
        </Grid>

        {/* File Upload */}
        <Grid item xs={12}>
          <Button
            fullWidth
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUpload />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>

        {/* Feedback */}
        <Grid item xs={12}>
          <Tooltip
            title={errors.feedback || ""}
            open={Boolean(errors.feedback)}
            placement="bottom-end"
            arrow
            disableFocusListener
            disableHoverListener={!errors.feedback}
            disableTouchListener
          >
            <TextField
              fullWidth
              size={inputSize}
              placeholder="Please share your valueable feedback"
              name="feedback"
              value={formValues.feedback}
              onChange={(e) => setFormValues({ ...formValues, feedback: e.target.value })}
              error={Boolean(errors.feedback)}
              multiline  // ✅ Enables textarea behavior
              rows={4}   // ✅ Defines default visible rows
              InputProps={{
                sx: {
                  ...inputStyles,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.feedback ? "#f44336" : "#ccc",
                    borderWidth: errors.feedback ? "2px" : "1px", // 🎯 Here we increase border width
                  },
                  alignItems: "flex-start",
                },
                startAdornment: (
                  <InputAdornment position="start" sx={{ marginTop: "12px" }}>
                    <ChatBubble sx={{ color: "text.tertiary" }} />
                  </InputAdornment>
                ),
              }}
            // required
            />
          </Tooltip>
        </Grid>

        {/* Country and State selector */}
        <CountryStateSelector
          countries={countries}
          states={states}
          countriesLoading={countriesLoading}
          statesLoading={statesLoading}
          selectedCountry={selectedCountry}
          selectedState={selectedState}
          handleCountryChange={(value) => {
            setSelectedCountry(value);
            setFormValues((prev) => ({ ...prev, CountryId: value }));
            setSelectedState("");
          }}
          handleStateChange={(value) => {
            setSelectedState(value);
            setFormValues((prev) => ({ ...prev, StateId: value }));
          }}
          errors={errors}
        />

        {/* reCaptcha */}
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
            {/* ✅ Add reCAPTCHA below the last input field */}
            <ReCAPTCHA
              sitekey="6Ldyj58pAAAAAMxa5p0VGAIrBNxqDgwbUivphTon"
              onChange={handleCaptchaVerification}
            />

            {/* 🚀 Show error if CAPTCHA isn’t verified */}
            {!captchaVerified && (
              <Typography variant="body2" color={'red'} >
                Please verify that you are not a robot.
              </Typography>
            )}
          </Tooltip>
        </Grid>

        <Typography variant="body2" color={'grey.400'}>
          By submitting this form, you agree to the processing of personal data according to our Privacy Policy.
        </Typography>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              borderRadius: "10px",
              backgroundColor: "secondary.main",
              fontWeight: "bold",
              height: "50px",
              position: "relative",
              overflow: "hidden",
              float: "right",
              "&:hover": {
                backgroundColor: "secondary.main",
                borderColor: "primary.main",
                border: "1px solid"
              },
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
              {loading && <CircularProgress size={20} sx={{ color: "primary.contrastText" }} />}
              {"Submit"}
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShareExperienceForm;
