import React, { Component } from "react";
import { Link } from "gatsby";
import { withStyles } from "@material-ui/core/styles";

import {
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = theme => {
  return {
    iconButton: {
      marginRight: 10
    },
    list: {
      width: 250,
      paddingTop: 25
    },
    listItemText: {
      primaryTypographyProps: {
        fontFamily: theme.typography.title.fontFamily
      }
    },
    drawer: {
      backgroundColor: "gray"
    },
    listItemText: {
      color: theme.palette.secondary.main,
      fontFamily: "Hammersmith One"
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    subHeader: {
      marginBottom: 0
    },
    subMenu: {
      paddingTop: 0,
      paddingBottom: 0
    }
  };
};

class MobileMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ open: !this.state.open });
  };

  handleClick = section => () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;

    const primaryTypographyProps = {
      className: classes.listItemText
    };

    return (
      <>
        <IconButton
          color="secondary"
          onClick={this.toggleDrawer}
          className={classes.iconButton}
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
        >
          <List className={classes.list}>
            <ListItem button component={Link} to="/">
              <ListItemText
                primary="Home"
                key="home"
                primaryTypographyProps={primaryTypographyProps}
              />
            </ListItem>
            <ListItem button component={Link} to="/about/">
              <ListItemText
                primary="About Us"
                key="about"
                primaryTypographyProps={primaryTypographyProps}
              />
            </ListItem>
            <ListItem button component={Link} to="/blog/">
              <ListItemText
                primary="Blog"
                key="blog"
                primaryTypographyProps={primaryTypographyProps}
              />
            </ListItem>
            <ListItem button component={Link} to="/news/">
              <ListItemText
                primary="News"
                key="news"
                primaryTypographyProps={primaryTypographyProps}
              />
            </ListItem>
            <ListItem button component={Link} to="/getInvolved/">
              <ListItemText
                primary="Get Involved"
                key="getInvoved"
                primaryTypographyProps={primaryTypographyProps}
              />
            </ListItem>
            <ListItem button component={Link} to="/contact/">
              <ListItemText
                primary="Contact Us"
                key="contact"
                primaryTypographyProps={primaryTypographyProps}
              />
            </ListItem>
            <ListItem button component={Link} to="/donate/">
              <ListItemText
                primary="Donate"
                key="donate"
                primaryTypographyProps={primaryTypographyProps}
              />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </>
    );
  }
}

export default withStyles(styles)(MobileMenu);