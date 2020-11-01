import React from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import { MuiThemeProvider } from "@material-ui/core/styles"

import Navbar from "components/Navbar"
import Footer from "components/Footer"
import SEO from "components/SEO"

import { theme } from "assets/jss/cbb-material-ui"


const Layout = ({ children, title, lang, description, meta }) => (
  <>
    <SEO 
      title={title}
      lang={lang}
      description={description}
      meta={meta}
    />
    <CssBaseline />
    <MuiThemeProvider theme={theme}>      
      <Navbar />
        <main>{children}</main>
      <Footer />
    </MuiThemeProvider>
  </>
)

Layout.defaultProps = {
  title: ``,
  lang: `en`,
  meta: [],
  description: ``
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object)
}

export default Layout
