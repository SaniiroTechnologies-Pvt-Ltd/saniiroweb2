import * as Yup from "yup";

export const ContactUsSchema = Yup.object().shape({
  Name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  OrganizationName: Yup.string().required("Organization Name is required"),
  PhoneCode: Yup.string().required("Phone code is required"),
  PhoneNumber: Yup.string().required("Phone number is required"),
  Email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  Message: Yup.string()
    .max(50, "Message cannot exceed 50 characters")
    .required("Message is required"),
});

export const validationSchema = (ShowContact) =>
  Yup.object().shape({
    Name: Yup.string().required("Full Name is required"),
    Email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    UserName: Yup.string().required("Username is required"),
    PhoneNumber: ShowContact
      ? Yup.string()
          .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
          .required("Phone number is required")
      : Yup.string().notRequired(),
    CountryId: Yup.string().required("Country is required"),
    StateId: Yup.string().required("State is required"),
    terms: Yup.boolean()
      .oneOf(
        [true],
        "You must agree to the Terms of Service and Privacy Policy."
      )
      .required("You must agree to the Terms of Service and Privacy Policy."),
  });

export const validationWithOTPSchema = Yup.object().shape({
  Name: Yup.string().required("Full Name is required"),
  Email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  UserName: Yup.string().required("Username is required"),
  PhoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  CountryId: Yup.string().required("Country is required"),
  StateId: Yup.string().required("State is required"),
  terms: Yup.boolean()
    .oneOf([true], "You must agree to the Terms of Service and Privacy Policy.")
    .required("You must agree to the Terms of Service and Privacy Policy."),
  Otp: Yup.string()
    .required("OTP is required")
    .matches(/^\d+$/, "OTP must contain only digits")
    .length(6, "OTP must be exactly 6 digits"),
});

export const SignUpvalidationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  agree: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
  selectedCountry: Yup.string().required("Country is required"),
  selectedState: Yup.string().required("State is required"),
});

export const LoginvalidationSchema = Yup.object({
  customerId: Yup.string()
    .required("Customer Login ID is required")
    .min(5, "Must be at least 5 characters"),
  UseName: Yup.string()
    .required("User Name is required")
    .email("Invalid email address"),
  Password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});


export  const ShereExperienceSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  designation: Yup.string().required("Designation is required"),
  companyName: Yup.string().required("Company Name is required"),
  feedback: Yup.string().required("Feedback is required"),
  captcha: Yup.string().required("Captcha is required"),
  file: Yup.mixed().required("File is required"),
  CountryId: Yup.string().required("Country is required"),
  StateId: Yup.string().required("State is required"),
});


  export const purchaseSchema = Yup.object({
    Name: Yup.string().required("Customer Name is required"),
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    UserName: Yup.string().required("Username is required"),
    PhoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be a 10-digit mobile number")
      .required("Mobile No. is required"),
    CountryId: Yup.string().required("Country is required"),
    StateId: Yup.string().required("State is required"),
    OrganisationName: Yup.string().required("Organisation Name is required"),
    ContactPerson: Yup.string().required("Contact Person is required"),
    GSTNo: Yup.string().optional(),
    City: Yup.string().required("City is required"),
    Address: Yup.string().required("Address is required"),
    PostCode: Yup.string().required("Post Code is required"),
    SalesExecutive: Yup.string().optional(),
    Remark: Yup.string().optional(),
  });