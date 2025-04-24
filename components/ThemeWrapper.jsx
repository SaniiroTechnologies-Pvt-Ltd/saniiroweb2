"use client";

import React from "react";
import { DataProvider } from "@/components/context/Authcontext"; // Fixed the import path with '@'
import { Provider } from "react-redux";
import store from "@/redux/store";

import { ThemeProvider, createTheme } from "@mui/material/styles";

function ThemeWrapper({ children }) {
  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 314,
  //       smm: 530,
  //       md: 768,
  //       lg: 1024,
  //       xl: 1220,
  //       xll: 1440,
  //       xxl: 1600,
  //     },
  //   },
  // });

  const theme = createTheme({
    palette: {
      mode: "light", // Default mode, can be changed dynamically
      primary: {
        light: "hsl(220, 92%, 34%)",
        main: "hsl(220, 92%, 24%)", // Deep navy blue
        dark: "hsl(220, 92%, 14%)",
        contrastText: "#FFFFFF", // Ensures proper contrast for text
      },
      secondary: {
        light: "hsl(16, 88%, 65%)",
        main: "hsl(16, 88%, 55%)", // Bright orange accent
        dark: "hsl(16, 88%, 45%)",
        contrastText: "#FFFFFF", // Ensures proper contrast for text
      },
      tertiary: {
        light: "hsl(136, 53%, 53%)",
        main: "hsl(136, 53%, 43%)", // Vibrant green for highlights
        dark: "hsl(136, 53%, 33%)",
        contrastText: "#FFFFFF", // Ensures proper contrast for text
      },
      light: {
        main: "#FFFFFF", // White color for light theme elements
      },
      dark: {
        main: "#000000", // Black color for dark theme elements
      },
      background: {
        default: "hsl(220, 20%, 95%)", // Light neutral background
        paper: "#FFFFFF", // White for content sections
      },
      text: {
        primary: "#000000",
        secondary: "#444444",
        tertiary: "#AAAAAA",
      },
    },
    breakpoints: {
      values: {
        xs: 0,       // Extra small devices (phones)
        sm: 320,     // Small devices (small phones)
        smm: 375,    // Small devices (medium phones)
        sml: 425,    // Small devices (larger phones)
        md: 768,     // Medium devices (tablets)
        lg: 1024,    // Large devices (laptops)
        xl: 1280,    // Extra large devices (desktops)
        xxl: 1536,   // High-resolution desktops/QHD
        xxxl: 1920,  // 4K screens
      },
    },
    typography: {
      fontFamily: "Work Sans, sans-serif",
      h1: {
        fontSize: { xs: "2rem", smm: "2.5rem", md: "3rem", lg: "3.5rem", xl: "4rem" },
        fontWeight: 900,
        letterSpacing: "0.05em",
      },
      h2: {
        fontSize: { xs: "1.75rem", smm: "2.25rem", md: "2.75rem", lg: "3rem", xl: "3.5rem" },
        fontWeight: "bold",
        letterSpacing: 1,
      },
      h3: {
        fontSize: { xs: "1.5rem", smm: "2rem", md: "2.25rem", lg: "2.5rem", xl: "3rem" },
        fontWeight: 700,
        letterSpacing: "0.02em",
      },
      body1: {
        fontSize: { xs: "0.9rem", smm: "1rem", md: "1.1rem", lg: "1.25rem", xl: "1.5rem" },
        lineHeight: 1.6,
      },
      body2: {
        fontSize: { xs: "0.85rem", smm: "0.95rem", md: "1rem", lg: "1.15rem" },
        color: "#444444",
      },
      button: {
        fontSize: { xs: "0.85rem", smm: "1rem", md: "1.1rem", lg: "1.25rem" },
        fontWeight: "bold",
      },
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: false,
        },
        styleOverrides: {
          root: {
            width: '100%',
            maxWidth: {
              xs: '100%',
              sm: '100%',
              smm: '100%',
              sml: '100%',
              md: '100%',
              lg: '100%',
              xl: '100%',
              xxl: '100%',
              xxxl: '100%'
            },
            padding: {
              xs: '0 16px',
              sm: '0 24px',
              md: '0 32px',
              lg: '0 40px',
              xl: '0 48px'
            }
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "12px 20px",
            borderRadius: "8px",
          },
        },
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

export default ThemeWrapper;
