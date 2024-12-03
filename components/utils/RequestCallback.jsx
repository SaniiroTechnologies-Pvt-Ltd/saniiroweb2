// import React, { useState } from "react";
// import Nav from "../Navbar/Nav";
// import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MailIcon from "@mui/icons-material/Mail";
// import { MuiTelInput } from "mui-tel-input";
// import Footer from "../utils/Footer";
// import {
//   CountryField,
//   StateField,
//   VisitorAPIComponents,
// } from "react-country-state-fields";
// import { Formik } from "formik";

// const RequestCallback = () => {

//   const initialValues = {
//     Name: "",
//     Email: "",
//     phone: "",
//     help: "",
//     captchaVerified: "123",

//   };


//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [help, setHelp] = useState("");
//   const [captchaVerified, setCaptchaVerified] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "name") setName(value);
//     else if (name === "email") setEmail(value);
//     else if (name === "phone") setPhone(value);
//     else if (name === "help") setHelp(value);
//   };

//   const handleCaptchaVerification = (response) => {
//     if (response) {
//       setCaptchaVerified(true);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can add code to submit the form data to your backend or handle it as needed
//     console.log("Form submitted:", { name, email, phone, help });
//     // Reset form fields
//     setName("");
//     setEmail("");
//     setPhone("");
//     setHelp("");
//     setCaptchaVerified(false);
//   };

//   const [country, setCountry] = useState({});
//   const [state, setState] = useState({});
//   const visitorApiPrjectId = "";

