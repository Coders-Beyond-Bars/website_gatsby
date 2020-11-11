import React from "react";
import { Typography, Fade, Container, Grid } from "@material-ui/core";

import Section from "components/Section";

import useStyles from "assets/jss/components/headerStyles";

const Header = ({ title, subtitle, image, ...rest }) => {
  const classes = useStyles();

  return (
    <Section image={image} {...rest}>
      <Container maxWidth="lg">
        <Fade in timeout={2000}>
          <Grid container spacing={0}>
            <Grid item xs={8}>
              <Typography color="inherit" variant="h4" gutterBottom>
                {title}
              </Typography>
              {subtitle && <Typography variant="h6">{subtitle}</Typography>}
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </Section>
  );
};

export default Header;
