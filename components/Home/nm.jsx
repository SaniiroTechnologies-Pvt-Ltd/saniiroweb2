"use client";

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Stack } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { usePathname } from "next/navigation";

const PhoneNumberInput = ({ field, form }) => {
  // Handle phone number and country code change
  const handlePhoneChange = (value, country) => {
    const phoneCode = country.dialCode; // Country code
    const phoneNumber = value; // Phone number
    form.setFieldValue("PhoneCode", phoneCode); // Set country code
    form.setFieldValue("PhoneNumber", phoneNumber); // Set phone number
  };

  const error = form.errors[field.name] && form.touched[field.name];
  const pathname = usePathname();
  const isContactUsPage = pathname === "/Contact-us";

  return (
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
        height: { xs: "45px", sm: "55px", md: "67px", lg: "57px", xl: "67px" },
      }}
    >
      <PhoneInput
        country={"us"} // Default country
        value={field.value} // Phone number value (form value)
        onChange={handlePhoneChange} // Handle change for both phone number and country code
        inputProps={{
          name: field.name,
          id: "phoneInput",
        }}
      />
      {/* {error && (
        <Typography color="error" variant="caption">
          {form.errors[field.name]}
        </Typography>
      )} */}
      {!isContactUsPage && (
        <PhoneAndroidIcon
          style={{
            position: "absolute",
            top: "50%",
            right: "4px",
            transform: "translateY(-50%)",
            color: "#AAAAAA",
            fontSize: "40px",
          }}
        />
      )}
    </Stack>
  );
};

export default PhoneNumberInput;





// import React from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { Stack, Typography } from "@mui/material";

// const PhoneNumberInput = ({ field, form }) => {
//   const handlePhoneChange = (value) => {
//     form.setFieldValue(field.name, value); // Update Formik's state
//   };

//   const error = form.errors[field.name] && form.touched[field.name];
  

//   return (
//     <Stack
//           style={{ position: "relative" }}
//           sx={{
//             width: {
//               xs: "220px",
//               sm: "300px",
//               md: "480px",
//               lg: "385px",
//               xl: "480px",
//             },
//             height: { xs: "45px", sm: "55px", md: "67px", lg: "57px", xl: "67px" },
//           }}
//           margin={"0 auto"}
//         >
//       <PhoneInput
//         country={"us"} // Default country
//         value={field.value} // Formik-managed value
//         onChange={handlePhoneChange} // Update Formik state
//         inputProps={{
//           name: field.name,
//           id: "phoneInput",
//         }}
//         style={{
//           width: "100%",
//           border: error ? "1px solid red" : "1px solid #AAAAAA",
//           padding: "10px",
//         }}
//       />
//       {error && (
//         <Typography color="error" variant="caption">
//           {form.errors[field.name]}
//         </Typography>
//       )}
//     </Stack>
//   );
// };

// export default PhoneNumberInput;
