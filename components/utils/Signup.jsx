"use client";

import { Stack, IconButton, Typography, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CitySelector from "../Home/Cityselctor";
import Button from "../utils/Button";
import lo from "../assets/lo.svg";
import dottedbg from "../assets/dottedbg.svg";
import ImageSignup from "../assets/ImageSignUp.png";
import { Image } from "@mui/icons-material";
import contactIcon from "../assets/contactIcon.svg";
import Emailicon from "../assets/EmailIcon.svg";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Link from "next/link";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import apiEndpoints from "@/utils/apiEndpoints";
import { SignUpvalidationSchema } from "@/Validation-Scema";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("123");
  const [selectedState, setSelectedState] = useState(1233);
  let defaultCountryId = selectedCountry;

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
    selectedCountry: defaultCountryId,
    selectedState: "",
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${apiEndpoints.Country}`);
        const countriesData = response.data.Data || [];
        setCountries(countriesData);
        if (!selectedCountry) {
          const india = countriesData.find(
            (country) => country.Name === "India"
          );
          if (india) {
            setSelectedCountry(india.Id);
          }
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry) {
      const fetchStates = async () => {
        try {
          const response = await axios.get(`${apiEndpoints.State}`, {
            params: { CountryId: selectedCountry },
          });
          setStates(response.data.Data || []);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      };

      fetchStates();
    }
  }, [selectedCountry]);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <>
      <Stack m={"0 auto"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          p={{
            xs: "15px 5%",
            md: "15px 50px",
          }}
        >
          <Link href="/">
            <Stack>
              <Image
                src={lo}
                alt=""
                style={{ width: "181px", height: "43px" }}
              />
            </Stack>
          </Link>
          <Stack direction={"row"}>
            <Stack justifyContent={"center"}>
              <Typography fontSize={"12px"} pb={1.1}>
                Have a Saniiro Account?
              </Typography>
            </Stack>
            <Link href="/Login">
              <Button
                sx={{
                  bgcolor: "transparent",
                  color: "#F15B25",
                  fontSize: "12px",
                  fontWeight: "bold",
                  pl: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#F15B25",
                  },
                }}
              >
                Log-in
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            md: "column",

            lg: "row",
          }}
        >
          <Stack
            m={"0 auto"}
            alignItems={"center"}
            width={{
              xs: "95%",
              sm: "95%",
              md: "50%",
              lg: "50%",
            }}
            mt={{
              xs: 0,
              lg: -5,
            }}
            alignSelf={"center"}
            gap={3}
            sx={{
              backgroundImage: `url(${dottedbg.src})`,
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Stack
              justifyContent={"center"}
              width={{
                xs: "20%",
                md: "30%",
                lg: "145px",
              }}
              height={"145px"}
            >
              <Image src={ImageSignup} alt="" />
            </Stack>
            <Typography
              width={{
                xs: "90%",
                sm: "80%",
                md: "70%",
                lg: "70%",
              }}
              fontSize={{
                xs: "12px",
                sm: "14px",
                md: "16px",
                lg: "18px",
              }}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              "The ease and simplicity of the program and the way that the Zoho
              Team have continued to develop solutions around and integrated
              with the CRM. “
            </Typography>
            <Stack textAlign={"end"} width={"69%"}>
              <Typography
                color={"#F15B25"}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                }}
                textAlign={"end"}
                f
                fontWeight={"bold"}
              >
                CHRIS SAVOCA
              </Typography>
              <Typography
                color={"#141414"}
                fontSize={{
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                }}
                pb={2}
              >
                Executive Officer, Travelhost Network
              </Typography>
            </Stack>
          </Stack>
          <Stack
            gap={2}
            sx={{
              width: {
                xs: "100%",
                lg: "50%",
                xl: "50%",
              },
              padding: {
                xs: "20px 0px",
                lg: "20px 0px",
                xl: "40px 0px",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "22px",
                  md: "28px",

                  xl: "38px",
                },
                textAlign: {
                  xs: "center",
                },
              }}
              color={"#052973"}
              fontWeight={"bold"}
              fontSize={"22px"}
              textAlign={"center"}
              fontFamily={"Work Sans"}
            >
              Get started with your free trial
            </Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={SignUpvalidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, errors, setFieldValue }) => (
                <Form>
                  <Stack
                    alignItems={"center"}
                    gap={2}
                    margin={"0 auto"}
                    sx={{
                      width: {
                        xs: "80%",
                        md: "70%",
                        lg: "100%",
                        xl: "100%",
                      },
                    }}
                  >
                    <Stack>
                      <Stack
                        style={{ position: "relative" }}
                        sx={{
                          width: {
                            xs: "220px",
                            sm: "300px",
                            md: "480px",
                            lg: "385px",
                            xl: "480px",
                          },
                          height: {
                            xs: "45px",
                            sm: "55px",
                            md: "67px",
                            lg: "57px",
                            xl: "67px",
                          },
                        }}
                      >
                        <Field
                          name="name"
                          type="text"
                          placeholder="Full Name"
                          style={{
                            fontFamily: "Work Sans",
                            width: "94%",
                            height: "100%",
                            border: "1px solid #AAAAAA",
                            color: "#AAAAAA",
                            paddingLeft: "5%",
                            fontSize: "20px",
                          }}
                        />
                        <PersonIcon
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "8px",
                            transform: "translateY(-50%)",
                            color: "#AAAAAA",
                            fontSize: "40px",
                          }}
                        />
                      </Stack>
                      <ErrorMessage
                        name="name"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Stack>
                    <Stack>
                      <Stack
                        style={{ position: "relative" }}
                        sx={{
                          width: {
                            xs: "220px",
                            sm: "300px",
                            md: "480px",
                            lg: "385px",
                            xl: "480px",
                          },
                          height: {
                            xs: "45px",
                            sm: "55px",
                            md: "67px",
                            lg: "57px",
                            xl: "67px",
                          },
                        }}
                      >
                        <Field
                          name="email"
                          type="email"
                          placeholder="Work Email"
                          style={{
                            fontFamily: "Work Sans",
                            width: "94%",
                            height: "100%",
                            border: "1px solid #AAAAAA",
                            color: "#AAAAAA",
                            paddingLeft: "5%",
                            fontSize: "20px",
                          }}
                        />
                        <EmailIcon
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "8px",
                            transform: "translateY(-50%)",
                            color: "#AAAAAA",
                            fontSize: "40px",
                          }}
                        />
                      </Stack>
                      <ErrorMessage
                        name="email"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Stack>

                    <Stack>
                      <Stack
                        style={{ position: "relative" }}
                        sx={{
                          width: {
                            xs: "220px",
                            sm: "300px",
                            md: "480px",
                            lg: "385px",
                            xl: "480px",
                          },
                          height: {
                            xs: "45px",
                            sm: "55px",
                            md: "67px",
                            lg: "57px",
                            xl: "67px",
                          },
                        }}
                      >
                        <Field
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create Password"
                          style={{
                            fontFamily: "Work Sans",
                            width: "94%",
                            height: "100%",
                            border: "1px solid #AAAAAA",
                            color: "#AAAAAA",
                            paddingLeft: "5%",
                            fontSize: "20px",
                          }}
                        />
                        <IconButton
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "8px",
                            transform: "translateY(-50%)",
                            color: "#AAAAAA",
                            fontSize: "50px",
                          }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </Stack>
                      <ErrorMessage
                        name="password"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Stack>
                    <Stack>
                      <Stack
                        style={{ position: "relative" }}
                        sx={{
                          width: {
                            xs: "220px",
                            sm: "300px",
                            md: "480px",
                            lg: "385px",
                            xl: "480px",
                          },
                          height: {
                            xs: "45px",
                            sm: "55px",
                            md: "67px",
                            lg: "57px",
                            xl: "67px",
                          },
                        }}
                      >
                        <Field
                          name="phone"
                          type="text"
                          placeholder="Phone number"
                          style={{
                            fontFamily: "Work Sans",
                            width: "94%",
                            height: "100%",
                            border: "1px solid #AAAAAA",
                            color: "#AAAAAA",
                            paddingLeft: "5%",
                            fontSize: "20px",
                          }}
                        />
                        <PhoneAndroidIcon
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "8px",
                            transform: "translateY(-50%)",
                            color: "#AAAAAA",
                            fontSize: "40px",
                          }}
                        />
                      </Stack>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Stack>

                    <CitySelector
                      selectedCountry={selectedCountry}
                      handleCountryChange={(value) => {
                        setFieldValue("selectedCountry", value);
                        setSelectedCountry(value);
                      }}
                      countries={countries}
                      selectedState={selectedState}
                      handleStateChange={(value) => {
                        setFieldValue("selectedState", value);
                        setSelectedState(value);
                      }}
                      states={states}
                      errors={errors}
                    />
                    <ErrorMessage
                      name="selectedCountry"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <ErrorMessage
                      name="selectedState"
                      component="div"
                      style={{ color: "red" }}
                    />

                    <Typography
                      color={"black"}
                      fontFamily={"Work Sans"}
                      fontSize={"13px"}
                    >
                      It looks like you‘re in INDIA based on your IP.
                    </Typography>

                    <Stack gap={2} alignItems={"center"}>
                      <Stack direction={"row"} gap={1}>
                        <Field type="checkbox" name="agree" />
                        <Typography
                          fontFamily={"Work Sans"}
                          fontSize={"14px"}
                          color={"#989898"}
                          sx={{ cursor: "pointer" }}
                        >
                          I agree to{" "}
                          <span
                            style={{ color: "#D6852A", fontWeight: "bold" }}
                          >
                            Terms & Conditions
                          </span>{" "}
                          and{" "}
                          <span
                            style={{ color: "#D6852A", fontWeight: "bold" }}
                          >
                            Privacy Policy
                          </span>
                        </Typography>
                      </Stack>
                      <ErrorMessage
                        name="agree"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Stack>

                    <Button
                      type="submit"
                      fontFamily={"Work Sans"}
                      sx={{
                        width: {
                          xs: "220px",
                          sm: "300px",
                          md: "480px",
                          lg: "385px",
                          xl: "480px",
                        },
                        height: {
                          xs: "45px",
                          sm: "55px",
                          md: "67px",
                          lg: "57px",
                          xl: "67px",
                        },
                        color: "white",
                        fontSize: {
                          xs: "16px",
                          sm: "19px",
                          md: "22px",
                        },
                        border: "1px solid #F15B25",
                        bgcolor: "#F15B25",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "transparent",
                          border: "1px solid #F15B25",
                          color: "black",
                        },
                      }}
                    >
                      Get Started
                    </Button>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        sx={{
                          fontFamily: "Work Sans",
                          fontSize: "16px",
                          color: "#000",
                          fontWeight: "600",
                          textAlign: "center",
                        }}
                      >
                        Already have an account?{" "}
                        <Link
                          href="/login"
                          style={{ fontWeight: "600", color: "#D6852A" }}
                        >
                          Login
                        </Link>
                      </Typography>
                    </Box>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Stack>
        <Stack
          justifyContent={"space-around"}
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
          }}
          gap={2}
          pt={{
            xs: 2,
            md: 5,
          }}
          alignItems={"center"}
        >
          <Typography fontWeight={"bold"} fontSize={"20px"}>
            Need Assitance?
          </Typography>
          <Stack>
            <Typography fontSize={"12px"} textAlign={"center"}>
              Contact our toll free number
            </Typography>
            <Stack direction={"row"} gap={2}>
              <Stack justifyContent={"center"}>
                <Image src={contactIcon} alt="" />
              </Stack>
              <Stack>
                <Typography color={"#052973"} fontWeight={"bold"}>
                  1800 103 1123
                </Typography>
                <Typography color={"#052973"} fontWeight={"bold"}>
                  1800 572 3535
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography fontSize={"12px"} textAlign={"center"}>
              Reach out to us
            </Typography>
            <Stack direction={"row"} gap={1}>
              <Stack justifyContent={"center"}>
                <Image src={Emailicon} alt="" />
              </Stack>
              <Stack>
                <Typography color={"#052973"} fontWeight={"bold"}>
                  sales@zohocorp.com
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Signup;
