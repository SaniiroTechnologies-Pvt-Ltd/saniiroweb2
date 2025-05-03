"use client";

import React from "react";
import { DataProvider } from "@/components/context/Authcontext"; // Fixed the import path with '@'
import { Provider } from "react-redux";
import store from "@/redux/store";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";
import { CssBaseline, GlobalStyles } from "@mui/material";

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
      common: {
        black: '#000',
        white: '#fff',
      },
      primary: {
        light: "hsl(220, 92%, 34%)",
        main: "hsl(220, 92%, 24%)", // Deep navy blue
        dark: "hsl(220, 92%, 14%)",
        contrastText: common.white, // Ensures proper contrast for text
      },
      secondary: {
        light: "hsl(16, 88%, 65%)",
        main: "hsl(16, 88%, 55%)", // Bright orange accent
        dark: "hsl(16, 88%, 45%)",
        contrastText: common.white, // Ensures proper contrast for text
      },
      tertiary: {
        light: "hsl(136, 53%, 53%)",
        main: "hsl(136, 53%, 43%)", // Vibrant green for highlights
        dark: "hsl(136, 53%, 33%)",
        contrastText: common.white, // Ensures proper contrast for text
      },
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        default: "hsl(220, 20%, 95%)", // Light neutral background
        paper: common.white, // White for content sections
      },
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: "hsl(0, 0%, 0%)",
        // Secondary text (dark grey).
        secondary: "hsl(0, 0%, 26.7%)",
        // Third text (light grey).
        tertiary: "hsl(0, 0%, 66.7%)",
        // Disabled text have even lower visual prominence.
        disabled: "hsl(0, 0%, 0%, 0.3%)",
      },
      // The color used to divide different elements.
      divider: 'rgba(0, 0, 0, 0.12)',
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#f5f5f5',
        A200: '#eeeeee',
        A400: '#bdbdbd',
        A700: '#616161',
      }
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
      htmlFontSize: 16,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      fontWeightBolder: 900,
      fontFamily: "'prompt', sans-serif",
      h1: {
        fontWeight: 300,
        fontSize: "6rem",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
      },
      h2: {
        fontWeight: 300,
        fontSize: "3.75rem",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em",
      },
      h3: {
        fontWeight: 400,
        fontSize: "3rem",
        lineHeight: 1.167,
        letterSpacing: "0em",
      },
      h4: {
        fontWeight: 400,
        fontSize: "2.125rem",
        lineHeight: 1.235,
        letterSpacing: "0.00735em",
      },
      h5: {
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: 1.334,
        letterSpacing: "0em",
      },
      h6: {
        fontWeight: 500,
        fontSize: "1.25rem",
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.75,
        letterSpacing: "0.00938em",
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1.57,
        letterSpacing: "0.00714em",
      },
      body1: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
      },
      body2: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.43,
        letterSpacing: "0.01071em",
      },
      // h1: {
      //   fontSize: { xs: "2rem", smm: "2.5rem", md: "3rem", lg: "3.5rem", xl: "4rem" },
      //   fontWeight: 900,
      //   letterSpacing: "0.05em",
      // },
      // h2: {
      //   fontSize: { xs: "1.75rem", smm: "2.25rem", md: "2.75rem", lg: "3rem", xl: "3.5rem" },
      //   fontWeight: "bold",
      //   letterSpacing: 1,
      // },
      // h3: {
      //   fontSize: { xs: "1.5rem", smm: "2rem", md: "2.25rem", lg: "2.5rem", xl: "3rem" },
      //   fontWeight: 700,
      //   letterSpacing: "0.02em",
      // },
      // body1: {
      //   fontSize: { xs: "0.9rem", smm: "1rem", md: "1.1rem", lg: "1.25rem", xl: "1.5rem" },
      //   lineHeight: 1.6,
      // },
      // body2: {
      //   fontSize: { xs: "0.85rem", smm: "0.95rem", md: "1rem", lg: "1.15rem" },
      //   color: "#444444",
      // },
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
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
    },
  });

  // Global styles to apply the font to all components
  const globalStyles = (
    <GlobalStyles
      styles={{
        '*': {
          fontFamily: "'Prompt', sans-serif", // Apply globally to all elements
        },
      }}
    />
  );


  return (
    <ThemeProvider theme={theme}>
      {globalStyles}  {/* Apply global styles */}
      <CssBaseline /> {/* Normalize styles */}
      <DataProvider>
        <Provider store={store}>
          {children}
        </Provider>
      </DataProvider>
    </ThemeProvider>
  );
}

export default ThemeWrapper;
