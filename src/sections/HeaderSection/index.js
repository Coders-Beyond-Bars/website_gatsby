import React from "react";
import { Typography, Fade, Container } from "@material-ui/core";

import CBBButton from "components/CBBButton";
import Section from "components/Section";

import bg from "assets/images/background/bg1.jpg";
import useStyles from "assets/jss/sections/header";

const HeaderSection = ({ onClickLearn, ...rest }) => {
  const classes = useStyles();

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
              href="/donate/"
            >
              Donate
            </CBBButton>
          </Fade>
        </div>
      </Container>
    </Section>
  );
};

export default HeaderSection;
