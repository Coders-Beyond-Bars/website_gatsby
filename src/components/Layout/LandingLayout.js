import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import "assets/sass/main.sass";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FDD146"
    },
    secondary: {
      main: "#6D6E71",
      light: "#D1D3D4"
    }
  },
  typography: {
    fontFamily: "'Open Sans', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontFamily: "'OCRAstd'"
    },
    h2: {
      fontFamily: "'OCRAstd'"
    },
    h3: {
      fontFamily: "'OCRAstd'"
    },
    h4: {
      fontFamily: "'OCRAstd'"
    },
    h5: {
      fontFamily: "'Hammersmith One'"
    },
    h6: {
      fontFamily: "'Hammersmith One'"
    },
    title: {
      fontFamily: "'OCRAstd'"
    }
  },
  shape: {
    borderRadius: 25
  }
});

const LandingLayout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </MuiThemeProvider>
    </>
  );
};

export default LandingLayout;