//   return (
//     <>
//       <Nav />
//       <Stack maxWidth={"1536px"} margin={"0 auto"} backgroundColor={"#F5F5F5"}>
//         <Stack
//           direction={{
//             xs: "column",
//             md: "row",
//           }}
//           pb={3}
//         >
//           <Stack
//             margin={"0 auto"}
//             width={{
//               xs: "80%",
//               md: "50%",
//             }}
//             alignItems={"center"}
//             mt={{
//               xs: 5,
//               md: 20,
//             }}
//           >
//             <Stack
//               width={{
//                 xs: "100%",
//                 md: "70%",
//               }}
//               margin={"0 auto"}
//               gap={2}
//               fontFamily={"Work Sans"}
//             >
//               <Typography
//                 color={"#004ad4"}
//                 textAlign={{
//                   xs: "center",
//                   md: "left",
//                 }}
//                 variant="h3"
//                 fontWeight={"bold"}
//                 fontFamily={"Work Sans"}
//               >
//                 Request a Callback
//               </Typography>
//               <Typography
//                 fontWeight={"bold"}
//                 textAlign={{
//                   xs: "center",
//                   md: "left",
//                 }}
//                 fontFamily={"Work Sans"}
//               >
//                 Interested in learning more about Zoho CRM ? {`\n`} Fill out the
//                 form and one of our product experts will call you to understand
//                 your requirements better{" "}
//               </Typography>
//               <Typography fontFamily={"Work Sans"}>
//                 You can also reach us directly at:{" "}
//               </Typography>
//               <Stack direction={"row"} gap={2}>
//                 <PhoneIcon sx={{ color: "#F15B25" }} />
//                 <Stack direction={"column"} gap={0.5}>
//                   <Typography fontFamily={"Work Sans"}>
//                     {" "}
//                     1800 102 1122
//                   </Typography>
//                   <Typography fontFamily={"Work Sans"}>
//                     {" "}
//                     1800 102 1123
//                   </Typography>
//                 </Stack>
//               </Stack>
//               <Typography fontFamily={"Work Sans"}>
//                 Or write to us at:{" "}
//               </Typography>
//               <Stack direction={"row"} gap={2}>
//                 <MailIcon sx={{ color: "#F15B25" }} />
//                 <Typography fontFamily={"Work Sans"}>
//                   sales@saniiro.com
//                 </Typography>
//               </Stack>
//             </Stack>
//           </Stack>
//           <Stack
//             margin={"0 auto"}
//             width={{
//               xs: "95%",
//               md: "50%",
//             }}
//             height={"100%"}
//           >
//             <Stack mt={5}>
//               <Stack
//                 border={"1px solid #E0E0E0"}
//                 borderRadius={"10px"}
//                 margin={"0 auto"}
//                 width={{
//                   xs: "95%",
//                   md: "70%",
//                 }}
//                 height={"100%"}
//                 backgroundColor={"white"}
//                 p={3}
//                 boxSizing={"border-box"}
//               >
//                 <Stack>
//                 <Formik
//         initialValues={initialValues}
//         validationSchema={
//           otpSent ? validationWithOTPSchema : validationSchema
//         }
//         onSubmit={otpSent ? handleSubmit : sendOTP}
//       >
//         {({ errors, touched, values, resetForm, setFieldValue, handleChange }) => (
//           <Form>
//                     <Stack gap={2}>
//                       <Stack width={"100%"}>
//                         <label htmlFor="name">
//                           <Typography fontWeight={"bold"}>
//                             Name
//                             <span
//                               style={{
//                                 color: "red",
//                               }}
//                             >
//                               *
//                             </span>
//                           </Typography>
//                         </label>
//                         <Field
//                           size="small"
//                           id="name"
//                           name="name"
//                           variant="outlined"
//                           placeholder="What do we call you"
//                         />
//                       </Stack>
//                       <ErrorMessage
//                     name="Name"
//                     component="div"
//                     style={{ color: "red" }}
//                   />
//                       <Stack width={"100%"}>
//                         <label htmlFor="email">
//                           <Typography fontWeight={"bold"}>
//                             Email
//                             <span
//                               style={{
//                                 color: "red",
//                               }}
//                             >
//                               *
//                             </span>
//                           </Typography>
//                         </label>
//                         <Field
//                           size="small"
//                           id="email"
//                           name="email"
//                           variant="outlined"
//                           placeholder="Please enter your business email ID"
//                         />
//                       </Stack>
//                       <Stack width={"100%"}>
//                         <label htmlFor="phone">
//                           <Typography fontWeight={"bold"}>
//                             Phone
//                             <span
//                               style={{
//                                 color: "red",
//                               }}
//                             >
//                               *
//                             </span>
//                           </Typography>
//                         </label>
//                         <MuiTelInput
//                           size="small"
//                           id="phone"
//                           name="phone"
//                           onChange={(newValue) =>
//                             handleChange({
//                               target: { name: "phone", value: newValue },
//                             })
//                           }
//                           placeholder="Phone"
//                           defaultCountry="IN"
//                         />
//                       </Stack>
//                       <ErrorMessage
//                     name="phone"
//                     component="div"
//                     style={{ color: "red" }}
//                   />
//                       <Stack width={"100%"} gap={1}>
//                         <label htmlFor="phone">
//                           <Typography fontWeight={"bold"}>
//                             Country
//                             <span
//                               style={{
//                                 color: "red",
//                               }}
//                             >
//                               *
//                             </span>
//                           </Typography>
//                         </label>
//                         <VisitorAPIComponents
//                           projectId={visitorApiPrjectId}
//                           handleCountryChange={(countryObj) =>
//                             setCountry(countryObj)
//                           }
//                           handleStateChange={(stateObj) => setState(stateObj)}
//                         >
//                           <CountryField
//                             sx={{ height: "20px" }}
//                             label="Country"
//                             placeholder="Country"
//                           ></CountryField>
//                           <StateField
//                             size="small"
//                             label="State"
//                             placeholder="State"
//                           ></StateField>
//                         </VisitorAPIComponents>
//                       </Stack>
//                       <Stack width={"100%"} gap={2}>
//                         <label htmlFor="help">
//                           <Typography fontWeight={"bold"}>
//                             How can our team help you?
//                             <span
//                               style={{
//                                 color: "red",
//                               }}
//                             >
//                               *
//                             </span>
//                           </Typography>
//                         </label>
//                         <TextField
//                           variant="outlined"
//                           fullWidth
//                           multiline
//                           minRows={3}
//                           size="small"
//                           id="help"
//                           name="help"
//                           value={help}
//                           onChange={handleChange}
//                           placeholder="How can our team help you?"
//                           required
//                         />
//                       </Stack>
//                       <Stack width={"100%"} gap={2}>
//                         <label htmlFor="captcha">
//                           <Typography fontWeight={"bold"}>
//                             Captcha
//                             <span
//                               style={{
//                                 color: "red",
//                               }}
//                             >
//                               *
//                             </span>
//                           </Typography>
//                         </label>
//                         <div
//                           className="g-recaptcha"
//                           data-sitekey="6Ldyj58pAAAAAMxa5p0VGAIrBNxqDgwbUivphTon"
//                           data-callback={handleCaptchaVerification}
//                         ></div>
//                         {!captchaVerified && (
//                           <Typography style={{ color: "red" }}>
//                             Please verify that you are not a robot.
//                           </Typography>
//                         )}
//                       </Stack>

