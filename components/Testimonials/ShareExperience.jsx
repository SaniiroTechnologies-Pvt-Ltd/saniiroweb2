import { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import lo from "../assets/lo.svg";
import Lock from "../assets/Lock.png";
import Button from "../utils/Button";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";
import CitySelector from "./../Home/parts/Cityselctor";
import Image from "next/image";
import axios from "axios";
import apiEndpoints from "@/utils/apiEndpoints";
import { ShereExperienceSchema } from "@/Validation-Scema";

const ShareExperience = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("123");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(`${apiEndpoints.Country}`);
      setCountries(response.data.Data || []);
    };
    fetchCountries();
  }, []);

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


  const initialValues = {
    fullName: "",
    email: "",
    designation: "",
    companyName: "",
    feedback: "",
    captcha: "",
    file: null,
    CountryId: selectedCountry,
    StateId: selectedState,
  };

  const onSubmit = (values , {resetForm}) => {
    console.log("Form data", values);
    resetForm();
  };

  return (
    <Stack
    display={{ xs: "flex", lg: "flex" }}
    pt={5}
    pb={5}
    height={{ xs: "100%" }}
    margin={"0 auto"}
    bgcolor={"#052973"}
    className="textured-background-Experience"
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Stack
      zIndex={11}
      maxWidth={"1640px"}
      bgcolor={"rgb(230, 245, 255)"}
      width={{ xs: "90%", sm: "80%", md: "70%" }}
      borderRadius={2}
      direction={{ xs: "column", lg: "row" }}
      p={3}
    >
      <Stack width={"100%"} lg={{ width: "50%" }} zIndex={11} p={3} gap={8}>
        <Link href="/">
          <Image
            src={lo}
            alt="Logo"
            style={{ width: "100%", maxWidth: "150px", height: "auto" }}
          />
        </Link>
  
        <Stack gap={2}>
          <Image
            src={Lock}
            alt="Lock Image"
            style={{ width: "100%", maxWidth: "290px", height: "auto" }}
          />
          <Typography fontSize={{ xs: "14px", sm: "18px" }} fontWeight={"bold"} textAlign={"center"}>
            Enhanced sign-in security
          </Typography>
          <Typography fontSize={{ xs: "14px", sm: "18px" }} textAlign={"center"} p={"0 11px"}>
            Move away from risky passwords and experience one-tap access to Zoho. Download and install OneAuth.
          </Typography>
          <Button
            sx={{
              bgcolor: "transparent",
              color: "#0079FF",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Know More
          </Button>
        </Stack>
      </Stack>
  
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack
          sx={{
            content: "''",
            width: "2px",
            height: "90%",
            bgcolor: "#0139ff",
          }}
        />
      </Stack>
  
      <Stack alignItems={"center"} lg={{ width: "50%" }} zIndex={11} p={3}>
        <Formik
          initialValues={initialValues}
          validationSchema={ShereExperienceSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, errors, resetForm, touched }) => (
            <Form>
              <Stack gap={2}>
                <Stack gap={2}>
                  <Stack width={"100%"}>
                    <Field
                      name="fullName"
                      placeholder="Full Name"
                      className="input-city"
                      style={{ width: "100%", height: "45px", fontSize: "16px", border: "1px solid #AAAAAA" }}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </Stack>
  
                  <Stack width={"100%"}>
                    <Field
                      name="email"
                      placeholder="Email"
                      className="input-city"
                      style={{ width: "100%", height: "45px", fontSize: "16px", border: "1px solid #AAAAAA" }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </Stack>
  
                  <Stack width={"100%"}>
                    <Field
                      name="designation"
                      placeholder="Designation"
                      className="input-city"
                      style={{ width: "100%", height: "45px", fontSize: "16px", border: "1px solid #AAAAAA" }}
                    />
                    <ErrorMessage
                      name="designation"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </Stack>
  
                  <Stack width={"100%"}>
                    <Field
                      name="companyName"
                      placeholder="Company Name"
                      className="input-city"
                      style={{ width: "100%", height: "45px", fontSize: "16px", border: "1px solid #AAAAAA" }}
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </Stack>

                  <Stack width={"100%"}>
                    <Field
                      as="textarea"
                      name="feedback"
                      placeholder="Please share your Feedback*"
                      className="input-city"
                      style={{ width: "100%", height: "150px", fontSize: "16px", border: "1px solid #AAAAAA" }}
                    />
                    <ErrorMessage
                      name="feedback"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </Stack>
  
                  <Stack width={"100%"}>
                    <input
                      style={{ width: "100%", height: "45px", fontSize: "16px", border: "1px solid #AAAAAA" }}
                      type="file"
                      className="input-city"
                      onChange={(e) => setFieldValue("file", e.target.files[0])}
                    />
                    <ErrorMessage
                      name="file"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
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
  
                  <Stack width={"100%"}>
                    <Field
                      name="captcha"
                      placeholder="Captcha*"
                      className="input-city"
                      style={{ width: "100%", height: "45px", fontSize: "16px", border: "1px solid #AAAAAA" }}
                    />
                    <ErrorMessage
                      name="captcha"
                      component="div"
                      style={{ color: "red", fontSize: "12px" }}
                    />
                  </Stack>
  
                  <Typography sx={{ fontSize: "12px", color: "black", textAlign: "left", fontFamily: "Work Sans" }}>
                    By submitting this form, you agree to the processing of personal data according to our Privacy Policy.
                  </Typography>
                </Stack>
  
                <Stack gap={2} direction={"row"} justifyContent={"center"}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ width: "120px", height: "40px", fontWeight: "600" }}
                  >
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Stack>
  </Stack>
  
  );
};

export default ShareExperience;
