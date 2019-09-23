import React, { Component } from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";

import { Button, Menu, MenuItem } from "@material-ui/core";
import Context from "context";

import CBBButton from "components/CBBButton";

const styles = theme => ({
  menuLink: {
    textTransform: "capitalize",
    fontFamily: theme.typography.title.fontFamily,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  dropDownMenu: {
    borderRadius: 5
  }
});

class DesktopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuAnchor: null
    };
  }

  handleClick = event => {
    this.setState({ menuAnchor: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ menuAnchor: null });
  };

  render() {
    const { classes } = this.props;

    return (
      <Context.Consumer>
        {({ section, setSection }) => (
          <>
            <Button
              color="secondary"
              className={classes.menuLink}
              component={Link}
              to="/"
            >
              Home
            </Button>
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
              to="/blog/"
            >
              Blog
            </Button>
            <Button
              color="secondary"
              className={classes.menuLink}
              component={Link}
              to="/news/"
            >
              News
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
              color="secondary"
              style={{
                marginLeft: 10
              }}
              component={Link}
              to="/donate/"
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