//                       <Stack width={"100%"} gap={2}>
//                         <Typography>
//                           By submitting this form, you agree to our {` `}
//                           <a href="#">Privacy Policy</a>
//                         </Typography>
//                       </Stack>
//                       <Button
//                         type="submit"
//                         sx={{
//                           backgroundColor: "#F15B25",
//                           color: "#fff",
//                           padding: "15px",
//                           "&:hover": {
//                             backgroundColor: "#F15B25",
//                           },
//                         }}
//                         variant="contained"
//                         fullWidth
//                       >
//                         <Typography fontWeight={"bold"}>
//                           Submit Request
//                         </Typography>
//                       </Button>
//                     </Stack>
//                     </Form>
//         )}
//       </Formik>
//                 </Stack>
//               </Stack>
//             </Stack>
//           </Stack>
//         </Stack>
//         <Footer />
//       </Stack>
//     </>
//   );
// };

// export default RequestCallback;






// import React, { useState } from "react";
// import Nav from "../Navbar/Nav";
// import {
//   Box,
//   Button,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MailIcon from "@mui/icons-material/Mail";
// import { MuiTelInput } from "mui-tel-input";
// import Footer from "../utils/Footer";
// import {
//   CountryField,
//   StateField,
//   VisitorAPIComponents,
// } from "react-country-state-fields";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const RequestCallback = () => {
//   const visitorApiPrjectId = "";


//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .min(2, "Name must be at least 2 characters")
//       .required("Name is required"),
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     phone: Yup.string()
//       .min(10, "Phone number must be valid")
//       .required("Phone number is required"),
//     help: Yup.string()
//       .min(10, "Please provide more details")
//       .required("This field is required"),
//     // captchaVerified: Yup.boolean().oneOf(
//     //   [true],
//     //   "Please verify that you are not a robot"
//     // ),
//   });


//   const initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     help: "",
//     // captchaVerified: false,
//   };


//   const handleSubmit = (values, { resetForm }) => {
//     console.log("Form submitted:", values);
//     resetForm();
//   };

