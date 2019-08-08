import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import { Button } from "@material-ui/core";
import Context from "context";

import CBBButton from "components/CBBButton";

const styles = theme => ({
  menuLink: {
    textTransform: "capitalize",
    fontFamily: theme.typography.title.fontFamily,
    "&:hover": {
      color: theme.palette.common.white
    }
  }
});

class DesktopMenu extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Context.Consumer>
        {({ section, setSection }) => (
          <>
            <Button
              color="secondary"
              className={classes.menuLink}
              onClick={() => setSection("header")}
            >
              Home
            </Button>
            <Button
              color="secondary"
              className={classes.menuLink}
              onClick={() => setSection("mission")}
            >
              Mission
            </Button>
            <Button
              color="secondary"
              className={classes.menuLink}
              onClick={() => setSection("activities")}
            >
              Activities
            </Button>
            <Button
              color="secondary"
              className={classes.menuLink}
              onClick={() => setSection("team")}
            >
              Team
            </Button>
            <Button
              color="secondary"
              className={classes.menuLink}
              onClick={() => setSection("getInvolved")}
            >
              Get Involved
            </Button>
            <Button
              color="secondary"
              className={classes.menuLink}
              onClick={() => setSection("partners")}
            >
              Parters
            </Button>
            <Button
              color="secondary"
              className={classes.menuLink}
              onClick={() => setSection("contact")}
            >
              Contact Us
            </Button>
            <CBBButton
              color="secondary"
              style={{
                marginLeft: 10
              }}
            >
              Donate
            </CBBButton>
          </>
        )}
      </Context.Consumer>
    );
  }
}

export default withStyles(styles)(DesktopMenu);
