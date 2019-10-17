import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { Typography, Fade, Container, Grid } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";
import useStyles from "assets/jss/pages/program";

import bg from "assets/images/background/bg4.jpg";
import evaluation from "assets/images/program/evaluation.jpg";
import preboarding from "assets/images/program/preboarding.jpg";
import bootcamp from "assets/images/program/bootcamp.jpg";
import placement from "assets/images/program/placement.jpg";
import timeline from "assets/images/program/timeline.png";
import bprc from "assets/images/hostsites/bprc.png";
import southbay from "assets/images/hostsites/southbay.png";
import youth_center from "assets/images/hostsites/youth_center.png";

const Program = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Coders Beyond Bars - Program</title>
      </Helmet>
      <Layout>
        <Section image={bg} shaded halfScreen vcenter>
          <Container maxWidth="lg">
            <Fade in={true} timeout={2000}>
              <Typography variant="h4">Our Program</Typography>
            </Fade>
          </Container>
        </Section>
        <Section
          title="Program Outline"
          subtitle="Returning citizens have diverse educational backgrounds. Some returning citizens have college degrees while others never had formal education beyond elementary school before being incarcerated. Our 12 months program was designed to support unique background and circumstances of each individual returning citizens."
        >
          <Grid container spacing={1}>
            <Grid item sm={2}>
              Evaluation / Interviews
              <img src={evaluation} alt="Evaluation" />
            </Grid>
            <Grid item sm={3}>
              Pre-boarding Training
              <img src={preboarding} alt="Pre-boarding Training" />
            </Grid>
            <Grid item sm={5}>
              Training Bootcamp
              <img src={bootcamp} alt="Training Bootcamp" />
            </Grid>
            <Grid item sm={2}>
              Job Placement
              <img src={placement} alt="Job Placement" />
            </Grid>
          </Grid>
          <Container maxWidth="lg">
            <img src={timeline} alt="Program Timeline" />
            <Typography variant="body1" gutterBottom>
              <strong>Evaluation / Interviews</strong> Our program starts with
              rigorous evaluation process including interviews and
              pre-evaluation exam. This process will
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Pre-boarding Training</strong> Whether our candidates are
              behind the wall or are back in society, they undergo four months
              of Candidates can anticipate approximate{" "}
              <strong>6 hours/week</strong> of commitent. Candidates who
              demonstrate strong commitment to ...
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Training Bootcamp</strong> For six months, CBB candidate
              undergo intense and focussed instruction on more advanced concepts
              in coding where he/she can anticipate at least{" "}
              <strong>20 hours/week</strong> of instruction. In this rigorous
              setting,
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Placement</strong>
            </Typography>
          </Container>
        </Section>
        <Section title="Tech Stack">
          <Container maxWidth="lg">
            <Typography variant="h1">adfd</Typography>
          </Container>
        </Section>
        <Section title="Host Sites" shaded>
          <Grid container spacing={4}>
            <Grid item md={4}>
              <img
                src={bprc}
                alt="Boston Pre-release Center"
                className={classes.hostSitePic}
              />
              <Typography variant="h6" align="center">
                Boston Pre-release Center
              </Typography>
              <Typography variant="body1" align="center">
                430 Canterbury Street <br />
                Roslindale, MA 02131
              </Typography>
            </Grid>
            <Grid item md={4}>
              <img
                src={southbay}
                alt="South Bay House of Correction"
                className={classes.hostSitePic}
              />
              <Typography variant="h6" align="center">
                South Bay House of Correction
              </Typography>
              <Typography variant="body1" align="center">
                20 Bradston Street
                <br />
                Boston, MA 02118
              </Typography>
            </Grid>
            <Grid item md={4}>
              <img
                src={youth_center}
                alt="Judge John J. Connelly Youth Center"
                className={classes.hostSitePic}
              />
              <Typography variant="h6" align="center">
                Judge John J. Connelly Youth Center
              </Typography>
              <Typography variant="body1" align="center">
                450 Canterbury Street
                <br />
                Roslindale, MA 02131
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                We are expanding our relationship with correctional facilities
                in Massachusetts and broader New England region. If you are a
                staff or an educator inside a correctional facility, and you
                wish to bring one of our programs to your location, please{" "}
                <Link to="/contact/" className={classes.textWhite}>
                  contact us
                </Link>{" "}
                and we can discuss how we can collaborate to make this a
                reality.
              </Typography>
            </Grid>
          </Grid>
        </Section>
      </Layout>
    </>
  );
};

export default Program;
