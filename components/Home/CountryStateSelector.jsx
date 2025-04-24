"use client";

import React, { useEffect } from "react";
import { Grid, Select, MenuItem, InputAdornment, Tooltip, Typography, CircularProgress } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";

const inputStyles = { borderRadius: "12px", backgroundColor: "#FFFFFF", color: "text.tertiary" };
const inputSize = "small";

const CountryStateSelector = ({
 countries,
 states,
 countriesLoading,
 statesLoading,
 selectedCountry,
 selectedState,
 handleCountryChange,
 handleStateChange,
 errors,
}) => {
 return (
  <>
   {/* Country Select */}
   <Grid item xs={12} md={6}>
    <Tooltip
     title={errors.CountryId || ""}
     open={Boolean(errors.CountryId)}
     placement="bottom-end"
     arrow
     disableFocusListener
     disableHoverListener={!errors.CountryId}
     disableTouchListener
    >
     <Select
      size={inputSize}
      value={selectedCountry}
      onChange={(e) => handleCountryChange(e.target.value)}
      displayEmpty
      fullWidth
      sx={{
       ...inputStyles,
       "& .MuiOutlinedInput-notchedOutline": {
        borderColor: errors.CountryId ? "#f44336" : "#ccc",
        borderWidth: errors.CountryId ? "2px" : "1px",
       },
      }}
      startAdornment={
       <InputAdornment position="start">
        <PublicIcon sx={{ color: "text.tertiary" }} />
       </InputAdornment>
      }
     >
      <MenuItem value="" disabled>
       <Typography variant="body2">
        {countriesLoading ? (
         <>
          Loading Countries... &nbsp;
          <CircularProgress size={18} sx={{ color: "text.tertiary" }} />
         </>
        ) : (
         "Select Country"
        )}
       </Typography>
      </MenuItem>
      {!countriesLoading && countries.map((country) => (
       <MenuItem key={country.Id} value={country.Id}>
        {country.Name}
       </MenuItem>
      ))}
     </Select>
    </Tooltip>
   </Grid>

   {/* State Select */}
   <Grid item xs={12} md={6}>
    <Tooltip
     title={errors.StateId || ""}
     open={Boolean(errors.StateId)}
     placement="bottom-end"
     arrow
     disableFocusListener
     disableHoverListener={!errors.StateId}
     disableTouchListener
    >
     <Select
      size={inputSize}
      value={selectedState}
      onChange={(e) => handleStateChange(e.target.value)}
      displayEmpty
      fullWidth
      disabled={!states.length}
      sx={{
       ...inputStyles,
       "& .MuiOutlinedInput-notchedOutline": {
        borderColor: errors.StateId ? "#f44336" : "#ccc",
        borderWidth: errors.StateId ? "2px" : "1px",
       },
      }}
      startAdornment={
       <InputAdornment position="start">
        <LocationCityIcon sx={{ color: "text.tertiary" }} />
       </InputAdornment>
      }
     >
      <MenuItem value="" disabled>
       <Typography variant="body2">
        {statesLoading ? (
         <>
          Loading states... &nbsp;
          <CircularProgress size={18} sx={{ color: "text.tertiary" }} />
         </>
        ) : (
         "Select State"
        )}
       </Typography>
      </MenuItem>
      {!statesLoading && states.map((state) => (
       <MenuItem key={state.Id} value={state.Id}>
        {state.Name}
       </MenuItem>
      ))}
     </Select>
    </Tooltip>
   </Grid>
  </>
 );
};

export default CountryStateSelector;
