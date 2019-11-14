import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { theme } from "assets/jss/cbb-material-ui";

import "assets/sass/main.sass";

const styles = theme => ({
  main: {
    marginTop: 60
  }
});

const LandingLayout = ({ children, classes }) => {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <main className={classes.main}>{children}</main>
        <Footer />
      </MuiThemeProvider>
    </>
  );
};

export default withStyles(styles)(LandingLayout);