//   return (
//     <>
//       <Nav />
//       <Stack maxWidth={"1536px"} margin={"0 auto"} backgroundColor={"#F5F5F5"}>
//         <Stack direction={{ xs: "column", md: "row" }} pb={3}>
//           <Stack
//             margin={"0 auto"}
//             width={{ xs: "80%", md: "50%" }}
//             alignItems={"center"}
//             mt={{ xs: 5, md: 20 }}
//           >
//             <Stack
//               width={{ xs: "100%", md: "70%" }}
//               margin={"0 auto"}
//               gap={2}
//               fontFamily={"Work Sans"}
//             >
//               <Typography
//                 color={"#004ad4"}
//                 textAlign={{ xs: "center", md: "left" }}
//                 variant="h3"
//                 fontWeight={"bold"}
//               >
//                 Request a Callback
//               </Typography>
//               <Typography
//                 fontWeight={"bold"}
//                 textAlign={{ xs: "center", md: "left" }}
//               >
//                 Interested in learning more about Zoho CRM? Fill out the form
//                 and one of our product experts will call you to understand your
//                 requirements better.
//               </Typography>
//               <Typography>You can also reach us directly at:</Typography>
//               <Stack direction={"row"} gap={2}>
//                 <PhoneIcon sx={{ color: "#F15B25" }} />
//                 <Stack direction={"column"} gap={0.5}>
//                   <Typography>1800 102 1122</Typography>
//                   <Typography>1800 102 1123</Typography>
//                 </Stack>
//               </Stack>
//               <Typography>Or write to us at:</Typography>
//               <Stack direction={"row"} gap={2}>
//                 <MailIcon sx={{ color: "#F15B25" }} />
//                 <Typography>sales@saniiro.com</Typography>
//               </Stack>
//             </Stack>
//           </Stack>
//           <Stack
//             margin={"0 auto"}
//             width={{ xs: "95%", md: "50%" }}
//             height={"100%"}
//           >
//             <Stack mt={5}>
//               <Stack
//                 border={"1px solid #E0E0E0"}
//                 borderRadius={"10px"}
//                 margin={"0 auto"}
//                 width={{ xs: "95%", md: "70%" }}
//                 height={"100%"}
//                 backgroundColor={"white"}
//                 p={3}
//                 boxSizing={"border-box"}
//               >
//                 <Formik
//                   initialValues={initialValues}
//                   validationSchema={validationSchema}
//                   onSubmit={handleSubmit}
//                 >
//                   {({ values, handleChange, errors, touched }) => (
//                     <Form>
//                       <Stack gap={2}>
//                         <Stack>
//                           <label htmlFor="name">
//                             <Typography fontWeight={"bold"}>
//                               Name <span style={{ color: "red" }}>*</span>
//                             </Typography>
//                           </label>
//                           <Field
//                             as={TextField}
//                             size="small"
//                             id="name"
//                             name="name"
//                             placeholder="What do we call you?"
//                             error={touched.name && !!errors.name}
//                             helperText={touched.name && errors.name}
//                           />
//                         </Stack>
//                         <Stack>
//                           <label htmlFor="email">
//                             <Typography fontWeight={"bold"}>
//                               Email <span style={{ color: "red" }}>*</span>
//                             </Typography>
//                           </label>
//                           <Field
//                             as={TextField}
//                             size="small"
//                             id="email"
//                             name="email"
//                             placeholder="Please enter your business email ID"
//                             error={touched.email && !!errors.email}
//                             helperText={touched.email && errors.email}
//                           />
//                         </Stack>
//                         <Stack>
//                           <label htmlFor="phone">
//                             <Typography fontWeight={"bold"}>
//                               Phone <span style={{ color: "red" }}>*</span>
//                             </Typography>
//                           </label>
//                           <Field
//                             as={MuiTelInput}
//                             size="small"
//                             id="phone"
//                             name="phone"
//                             defaultCountry="IN"
//                             placeholder="Phone"
//                             onChange={(newValue) =>
//                               handleChange({
//                                 target: { name: "phone", value: newValue },
//                               })
//                             }
//                             error={touched.phone && !!errors.phone}
//                             helperText={touched.phone && errors.phone}
//                           />
//                         </Stack>
//                         <Stack>
//                           <label htmlFor="help">
//                             <Typography fontWeight={"bold"}>
//                               How can our team help you?{" "}
//                               <span style={{ color: "red" }}>*</span>
//                             </Typography>
//                           </label>
//                           <Field
//                             as={TextField}
//                             variant="outlined"
//                             fullWidth
//                             multiline
//                             minRows={3}
//                             size="small"
//                             id="help"
//                             name="help"
//                             placeholder="How can our team help you?"
//                             error={touched.help && !!errors.help}
//                             helperText={touched.help && errors.help}
//                           />
//                         </Stack>
                        
//                         <Button
//                           type="submit"
//                           sx={{
//                             backgroundColor: "#F15B25",
//                             color: "#fff",
//                             padding: "15px",
//                             "&:hover": {
//                               backgroundColor: "#F15B25",
//                             },
//                           }}
//                           variant="contained"
//                           fullWidth
//                         >
//                           Submit Request
//                         </Button>
//                       </Stack>
//                     </Form>
//                   )}
//                 </Formik>
//               </Stack>
//             </Stack>
//           </Stack>
//         </Stack>
//         <Footer />
//       </Stack>
//     </>
//   );
// };

// export default RequestCallback;


import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { MuiTelInput } from "mui-tel-input";
import Footer from "../utils/Footer";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

