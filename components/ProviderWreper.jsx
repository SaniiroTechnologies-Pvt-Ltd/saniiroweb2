"use client";

import React  from "react";
import { DataProvider } from "@/components/context/Authcontext"; // Fixed the import path with '@'
import { Provider } from "react-redux";
import store from "@/redux/store";

import { ThemeProvider, createTheme } from "@mui/material/styles";

function ProviderWrapper({ children }) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 314,
        smm: 530,
        md: 768,
        lg: 1024,
        xl: 1220,
        xll: 1440,
        xxl: 1600,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default ProviderWrapper;
