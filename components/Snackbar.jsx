// src/components/Snackbar.jsx
"use client";

import React from "react";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "@/redux/snackbarSlice"; 

const Snackbar = () => {
  const dispatch = useDispatch();
  const { open, message, severity, duration } = useSelector(
    (state) => state.snackbar
  );

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    dispatch(closeSnackbar());
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={duration || 4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity || "info"}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
