import React from "react";
import { Typography, Fade, Container, Grid } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

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
        <Fade in timeout={2000}>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <div className={classes.logoContainer}>
                <div className={classes.logoTop}>
                  <PowerSettingsNewIcon
                    color="primary"
                    style={{ fontSize: 70 }}
                  />
                  <Typography
                    variant="h1"
                    color="primary"
                    className={classes.logo}
                  >
                    reboot
                  </Typography>
                </div>
                <Typography variant="h4" className={classes.subtitle}>
                  to tech
                </Typography>
              </div>
              <Typography variant="h5" color="inherit" gutterBottom>
                Empowering returning citizens to be valuable contributing
                members of our society again
              </Typography>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Section>
  );
};

export default HeaderSection;
