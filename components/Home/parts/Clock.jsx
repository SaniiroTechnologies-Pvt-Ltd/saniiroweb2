"use client";

import { Stack, IconButton, Typography, Snackbar, Alert, Grid, styled, Paper } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PhoneNumberInput from "./nm";
import stopWatch from "../../assets/stopWatch.svg";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CitySelector from "./Cityselctor";
import Button from "../../utils/Button";
import Google from "../../assets/google.png";
import LinkedIn from "../../assets/linkedIn.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import "./nm.css";
import axios from "axios";
import Link from "next/link";

import { useRouter } from "next/navigation";
import Image from "next/image";
import apiEndpoints from "@/utils/apiEndpoints";
import SimplifyForm from "./SimplifyForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const Clock = () => {
  const router = useRouter();
  const initialState = {
    Name: "",
    UserName: "",
    PhoneCode: "91",
    PhoneNumber: "",
    Email: "",
    CountryId: 123,
    StateId: "",
    Slug: "saniiro-basic-package",
    Otp: "",
    OtpId: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalError, setModalError] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(123);
  const [selectedState, setSelectedState] = useState("");
  // const [paymentData, setPaymentData] = useState({});
  // const [paymentDataPayu, setPaymentDataPayu] = useState({});

  //  const payLinkPayURef = useRef();
  //  const payLinkRazorpayRef = useRef();
  const validateForm = () => {
    let tempErrors = {};
    tempErrors.Name =
      formData.Name.length > 2 ? "" : "Name must be at least 3 characters";
    tempErrors.Email = /^\S+@\S+\.\S+$/.test(formData.Email)
      ? ""
      : "Email is not valid";
    tempErrors.UserName =
      formData.UserName.length > 0 ? "" : "Username is required";
    if (selectedCountry === 123) {
      // Only validate phone number if the selected country is 123
      tempErrors.PhoneNumber =
        formData.PhoneNumber.length > 0 ? "" : "Phone number is required";
    }
    tempErrors.CountryId =
      formData.CountryId > 0 ? "" : "Please Select Country";
    tempErrors.StateId = formData.StateId > 0 ? "" : "Please Select State";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "PhoneNumber" && value.length > 10) {
      return; // Stop the state update if phone number exceeds 16 characters
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear errors for the field being changed
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
    // Additionally, if there's a specific error for the checkbox that needs to be cleared when other fields are updated
    if (name !== "checkbox" && checkboxError) {
      setCheckboxError("");
    }
  };

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    setCheckboxError(
      !isChecked
        ? ""
        : "You must agree to the Terms of Service and Privacy Policy"
    );
  };

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(`${apiEndpoints.Country}`);
      setCountries(response.data.Data || []);
    };
    fetchCountries();
  }, []);

  // Fetch states based on the selected country
  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) return;
      const response = await axios.get(`${apiEndpoints.State}`, {
        params: { CountryId: selectedCountry },
      });
      setStates(response.data.Data || []);
    };
    fetchStates();
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    const newCountryId = Number(e.target.value);
    setSelectedCountry(newCountryId);
    setSelectedState("");
    setFormData((prev) => ({
      ...prev,
      CountryId: newCountryId, // Ensure CountryId is stored as a string
      StateId: "", // Reset state when country changes
      PhoneNumber: newCountryId === 123 ? prev.PhoneNumber : "",
    }));
  };

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const foundState = states.find((state) => state.Name === newState);
    setFormData((prev) => ({
      ...prev,
      StateId: foundState ? Number(foundState.Id) : 0, // Ensure StateId is stored as a string
    }));
  };

  const sendOTP = async () => {
    if (!validateForm()) return;

    try {
      const response = await axios.get(
        `${apiEndpoints.OTP}`,
        {
          params: {
            Action: "OTP",
            ApiForId: selectedCountry === 123 ? 2 : 1,
            MobileTo: selectedCountry === 123 ? formData.PhoneNumber : null,
            EmailTo: formData.Email,
            GroupId: 41,
          },
        }
      );
      if (response.data.Status === 1000) {
        setFormData((prev) => ({ ...prev, OtpId: response.data.Data[0].Id }));
        setOtpSent(true);
      } else {
        setModalError("Failed to send OTP");
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setModalError("An error occurred during submission.");
      setModalVisible(true);
    }
  };

  const verifyOTP = async () => {
    if (!formData.Otp) {
      setModalError("OTP is required");
      setModalVisible(true);
      return;
    }

    try {
      const response = await axios.post(
        `${apiEndpoints.Purchase}`,
        {
          ...formData,
          CountryId: Number(formData.CountryId),
          StateId: Number(formData.StateId),
          PhoneNumber: selectedCountry === 123 ? formData.PhoneNumber : null,
        }
      );
      if (response.data.Status === 1000) {
        const transactionId = response.data.Data.Txnid;
        router.push(`/thank-you/${transactionId}`);
        localStorage.setItem("validTxnId", transactionId);
      } else {
        setModalError("Failed to verify OTP");
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setModalError("An error occurred during submission.");
      setModalVisible(true);
    }
  };

  const resetForm = () => {
    setOtpSent(false);
    setErrors({});
    setFormData((prev) => ({
      ...prev,
      Otp: "", // Reset OTP field to empty
    }));
  };

  return (
    <React.Fragment>

      <Stack component={'div'} alignItems={"center"} p={{ xs: "40px 0", md: "60px 0", xl: "80px 0" }}>
        <Stack
          component={'div'}
          padding={{  xs: "0", md: '10px', xl: "20px" }}
          width={{ xs: "100%", md: "90%", xl: "80%" }}
          bgcolor={"#F15B25"}
          sx={{
            height: "100%",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: { xs: "center" },
          }}
        >
          <Stack
           component={'div'}
            sx={{
              width: '60%',
              justifyContent:'center',
              alignItems: 'center',
              height: '100%',
              gap: '10px',
              marginTop: { xs: "20px", md: "10px", lg: "0px", },
            }}
          >
            <Typography
              component={'h4'}
              sx={{
                fontSize: { xs: "27px", lg: "30px", },
                textAlign: { xs: "center", lg: "left", },
                letterSpacing: "2px",
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              Get Started in Less Then
            </Typography>
            <Stack
              sx={{
                width: { xs: "100px", md: '65%', lg: "31%", },
                justifyContent: 'center',
                alignItems: 'center',
              }}
              gap={2}
            >
              <Image
                src={stopWatch}
                alt="60 seconds"
                style={{ width: "100%", height: "100%" }}
              />
            </Stack>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: '40px', lg: "50px", },
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              60 seconds
            </Typography>
          </Stack>

          <Stack
            component={'div'}
            bgcolor={"white"}
            borderRadius={4}
            gap={2}
            sx={{
              width: { xs: "85%", sm: "81%", md: "56%", lg: "50%", xl: "50%" },
              margin: { xs: "20px 0px", lg: "20px", xl: "20px", },
              padding: { xs: "20px 0px", sm: "20px", lg: "20px 0px", xl: "40px 30px", },
            }}
          >
            <Typography
            component={'h3'}
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "22px",
                  md: "28px",
                  xl: "33px",
                },
                textAlign: {
                  xs: "center",
                },
              }}
              color={"#052973"}
              // color={"white"}
              fontWeight={"bold"}
              fontSize={{ xl: "22px", sm: "20px" }}
              textAlign={"center"}
            >
              Try before you buy
            </Typography>
            <SimplifyForm/>
          </Stack>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};

export default Clock;
