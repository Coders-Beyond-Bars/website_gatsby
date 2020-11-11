import React from "react";
import { Link } from "gatsby";
import { Typography, Grid } from "@material-ui/core";

import Section from "components/Section";

import historyImg1 from "assets/images/history1-400x400.jpg";
import historyImg2 from "assets/images/history2-400x400.jpg";
import historyImg3 from "assets/images/history3-400x400.jpg";
import historyImg4 from "assets/images/history4-400x400.jpg";

import useStyles from "assets/jss/sections/history";

const HistorySection = () => {
  const classes = useStyles();

  return (
    <Section title="Our Story" shaded>
      <Typography variant="h6" gutterBottom>
        Our story begins with a meeting between Richard Kim and Anjali Moorthy,
        graduate students from MIT and Harvard, respectively, who shared a
        mutual passion for digital empowerment and education of returning
        citizens. Building on their shared interest, Richard and Anjali launched
        the Coders Beyond Bars program under the auspices of{" "}
        <Link className={classes.link} to="https://www.teji.mit.edu/">
          The Educational Justice Institute
        </Link>{" "}
        at MIT while they were still students. In September 2018, Coders Beyond
        Bars was approved by the Boston Pre-release Center in Roslindale, MA to
        begin providing introductory computer programming courses through the
        facility's School of Re-entry. In May 2019, Coders Beyond Bars, Inc. was
        established as an independent organization earning its 501(c)(3)
        not-for-profit status in the state of Massachusetts.
      </Typography>
      <Typography variant="h6" gutterBottom>
        In two years since its inception, our organization has provided several
        courses in computer programming to returning citizens in Boston
        Pre-release Center and Judge John J. Connelly Youth Center. In addition,
        we have offered independent tutoring courses to returning citizens who
        are under parole or probation.
      </Typography>
      <Typography variant="h6" gutterBottom>
        While coding continues to be a highly in-demand skill in today's
        economy, we recognized that a singular focus on coding and software
        engineering limits our ability to serve a broader range of individuals
        with different aptitudes and talents. As a result, in October 2020, our
        organization undertook steps to rebrand the organization under a new
        name, "Reboot to Tech" (Reboot).
      </Typography>
      <Typography variant="h6" gutterBottom>
        Under the new name, our organization will broaden our reach by expanding
        educational programming to include a broader range of technical skills
        in demand by the current state of the labor market. We will also seek
        partnerships with companies in advanced manufacturing and other sectors
        wherever there is a demand for a technologically-capable employee.
        Regardless of our name change, we are committed to serving returning
        citizens in their pursuit of education and successful career.
      </Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item md={3} xs={6}>
          <img src={historyImg1} alt="History Pic. 1" />
        </Grid>
        <Grid item md={3} xs={6}>
          <img src={historyImg4} alt="History Pic. 1" />
        </Grid>
        <Grid item md={3} xs={6}>
          <img src={historyImg3} alt="History Pic. 1" />
        </Grid>
        <Grid item md={3} xs={6}>
          <img src={historyImg2} alt="History Pic. 1" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default HistorySection;
