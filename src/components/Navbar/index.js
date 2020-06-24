import React from "react";
import { Link as RouterLink } from "gatsby";

import { withStyles } from "@material-ui/core/styles";
import { AppBar, Container, Toolbar, Link, Hidden, Typography } from "@material-ui/core";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import styles from 'assets/jss/components/navbarStyles'

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="primary"
        id="navbar"
      >
      <Container maxWidth="lg">
        <Toolbar>
          <div className={classes.grow}>
            <div className={classes.leftContainer}>
              <Link to="/" component={RouterLink} className={classes.logoLink}>
                <Typography variant="h4" color="inherit" className={classes.logo}>
                  reboot
                </Typography>
              </Link>
              <Typography variant="subtitle1" color="inherit" className={classes.subtitle}>
                to technology
              </Typography>
            </div>
          </div>
          <Hidden smDown>
            <DesktopMenu />
          </Hidden>
          <Hidden mdUp>
            <MobileMenu />
          </Hidden>
        </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
