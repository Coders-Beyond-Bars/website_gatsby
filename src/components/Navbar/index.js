import React, { Component } from "react"
import classNames from 'classnames'
import { Link } from "gatsby"

import { withStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Hidden, Typography } from "@material-ui/core"

import Logo from 'components/Logo'

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import styles from 'assets/jss/components/navbarStyles'


class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = { top: 0 }
    this.detectScroll = this.detectScroll.bind(this)
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.detectScroll)
  }

  detectScroll() {
    this.setState({
      top: window.pageYOffset
    })
  }

  render() {
    const { top } = this.state
    const { classes } = this.props

    const appBarClass = classNames(
      classes.appBar,
      {
        [classes.transparent]: top < 60
      }
    )

    const logoColor = top < 60 ? "primary" : "inherit"

    return (
      <AppBar
        position="fixed"
        className={appBarClass}
        color="primary"
        id="navbar"
      >
        <Toolbar>
          <Link to="/" className={classNames(classes.logo, classes.link)} >
            <Logo 
              logoColor={logoColor}
              subColor="inherit"
              size={2}
            />
          </Link>
          <Hidden smDown>
            <DesktopMenu />
          </Hidden>
          <Hidden mdUp>
            <MobileMenu />
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Navbar);
