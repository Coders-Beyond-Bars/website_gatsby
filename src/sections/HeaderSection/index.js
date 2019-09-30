import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import { Typography, Fade, Container } from "@material-ui/core";

import CBBButton from "components/CBBButton";
import Section from "components/Section";

import bg from "assets/images/background/bg1.jpg";

import Context from "context";

const styles = theme => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    header: {
      [theme.breakpoints.only("xs")]: {
        paddingTop: 100
      }
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.only("xs")]: {
        flexDirection: "column"
      }
    }
  };
};

class HeaderSection extends Component {
  render() {
    const { classes, onClickLearn, ...rest } = this.props;
    return (
      <Section
        image={bg}
        {...rest}
        shaded
        fullScreen
        vcenter
        classNames={classes.header}
      >
        <Container maxWidth="lg" className={classes.container}>
          <Fade in={true} timeout={2000}>
            <Typography variant="h4" color="inherit" gutterBottom>
              Supporting returning citizens to become producers of digital
              technology and helping them attain meaningful careers in the tech
              sector
            </Typography>
          </Fade>
          <Context.Consumer>
            {({ setSection }) => (
              <div className={classes.buttons}>
                <Fade in={true} timeout={3000}>
                  <CBBButton
                    size="large"
                    style={{ width: 200, margin: "25px 5px 25px 5px" }}
                    onClick={onClickLearn}
                  >
                    Learn More
                  </CBBButton>
                </Fade>
                <Fade in={true} timeout={3000}>
                  <CBBButton
                    size="large"
                    style={{ width: 200, margin: "25px 5px 25px 5px" }}
                    href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KYN3BL7XRMA64&source=url"
                  >
                    Donate
                  </CBBButton>
                </Fade>
              </div>
            )}
          </Context.Consumer>
        </Container>
      </Section>
    );
  }
}

export default withStyles(styles)(HeaderSection);
