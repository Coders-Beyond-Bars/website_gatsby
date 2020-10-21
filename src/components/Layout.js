import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider } from "@material-ui/core/styles"

import Navbar from "components/Navbar"
import Footer from "components/Footer"

import { theme } from "assets/jss/cbb-material-ui"


const Layout = ({ children }) => (
  <>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>      
      <Navbar />
        <main>{children}</main>
      <Footer />
    </MuiThemeProvider>
  </>
)

export default Layout
