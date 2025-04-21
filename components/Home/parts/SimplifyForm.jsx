"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
  Link as MUILink,
  Fade,
  Slide,
  Tooltip,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import NextLink from "next/link";
import axios from "axios";
import apiEndpoints from "@/utils/apiEndpoints";
import SweetAlert from "@/components/SweetAlert/SweetAlert";
import confetti from "canvas-confetti";
import * as Yup from 'yup';
import CountryStateSelector from "./CountryStateSelector";


const inputStyles = {
  borderRadius: "12px", backgroundColor: "#FFFFFF",
};
const inputSize = "small";

const validationSchema = Yup.object().shape({
  Name: Yup.string().required('Full Name is required'),
  Email: Yup.string().email('Invalid email').required('Email is required'),
  UserName: Yup.string().required('Username is required'),
  PhoneNumber: Yup.string()
    .when('CountryId', {
      is: (val) => val === "123",
      then: Yup.string().required('Phone number is required'),
    }),
  CountryId: Yup.string().required('Country is required'),
  StateId: Yup.string().required('State is required'),
  terms: Yup.boolean().oneOf([true], 'You must agree'),
  Otp: Yup.string().when('$otpSent', {
    is: true,
    then: Yup.string().required('OTP is required'),
  }),
});

const SimplifyForm = () => {
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpId, setOtpId] = useState("");
  const [showContact, setShowContact] = useState(true);

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("123");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  const [formValues, setFormValues] = useState({
    Name: "",
    Email: "",
    UserName: "",
    PhoneNumber: "",
    PhoneCode: "91",
    CountryId: "123",
    StateId: "",
    Otp: "",
    Slug: "saniiro-7days-trial-package",
    terms: false,
    CouponCode: "",
    SelseExecutiveRefCode: "",
  });

  const [errors, setErrors] = useState({});

  const [countriesLoading, setCountriesLoading] = useState(false);
  const [statesLoading, setStatesLoading] = useState(false);

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

  // Fetch states and handle showContact
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
    // setShowContact(selectedCountry === "123");
  }, [selectedCountry]);

  useEffect(() => {
    setShowContact(selectedCountry === 123);
  }, [selectedCountry]);


  const validateFields = () => {
    const newErrors = {};
    if (!formValues.Name.trim()) newErrors.Name = "Full Name is required";
    if (!formValues.Email.trim()) newErrors.Email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.Email)) newErrors.Email = "Invalid email address";
    if (!formValues.UserName.trim()) newErrors.UserName = "Username is required";
    if (showContact && !formValues.PhoneNumber.trim()) newErrors.PhoneNumber = "Phone number is required";
    if (!selectedCountry) newErrors.CountryId = "Country is required";
    if (!selectedState) newErrors.StateId = "State is required";
    if (otpSent && !formValues.Otp.trim()) newErrors.Otp = "OTP is required";
    if (!formValues.terms) newErrors.terms = "You must agree";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateFields()) return; // stop form submission if validation fails
    if (!otpSent) {
      await sendOTP();
    } else {
      await finalSubmit();
    }
  };

  const sendOTP = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiEndpoints.OTP, {
        params: {
          Action: "OTP",
          ApiForId: showContact ? 2 : 1,
          MobileTo: formValues.PhoneNumber,
          EmailTo: formValues.Email,
          GroupId: 41,
        },
      });
      if (response.data.Status === 1000) {
        SweetAlert.success("OTP Sent", "Check your email or phone.");
        setOtpId(response.data.Data[0].Id);
        setOtpSent(true);
      } else {
        SweetAlert.error("Error", response?.data?.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("sendOTP error", error);
      SweetAlert.error("Error", "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 150, // ✅ It throws 150 colorful particles.
      spread: 70,         // ✅ Nice spread radius (70).
      origin: { y: 0.6 }, // ✅ Launches from lower half of the page (y: 0.6).
      // colors: ['#052973', '#F15B25', '#FFFFFF'], // Your primary brand colors
    });
    // ✅ Finishes in 1 second.
  };

  const finalSubmit = async () => {
    setLoading(true);
    try {
      const payload = { ...formValues, OtpId: otpId };
      const response = await axios.post(apiEndpoints.Purchase, payload);

      if (response.data.Status === 1000) {
        SweetAlert.success("Success", "Your account has been created!");
        launchConfetti(); // 🎉 launch here!
        resetForm();
      } else {
        SweetAlert.error("Error", response?.data?.message || "Submission failed.");
      }
    } catch (error) {
      console.error("finalSubmit error", error);
      SweetAlert.error("Error", "Something went wrong during submission.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormValues({
      Name: "",
      Email: "",
      UserName: "",
      PhoneNumber: "",
      PhoneCode: "91",
      CountryId: "123",
      StateId: "",
      Otp: "",
      Slug: "saniiro-7days-trial-package",
      terms: false,
      CouponCode: "",
      SelseExecutiveRefCode: "",
    });
    setOtpSent(false);
    setOtpId("");
    setSelectedState("");
    setSelectedCountry("123");
    setShowContact(true);
    setErrors({});
  };

  return (
    <Box component="form" onSubmit={handleFormSubmit} sx={{ mx: 2, px: 4 }}>
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
              placeholder="Full Name"
              name="Name"
              value={formValues.Name}
              //onChange={(e) => setFormValues({ ...formValues, Name: e.target.value })}
              onChange={(e) => {
                setFormValues({ ...formValues, Name: e.target.value });
                // validateFields('Name', e.target.value); // 🎯 live validation
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
                endAdornment: (
                  <InputAdornment position="end">
                    <PersonIcon sx={{ color: "#AAAAAA" }} />
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
              placeholder="Work Email"
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
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon sx={{ color: "#AAAAAA" }} />
                  </InputAdornment>
                ),
              }}
            // required
            />
          </Tooltip>
        </Grid>

        {/* Username */}
        <Grid item xs={12}>
          <Tooltip
            title={errors.UserName || ""}
            open={Boolean(errors.UserName)}
            placement="bottom-end"
            arrow
            disableFocusListener
            disableHoverListener={!errors.UserName}
            disableTouchListener
          >
            <TextField
              fullWidth
              size={inputSize}
              placeholder="Username"
              name="UserName"
              value={formValues.UserName}
              onChange={(e) => setFormValues({ ...formValues, UserName: e.target.value })}
              error={Boolean(errors.UserName)}
              InputProps={{
                sx: {
                  ...inputStyles,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.UserName ? "#f44336" : "#ccc",
                    borderWidth: errors.UserName ? "2px" : "1px", // 🎯 Here we increase border width
                  },
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircleIcon sx={{ color: "#AAAAAA" }} />
                  </InputAdornment>
                ),
              }}
            // required
            />
          </Tooltip>
        </Grid>

        {/* Country Selector */}
        {/* <Grid item xs={12} md={6}>
          <Tooltip
            title={errors.CountryId || ""}
            open={Boolean(errors.CountryId)}
            placement="bottom-end"
            arrow
            disableFocusListener
            disableHoverListener={!errors.CountryId}
            disableTouchListener
          >
            <FormControl
              fullWidth
            // required
            >
              <Select
                size={inputSize}
                value={selectedCountry}
                onChange={(e) => {
                  const countryId = e.target.value;
                  console.log("typeof countryId : ", typeof countryId, countryId, countryId === 123 ? true : false)
                  setSelectedCountry(countryId);
                  setFormValues((prev) => ({ ...prev, CountryId: countryId }));
                  //setShowContact(() => countryId === 123 || countryId === 123); // 🎯 Fixed
                  setTimeout(() => {
                    setShowContact(countryId === 123 || countryId === 123);
                  }, 0);
                  setSelectedState(""); // reset state optionally
                  console.log("formValues.CountryId : ", formValues.CountryId, showContact)

                }}
                error={Boolean(errors.CountryId)}
                displayEmpty
                sx={{
                  ...inputStyles,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.CountryId ? "#f44336" : "#ccc",
                    borderWidth: errors.CountryId ? "2px" : "1px", // 🎯 Here we increase border width
                  },
                }}
              >
                <MenuItem value="" disabled>Select Country</MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country.Id} value={country.Id}>{country.Name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Tooltip>
        </Grid> */}

        {/* State Selector */}
        {/* <Grid item xs={12} md={6}>
          <Tooltip
            title={errors.StateId || ""}
            open={Boolean(errors.StateId)}
            placement="bottom-end"
            arrow
            disableFocusListener
            disableHoverListener={!errors.StateId}
            disableTouchListener
          >
            <FormControl
              fullWidth
            // required
            >
              <Select
                size={inputSize}
                value={selectedState}
                // onChange={(e) => setSelectedState(e.target.value)}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setFormValues((prev) => ({ ...prev, StateId: e.target.value })); // 🎯 fix applied
                }}
                error={Boolean(errors.StateId)}
                displayEmpty
                disabled={!states.length}
                sx={{
                  ...inputStyles,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: errors.StateId ? "#f44336" : "#ccc",
                    borderWidth: errors.StateId ? "2px" : "1px", // 🎯 Here we increase border width
                  },
                }}
              >
                <MenuItem value="" disabled>Select State</MenuItem>
                {states.map((state) => (
                  <MenuItem key={state.Id} value={state.Id}>{state.Name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Tooltip>
        </Grid> */}
        {/* <CountryStateSelector
          selectedCountry={selectedCountry}
          selectedState={selectedState}
          handleCountryChange={(value) => {
            setSelectedCountry(value);
            setFormValues((prev) => ({ ...prev, CountryId: value }));
            setShowContact(value === "123"); // ✅ for India special
            setSelectedState("");
          }}
          handleStateChange={(value) => {
            setSelectedState(value);
            setFormValues((prev) => ({ ...prev, StateId: value }));
          }}
          errors={errors}
        /> */}

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


        {/* Phone Number */}
        {showContact && (
          <Grid item xs={12}>
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
                onChange={(e) => setFormValues({ ...formValues, PhoneNumber: e.target.value })}
                error={Boolean(errors.PhoneNumber)}
                InputProps={{
                  sx: {
                    ...inputStyles,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: errors.PhoneNumber ? "#f44336" : "#ccc",
                      borderWidth: errors.PhoneNumber ? "2px" : "1px", // 🎯 Here we increase border width
                    },
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneAndroidIcon sx={{ color: "#AAAAAA" }} />
                    </InputAdornment>
                  ),
                }}
              // required
              />
            </Tooltip>
          </Grid>
        )}

        {/* Terms and Conditions */}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues.terms}
                onChange={(e) => setFormValues({ ...formValues, terms: e.target.checked })}
                sx={{
                  "& .MuiSvgIcon-root": {
                    backgroundColor: "#FFFFFF",
                    borderRadius: "4px",
                    fontSize: 24,
                    border: errors.terms ? "2px solid #f44336" : undefined, // Light error ring
                  },
                }}
              />
            }
            label={
              <Tooltip title={errors.terms || ""} open={Boolean(errors.terms)} placement="bottom-start" arrow>
                <Typography fontSize="13px" color="#AAAAAA">
                  I agree to the Terms of{" "}
                  <MUILink component={NextLink} href="/subfooter/terms-and-conditions" sx={{ color: "#AAAAAA", textDecoration: "underline" }}>
                    Service and Privacy Policy
                  </MUILink>
                </Typography>
              </Tooltip>
            }
          />
        </Grid>

        {/* OTP Input with Fade Animation */}
        <Slide direction="down" in={otpSent} mountOnEnter unmountOnExit timeout={500}>
          <Fade in={otpSent} timeout={500}>
            <Grid item xs={12}>
              <Tooltip
                title={errors.Otp || ""}
                open={Boolean(errors.Otp)}
                placement="right"
                arrow
                disableFocusListener
                disableHoverListener={!errors.Otp}
                disableTouchListener
              >
                <TextField
                  fullWidth
                  size={inputSize}
                  placeholder="Enter OTP"
                  name="Otp"
                  value={formValues.Otp}
                  onChange={(e) => setFormValues({ ...formValues, Otp: e.target.value })}
                  error={Boolean(errors.Otp)}
                  inputProps={{ maxLength: 16 }}
                  // required
                  InputProps={{
                    sx: {
                      ...inputStyles,
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: errors.Otp ? "#f44336" : "#ccc",
                        borderWidth: errors.Otp ? "2px" : "1px", // 🎯 Here we increase border width
                      },
                    }
                  }}
                />
              </Tooltip>
            </Grid>
          </Fade>
        </Slide>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              borderRadius: "10px",
              backgroundColor: "#F15B25",
              fontWeight: "bold",
              height: "50px",
              position: "relative",
              overflow: "hidden",
              "&:hover": { backgroundColor: "#F15B25", border: "1px solid #052973" },
            }}
          >
            <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
              {loading && <CircularProgress size={20} sx={{ color: "white" }} />}
              {otpSent ? "Verify OTP and Register" : "Try It Free for 7 Days"}
            </Box>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SimplifyForm;
