import React, { useEffect, useState } from "react";
import { Stack, Typography, Button, CircularProgress } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CitySelector from "./Cityselctor";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { validationSchema, validationWithOTPSchema } from "@/Validation-Scema";
import apiEndpoints from "@/utils/apiEndpoints";
import SweetAlert from "@/components/SweetAlert/SweetAlert";
import * as Yup from "yup";
import Link from "next/link";

const SimplifyForm = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [otpSent, setOtpSent] = useState(false);
  const [ShowContact, setShowContact] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("123");
  const [loading, setLoading] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [otpId, setOtpId] = useState("");

  let defaultCountryId = selectedCountry;
  const initialValues = {
    Name: "",
    Email: "",
    UserName: "",
    PhoneNumber: "",
    PhoneCode: "91",
    CountryId: defaultCountryId,
    StateId: "",
    Otp: "",
    Slug: "⁠saniiro-7days-trial-package⁠",
    terms: false,
    otpSent: false,
    OtpId: otpId,
    CouponCode: "",
    SelseExecutiveRefCode: "",
  };

  useEffect(() => {
    if (selectedCountry === "123") {
      setShowContact(true);
    } else {
      setShowContact(false);
    }
  }, [selectedCountry]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(`${apiEndpoints.Country}`);
      // console.log("country response", response);
      setCountries(response.data.Data || []);
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (countries.length && !selectedCountry) {
      const india = countries.find((country) => country.Name === "India");
      if (india) {
        setSelectedCountry(india.Id);
      }
    }
  }, [countries, selectedCountry]);

  useEffect(() => {
    if (selectedCountry) {
      const fetchStates = async () => {
        const response = await axios.get(`${apiEndpoints.State}`, {
          params: { CountryId: selectedCountry },
        });
        setStates(response.data.Data || []);
      };

      fetchStates();
    }
  }, [selectedCountry]);

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true); // Start loading
    const payload = {
      ...values,
      OtpId: otpId,
    };

    try {
      const response = await axios.post(apiEndpoints.Purchase, payload);

      if (response?.data?.Status === 1000) {
        SweetAlert.success("Form Submitted", "Your Saniiro Account is Created");
        resetForm(); // Reset the form on success
        setOtpSent(false); // Reset OTP sent state
      } else {
        SweetAlert.error(
          "Error",
          response?.data?.message || "Failed to create your account. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during API call:", error);
      SweetAlert.error(
        "Error",
        error?.response?.data?.message || "Something went wrong!"
      );
    } finally {
      setLoading(false); // End loading in both success and error scenarios
    }
  };


  const sendOTP = async (values) => {
    try {
      const response = await axios.get(`${apiEndpoints.OTP}`, {
        params: {
          Action: "OTP",
          ApiForId: ShowContact ? 2 : 1,
          MobileTo: values.PhoneNumber,
          EmailTo: values.Email,
          GroupId: 41,
        },
      });
      if (response.data.Status === 1000) {
        SweetAlert.success("Data Fetched", "OTP Send successfully !");
        setOtpId(response.data.Data[0].Id);
        setOtpSent(true);
      } else {
        SweetAlert.error(
          "Error",
          error?.response?.data?.message || "Something went wrong!"
        );
      }
    } catch (error) {
      console.error("Error during API call:", error);
      SweetAlert.error(
        "Error",
        error?.response?.data?.message || "Something went wrong!"
      );
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={
        otpSent ? validationWithOTPSchema : validationSchema(ShowContact)
      }
      onSubmit={otpSent ? handleSubmit : sendOTP}
    >
      {({
        errors,
        touched,
        values,
        resetForm,
        setFieldValue,
        handleChange,
      }) => (
        <Form>
          <Stack
            alignItems={"center"}
            gap={2}
            margin={"0 auto"}
            sx={{
              width: {
                xs: "80%",
                sm: "100%",
                md: "70%",
                lg: "100%",
                xl: "100%",
                xxl: "100%",

              },
            }}
          >
            <Stack>
              <Stack
                style={{ position: "relative" }}
                sx={{
                  width: {
                    xs: "220px",
                    sm: "268px",
                    smm: "400px",
                    md: "480px",
                    lg: "385px",
                    xl: "480px",
                  },
                  height: {
                    xs: "30px",
                    sm: "40px",
                    md: "52px",
                    lg: "47px",
                    xl: "40px",
                  },
                }}
              >
                <Field
                  style={{
                    width: "94%",
                    height: "100%",
                    border: "1px solid #AAAAAA",
                    color: otpSent ? "#DDDDDD" : "#AAAAAA",
                    paddingLeft: "5%",
                    fontSize: "18px",
                    borderRadius: "12px",
                  }}
                  name="Name"
                  as="input"
                  placeholder="Full Name"
                />

                <PersonIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "8px",
                    transform: "translateY(-50%)",
                    color: "#AAAAAA",
                    fontSize: {
                      xl: "30px",
                      md: "28px",
                      lg: "28px",
                      sm: "22px",
                    },
                  }}
                />
              </Stack>
              <ErrorMessage name="Name" component="span" style={{ color: "red", margin: "5px" }} />
            </Stack>
            <Stack>
              <Stack
                style={{ position: "relative" }}
                sx={{
                  width: {
                    xs: "220px",
                    sm: "268px",
                    smm: "400px",
                    md: "480px",
                    lg: "385px",
                    xl: "480px",
                  },
                  height: {
                    xs: "30px",
                    sm: "40px",
                    md: "52px",
                    lg: "47px",
                    xl: "40px",
                  },
                }}
              >
                <Field
                  name="Email"
                  as="input"
                  type="email"
                  placeholder="Work Email"
                  style={{
                    width: "94%",
                    height: "100%",
                    border: "1px solid #AAAAAA",
                    color: otpSent ? "#DDDDDD" : "#AAAAAA",
                    paddingLeft: "5%",
                    fontSize: "18px",
                    borderRadius: "12px",
                  }}
                />

                <EmailIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "8px",
                    transform: "translateY(-50%)",
                    color: "#AAAAAA",
                    fontSize: {
                      xl: "30px",
                      md: "28px",
                      lg: "28px",
                      sm: "22px",
                    },
                  }}
                />
              </Stack>
              <ErrorMessage name="Email" component="span" style={{ color: "red", margin: "5px" }} />
            </Stack>
            <Stack>
              <Stack
                style={{ position: "relative" }}
                sx={{
                  width: {
                    xs: "220px",
                    md: "480px",
                    sm: "268px",
                    smm: "400px",
                    lg: "385px",
                    xl: "480px",
                  },
                  height: {
                    xs: "30px",
                    sm: "40px",
                    md: "52px",
                    lg: "47px",
                    xl: "40px",
                  },
                }}
              >
                <Field
                  name="UserName"
                  as="input"
                  placeholder="Username"
                  style={{
                    width: "94%",
                    height: "100%",
                    border: "1px solid #AAAAAA",
                    paddingLeft: "5%",
                    color: otpSent ? "#DDDDDD" : "#AAAAAA",
                    fontSize: "18px",
                    borderRadius: "12px",
                  }}
                />

                <AccountCircleIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "8px",
                    transform: "translateY(-50%)",
                    color: "#AAAAAA",
                    fontSize: {
                      xl: "30px",
                      md: "28px",
                      lg: "28px",
                      sm: "22px",
                    },
                  }}
                />
              </Stack>
              <ErrorMessage name="UserName" component="span" style={{ color: "red", margin: "5px" }} />
            </Stack>

            <CitySelector
              selectedCountry={selectedCountry}
              handleCountryChange={(value) => {
                setFieldValue("CountryId", value);
                setSelectedCountry(value);
              }}
              countries={countries}
              selectedState={selectedState}
              handleStateChange={(value) => {
                setFieldValue("StateId", value);
                setSelectedState(value);
              }}
              states={states}
              errors={errors}
            />

            {ShowContact && (
              <Stack>
                <Stack
                  style={{ position: "relative" }}
                  sx={{
                    width: {
                      xs: "220px",
                      md: "480px",
                      sm: "268px",
                      smm: "400px",
                      lg: "385px",
                      xl: "480px",
                    },
                    height: {
                      xs: "30px",
                      sm: "40px",
                      md: "52px",
                      lg: "47px",
                      xl: "40px",
                    },
                  }}
                >
                  <Field
                    name="PhoneNumber"
                    as="input"
                    placeholder="PhoneNumber"
                    style={{
                      width: "94%",
                      height: "100%",
                      border: "1px solid #AAAAAA",
                      color: values.PhoneNumber ? "#000000" : "#AAAAAA",
                      paddingLeft: "5%",
                      fontSize: "18px",
                      borderRadius: "12px",
                    }}
                  />
                  <PhoneAndroidIcon
                    sx={{
                      position: "absolute",
                      top: "50%",
                      right: "16px",
                      transform: "translateY(-50%)",
                      color: "#AAAAAA",
                      fontSize: {
                        xl: "30px",
                        md: "28px",
                        lg: "28px",
                        sm: "22px",
                      },
                    }}
                  />
                </Stack>
                <ErrorMessage name="PhoneNumber" component="span" style={{ color: "red", margin: "5px" }} />
              </Stack>
            )}

            <Stack
              gap={2}
              sx={{
                alignItems: { xs: "center", lg: "left", },
              }}
            >
              <Stack>
                <Stack direction="row" gap={1}>
                  <Field
                    type="checkbox"
                    name="terms"
                    style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  />
                  <Typography fontSize="13px" color="#AAAAAA">
                    I agree to the Terms of <Link href="/subfooter/terms-and-conditions" style={{ color: "#AAAAAA" }}>Service and Privacy Policy.</Link>
                  </Typography>
                </Stack>

                {errors.terms && touched.terms && (
                  <Typography color="red" fontSize="12px">
                    {errors.terms}
                  </Typography>
                )}
              </Stack>

              <Stack gap={"20px"} alignItems={"center"}>
                {otpSent ? (
                  <>
                    <Stack
                      sx={{
                        width: {
                          xs: "220px",
                          sm: "268px",
                          smm: "400px",
                          md: "480px",
                          lg: "385px",
                          xl: "480px",
                        },
                        height: {
                          xs: "30px",
                          sm: "40px",
                          md: "52px",
                          lg: "47px",
                          xl: "40px",
                        },
                      }}
                    >
                      <Field
                        type="text"
                        name="Otp"
                        placeholder="OTP"
                        maxLength={16}
                        style={{
                          width: "94%",
                          height: "100%",
                          border: "1px solid #AAAAAA",
                          color: "#AAAAAA",
                          paddingLeft: "5%",
                          fontSize: "16px",
                          borderRadius: "12px",
                          WebkitAppearance: "none",
                          MozAppearance: "textfield",
                        }}
                      />
                    </Stack>
                    <ErrorMessage name="Otp" component="span" style={{ color: "red", margin: "5px" }} />

                    <Button
                      type="submit"
                      sx={{
                        borderRadius: "10px",
                        width: {
                          xs: "220px",
                          sm: "268px",
                          smm: "400px",
                          md: "480px",
                          lg: "385px",
                          xl: "400px",
                        },
                        height: {
                          xs: "30px",
                          sm: "40px",
                          md: "52px",
                          lg: "47px",
                          xl: "40px",
                        },
                        color: "white",
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "18px",
                        },
                        bgcolor: "#F15B25",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#F15B25",
                          border: "1px solid #052973",
                          color: "white",
                        },
                      }}
                    >
                      {loading ? (
                        <>
                          Loading <CircularProgress size={14} color="inherit" />
                        </>
                      ) : (
                        "Verify OTP and Register"
                      )}

                    </Button>
                  </>
                ) : (
                  <Button
                    type="submit"
                    sx={{
                      borderRadius: "10px",
                      width: {
                        xs: "220px",
                        sm: "268px",
                        smm: "400px",
                        md: "480px",
                        lg: "385px",
                        xl: "400px",
                      },
                      height: {
                        xs: "30px",
                        sm: "40px",
                        md: "52px",
                        lg: "47px",
                        xl: "40px",
                      },
                      color: "white",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                      },
                      bgcolor: "#F15B25",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#F15B25",
                        border: "1px solid #052973",
                        color: "white",
                      },
                    }}
                    disabled={loading} // Disable the button during loading
                  >
                    {loading ? (
                      <>
                        Loading <CircularProgress size={14} color="inherit" />
                      </>
                    ) : (
                      "Try It Free for 7 Days"
                    )}
                  </Button>

                )}

              </Stack>
            </Stack>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SimplifyForm;
