import { Stack, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./request.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { ContactUsSchema } from "@/Validation-Scema";
import apiEndpoints from "@/utils/apiEndpoints";
import NavLight from "@/components/Navbar/NavLight";
import PhoneNumberInput from "@/components/Home/nm";
import SweetAlert from "@/components/SweetAlert/SweetAlert";
import Button from "../utils/Button";

const RequestDemo = () => {

  const initialValues = {
    Name: "",
    OrganizationName: "",
    PhoneCode: "",
    PhoneNumber: "",
    Email: "",
    Message: ""
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        `${apiEndpoints.RequestDemo}`,
        values
      );
      if (response.data.Code === 1000) {
        SweetAlert.success("Thank you for your submission! Our team will call you shortly.");
        resetForm();
      } else {
        SweetAlert.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      SweetAlert.error("An error occurred during submission.");
    }
  };

  return (
    <Stack
      height={{ xl: "930px", xs: "auto" }}
      position={"relative"}
      bgcolor={"#052973"}
      className="textured-background"
    >
      <NavLight />
      <Stack
        maxWidth={"1536px"}
        zIndex={11}
        sx={{
          flexDirection: {
            xs: "column",
            lg: "row",
          },

          margin: {
            xs: "0 auto",
            sm: "20px auto",
          },
        }}
      >
        <Stack
          gap={"10px"}
          sx={{
            width: {
              xs: "100%",
              lg: "40%",
              xl: "54%",
              xxl: "50%",
            },
            margin: {
              lg: "40px auto",
              xl: "84px 37px",
            },
            padding: {
              xs: "10px 0",
            },
          }}
        >
          <Typography
            textTransform={"uppercase"}
            fontFamily={"monospace"}
            sx={{
              wordSpacing: { xl: "-27px" },
              fontSize: {
                xs: "39px",
                sm: "39px",
                md: "68px",
                lg: "63px",
                xl: "97px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            fontWeight={"bold"}
            color={"transparent"}
            lineHeight={0.9}
            letterSpacing={"0.1em"}
            className="text-stroke"
          >
            Looking For
          </Typography>
          <Typography
            color={"white"}
            textTransform={"uppercase"}
            sx={{
              fontSize: {
                xs: "38px",
                sm: "37px",
                md: "68px",
                lg: "63px",
                xl: "87px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
            fontWeight={900}
            lineHeight={0.9}
            letterSpacing={"0.05em"}
          >
            something in particular?
          </Typography>

          <Typography
            fontFamily={"Work Sans"}

            color={"white"}
            sx={{
              width: {
                xs: "90%",
                sm: "80%",
                lg: "90%",
              },
              margin: {
                xs: "0px auto 0px",
                lg: "5px 5px",
              },

              fontSize: {
                xs: "14px",
                lg: "18px",
              },
              textAlign: {
                xs: "center",
                lg: "left",
              },
            }}
          >
            We're here to help.
          </Typography>
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
            color={"white"}
            // color={"white"}
            fontWeight={"bold"}
            fontSize={"22px"}
            textAlign={"center"}
            fontFamily={"Work Sans"}
          >
            Request demo Form
          </Typography>
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

            <Formik
              initialValues={initialValues}
              validationSchema={ContactUsSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, values }) => (
                <Form>
                  <Stack spacing={2}>
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
                        name="Name"
                        placeholder="Full Name"
                        style={{
                          height: "100%",
                          border: "1px solid #AAAAAA",
                          padding: "10px",
                          fontSize: "16px",
                        }}
                      />
                      <ErrorMessage
                        name="Name"
                        component={Typography}
                        color="error"
                      />
                    </Stack>

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
                        type="email"
                        name="Email"
                        placeholder="Work Email"
                        style={{
                          height: "100%",
                          border: "1px solid #AAAAAA",
                          padding: "10px",
                          fontSize: "16px",
                        }}
                      />
                      <ErrorMessage
                        name="Email"
                        component={Typography}
                        color="error"
                      />
                    </Stack>

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
                        name="OrganizationName"
                        placeholder="Organization Name"
                        style={{
                          height: "100%",
                          border: "1px solid #AAAAAA",
                          padding: "10px",
                          fontSize: "16px",
                        }}
                      />
                      <ErrorMessage
                        name="OrganizationName"
                        component={Typography}
                        color="error"
                      />
                    </Stack>

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
                        style={{
                          height: "100%",
                          border: "1px solid #AAAAAA",
                          padding: "10px",
                          fontSize: "16px",
                        }}
                        name="PhoneNumber"
                        component={PhoneNumberInput}
                      />
                      <ErrorMessage
                        name="PhoneNumber"
                        component={Typography}
                        color="error"
                      />
                    </Stack>

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
                        as="textarea"
                        name="Message"
                        placeholder="Your message (max 50 characters)"
                        maxLength="50"
                        style={{
                          height: "485px",
                          border: "1px solid #AAAAAA",
                          padding: "10px",
                          fontSize: "16px",
                        }}
                      />
                      <ErrorMessage
                        name="Message"
                        component={Typography}
                        color="error"
                      />
                    </Stack>

                    <Stack>
                      <Button
                        type="submit"
                        sx={{
                          height: "50px",
                          bgcolor: "#F15B25",
                          color: "white",
                          fontSize: "16px",
                          fontWeight: "bold",
                          "&:hover": {
                            backgroundColor: "transparent",
                            border: "1px solid #F15B25",
                            color: "#F15B25",
                          },
                        }}
                      >
                        Get Started
                      </Button>
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RequestDemo;
