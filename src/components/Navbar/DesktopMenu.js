import React, { Component } from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";

import CBBButton from "components/CBBButton";

import styles from "assets/jss/components/desktopmenuStyles";

class DesktopMenu extends Component {
  render() {
    const { classes } = this.props;

    return (<>
              <Button
                color="secondary"
                className={classes.menuLink}
                component={Link}
                to="/about/"
              >
                About Us
              </Button>
              <Button
                color="secondary"
                className={classes.menuLink}
                component={Link}
                to="/program/"
              >
                Programs
              </Button>
              <Button
                color="secondary"
                className={classes.menuLink}
                component={Link}
                to="/getInvolved/"
              >
                Get Involved
              </Button>
              <Button
                color="secondary"
                className={classes.menuLink}
                component={Link}
                to="/contact/"
              >
                Contact Us
              </Button>
              <CBBButton
                style={{
                  marginLeft: 10
                }}
                component={Link}
                to="/donate/"
              >
                Donate
              </CBBButton>
            </>
    );
  }
}

export default withStyles(styles)(DesktopMenu);
