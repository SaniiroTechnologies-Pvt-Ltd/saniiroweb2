
import React, { useState } from "react";
import Nav from "@/components/Navbar/Nav";
import CareerBanner from "./parts/CareerBanner";
import JobSection from "./parts/JobSection";
import Readytosign from "@/components/Contact/Readytosign"; 
import { Stack } from "@mui/material";

function Career() {
 const [selectedDepartmentId, setSelectedDepartmentId] = useState(null); // This will store the department ID
 const [Country, setCountry] = useState(null); // This will store the country name

 const handleDepartmentChange = (departmentId) => {
   setSelectedDepartmentId(departmentId); // Set the department ID
 };

 const handleCountryChange = (CountryName) => {
   setCountry(CountryName); // Set the country name
 };

  return (
    <>
      <Nav />
      <CareerBanner
        onDepartmentChange={handleDepartmentChange} // Pass down the handlers
        handleACountryChange={handleCountryChange}
      />
      <Stack maxWidth={"1536px"} margin={"0 auto"}>
        <JobSection
          selectedDepartmentId={selectedDepartmentId} // Pass the department ID
          Country={Country} // Pass the country name
        />
      </Stack>
      <Readytosign />

    </>
  );
}

export default Career;