const RequestCallback = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaVerification = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .min(10, "Phone number must be valid")
      .required("Phone number is required"),
    help: Yup.string()
      .min(10, "Please provide more details")
      .required("This field is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    help: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!captchaVerified) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }
    console.log("Form submitted:", values);
    resetForm();
    setCaptchaVerified(false);
  };

  return (
    <>
      <Nav />
      <Stack maxWidth={"1536px"} margin={"0 auto"} backgroundColor={"#F5F5F5"}>
        <Stack direction={{ xs: "column", md: "row" }} pb={3}>
          <Stack
            margin={"0 auto"}
            width={{ xs: "80%", md: "50%" }}
            alignItems={"center"}
            mt={{ xs: 5, md: 20 }}
          >
            <Stack
              width={{ xs: "100%", md: "70%" }}
              margin={"0 auto"}
              gap={2}
              fontFamily={"Work Sans"}
            >
              <Typography
                color={"#004ad4"}
                textAlign={{ xs: "center", md: "left" }}
                variant="h3"
                fontWeight={"bold"}
              >
                Request a Callback
              </Typography>
              <Typography
                fontWeight={"bold"}
                textAlign={{ xs: "center", md: "left" }}
              >
                Interested in learning more about Zoho CRM? Fill out the form
                and one of our product experts will call you to understand your
                requirements better.
              </Typography>
              <Typography>You can also reach us directly at:</Typography>
              <Stack direction={"row"} gap={2}>
                <PhoneIcon sx={{ color: "#F15B25" }} />
                <Stack direction={"column"} gap={0.5}>
                  <Typography>1800 102 1122</Typography>
                  <Typography>1800 102 1123</Typography>
                </Stack>
              </Stack>
              <Typography>Or write to us at:</Typography>
              <Stack direction={"row"} gap={2}>
                <MailIcon sx={{ color: "#F15B25" }} />
                <Typography>sales@saniiro.com</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            margin={"0 auto"}
            width={{ xs: "95%", md: "50%" }}
            height={"100%"}
          >
            <Stack mt={5}>
              <Stack
                border={"1px solid #E0E0E0"}
                borderRadius={"10px"}
                margin={"0 auto"}
                width={{ xs: "95%", md: "70%" }}
                height={"100%"}
                backgroundColor={"white"}
                p={3}
                boxSizing={"border-box"}
              >
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ values, handleChange, errors, touched }) => (
                    <Form>
                      <Stack gap={2}>
                        <Stack>
                          <label htmlFor="name">
                            <Typography fontWeight={"bold"}>
                              Name <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </label>
                          <Field
                            as={TextField}
                            size="small"
                            id="name"
                            name="name"
                            placeholder="What do we call you?"
                            error={touched.name && !!errors.name}
                            helperText={touched.name && errors.name}
                          />
                        </Stack>
                        <Stack>
                          <label htmlFor="email">
                            <Typography fontWeight={"bold"}>
                              Email <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </label>
                          <Field
                            as={TextField}
                            size="small"
                            id="email"
                            name="email"
                            placeholder="Please enter your business email ID"
                            error={touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                          />
                        </Stack>
                        <Stack>
                          <label htmlFor="phone">
                            <Typography fontWeight={"bold"}>
                              Phone <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </label>
                          <Field
                            as={MuiTelInput}
                            size="small"
                            id="phone"
                            name="phone"
                            defaultCountry="IN"
                            placeholder="Phone"
                            onChange={(newValue) =>
                              handleChange({
                                target: { name: "phone", value: newValue },
                              })
                            }
                            error={touched.phone && !!errors.phone}
                            helperText={touched.phone && errors.phone}
                          />
                        </Stack>
                        <Stack>
                          <label htmlFor="help">
                            <Typography fontWeight={"bold"}>
                              How can our team help you?{" "}
                              <span style={{ color: "red" }}>*</span>
                            </Typography>
                          </label>
                          <Field
                            as={TextField}
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={3}
                            size="small"
                            id="help"
                            name="help"
                            placeholder="How can our team help you?"
                            error={touched.help && !!errors.help}
                            helperText={touched.help && errors.help}
                          />
                        </Stack>
                        <ReCAPTCHA
                          sitekey="6Ldyj58pAAAAAMxa5p0VGAIrBNxqDgwbUivphTon"
                          onChange={handleCaptchaVerification}
                        />
                        {!captchaVerified && (
                          <Typography style={{ color: "red" }}>
                            Please verify that you are not a robot.
                          </Typography>
                        )}
                      </Stack>
                      <Button
                        type="submit"
                        sx={{
                          backgroundColor: "#F15B25",
                          color: "#fff",
                          padding: "15px",
                          "&:hover": {
                            backgroundColor: "#F15B25",
                          },
                        }}
                        variant="contained"
                        fullWidth
                      >
                        Submit Request
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Footer />
      </Stack>
    </>
  );
};

export default RequestCallback;


