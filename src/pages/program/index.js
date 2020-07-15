import React from "react";
import { Typography, Fade, Container, Grid } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";

import DonateSection from "sections/DonateSection";
import HostSiteSection from "sections/HostSiteSection";
import bg from "assets/images/background/bg4.jpg";
import software from "assets/images/background/bg4.jpg";
import advMfg from "assets/images/background/bg20.jpg";

import useStyles from "assets/jss/pages/program";

const Program = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Section image={bg} shaded halfScreen vcenter>
        <Container maxWidth="lg">
          <Fade in={true} timeout={2000}>
            <Typography variant="h4">Programs</Typography>
          </Fade>
        </Container>
      </Section>
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h5" gutterBottom>
            Software Development
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <img
                src={software}
                alt="Software Development"
                className={classes.imageRounded}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1">It is estimated that there are approximately 11,000
                software engineering jobs in Massachusetts that are going unfilled due to
                shortage of talent in software development.  In light of this shortage,
                many firms that we connected with in Massachusetts seeking
                software engineers have indicated interest in hiring
                returning citizens with the right skills.
              </Typography>
              <br />
              <Typography variant="body1">In collaboration with {" "}
                <a href="https://www.quickbase.com/">Quickbase</a>, we are introducing
                  our students to Quickbase's low-code platforms, which enables
                  developers with limited training in coding to build complex
                  enterprise level softwares including customer-relationship management
                  software (CRM), project management tools, human resource software, etc.
                  Upon compelition of training, Quickbase and Reboot will introduce
                  the students to companies in Massachusetts that already relies on
                  Quickbase's platform.
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h5" gutterBottom>
            Advanced Manufacturing
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <img
                src={advMfg}
                alt="Advanced Manufacturing"
                className={classes.imageRounded}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="body1">According to a report issued by The New England Council
                and Deloitte,
                "Advanced to Advantageous: The Case for New England’s Manufacturing Revolution,"
                advanced manufacturing in Massachusetts and New England at large is facing steep
                shortages in workers as existing pool of workers in traditional manufacturing
                industries retire and mismatch in educational institutions and the industry persists.
              </Typography>
              <br />
              <Typography variant="body1">In partnership with {" "}
                <a href="https://www.namcnetwork.com/">The Northeast Advanced Manufacturing Consortium (NAMC)</a>,

                we introduces our students to skills in advanced manufacturing including 3D printing, CNC milling,
                and other foundational skills prepare them in their career path in advanced manufacturing.
                Upon sucessful completion of our program, students should be well prepared to
                attain Level 1 of Applied Manufacturing Technology Certification Pathway and
                be ready to join appreticeship programs at local manufacturers in Massachusetts
                 affiliated with NAMC.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <HostSiteSection />
      <DonateSection />
    </Layout>
  );
};

export default Program;
