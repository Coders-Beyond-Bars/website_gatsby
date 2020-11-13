import React from "react";
import { Link } from "gatsby";
import { Typography, Grid } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";

import Section from "components/Section";

import useStyles from "assets/jss/sections/team";

import richard from "assets/images/team/richardkim.jpg";
import lewis from "assets/images/team/lewvalenti.jpg";
import koby from "assets/images/team/kobyrotstein.jpg";
import marrk from "assets/images/team/marrkharris.jpg";

const TeamSection = () => {
  const classes = useStyles();

  return (
    <Section title="Meat Our Team">
      <Grid container spacing={1}>
        <Grid item md={3} sm={6} xs={12}>
          <img src={richard} alt="Richard Kim" className={classes.profilePic} />
          <Typography variant="h5" align="center" color="secondary">
            Richard Kim
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="secondary"
            gutterBottom
          >
            (Founder)
          </Typography>
          <Typography variant="body1" align="center" color="secondary">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/richardskim111/"
            >
              <LinkedInIcon fontSize="large" color="secondary" />
            </Link>
          </Typography>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img src={lewis} alt="Lew Valenti" className={classes.profilePic} />
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            color="secondary"
          >
            Lew Valenti
          </Typography>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img src={koby} alt="Koby Rotstein" className={classes.profilePic} />
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            color="secondary"
          >
            Koby Rotstein
          </Typography>
          <Typography variant="body1" align="center" color="secondary">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/koby-a-rotstein-19a4131/"
            >
              <LinkedInIcon fontSize="large" color="secondary" />
            </Link>
          </Typography>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <img src={marrk} alt="Marrk Harris" className={classes.profilePic} />
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            color="secondary"
          >
            Marrk Harris
          </Typography>
          <Typography variant="body1" align="center" color="secondary">
            <Link target="_blank" to="https://www.hindsightvisualmedia.com/">
              <LanguageIcon fontSize="large" color="secondary" />
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default TeamSection;
