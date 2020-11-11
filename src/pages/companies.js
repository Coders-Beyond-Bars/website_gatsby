import React from "react";
import { Link } from "gatsby";
import { Typography, Fade, Container, Grid, Hidden } from "@material-ui/core";

import Layout from "components/Layout";
import Header from "components/Header";
import Section from "components/Section";
import CBBButton from "components/CBBButton";

import useStyles from "assets/jss/pages/companies";

import bg from "assets/images/background/bg11.jpg";
import massachusettsMap from "assets/images/massachusetts.png";
import stockImage1 from "assets/images/stock/stock19-800x800.jpg";
import stockImage2 from "assets/images/stock/stock9-800x800.jpg";
import stockImage3 from "assets/images/stock/stock10-800x800.jpg";
import stockImage4 from "assets/images/stock/stock16-800x800.jpg";
import parallaxImg from "assets/images/parallax/parallax8-6720x2800.jpg";

const Companies = () => {
  const classes = useStyles();
  return (
    <Layout title="For Companies">
      <Header
        image={bg}
        title="Why partner with us"
        subtitle="Let us introduce you to one of the largest untapped labor force."
        shaded
        halfScreen
        hcenter
        vcenter
      />
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={stockImage1}
              alt="Partnerships"
              className={classes.fullWidth}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.verticalCenter}>
            <Typography variant="h4" color="primary" gutterBottom>
              Who are the returning citizens?
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              color="secondary"
              align="justify"
            >
              Commonly referred to as "ex-offenders" or "incarcerated
              individuals," the returning citizens are individuals who are
              either currently serving or have experienced time behind bars. It
              is estimated that there are approximately two million Americans
              (or 1 in 100 adults) who are currently serving time behind bars in
              federal, state, and county correctional facilities. Including
              those who are currently under parole and probation, we estimate
              that there is an estimated total of 7 million Americans who can be
              considered returning citizens.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Section title="By the numbers in Massachusetts" hcenter vcenter>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={massachusettsMap}
              alt="Massachusetts"
              className={classes.fullWidth}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Typography
                  variant="h2"
                  align="center"
                  color="primary"
                  gutterBottom
                >
                  35
                </Typography>
                <Typography variant="h6" gutterBottom color="secondary">
                  is the average age of returning citizens at the time of their
                  release
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h2"
                  align="center"
                  color="primary"
                  gutterBottom
                >
                  19%
                </Typography>
                <Typography variant="h6" gutterBottom color="secondary">
                  of returning citizens below age of 29 in Massachusetts
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h2"
                  align="center"
                  color="primary"
                  gutterBottom
                >
                  57.8%
                </Typography>
                <Typography variant="h6" gutterBottom color="secondary">
                  of returning citizens are persons of color
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h2"
                  align="center"
                  color="primary"
                  gutterBottom
                >
                  2,800
                </Typography>
                <Typography variant="h6" gutterBottom color="secondary">
                  returning citizens are released from each year in
                  Massachusetts
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Typography variant="body1">
          Source:{" "}
          <a
            href="https://www.mass.gov/lists/prison-population-trends"
            className={classes.link}
          >
            Massachusetts Department of Corrections - Prison Population Trends
            2019
          </a>
        </Typography>
      </Section>
      <Section shaded>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <img src={stockImage2} alt="Working returning citizen" />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.verticalCenter}>
            <Typography variant="h4" gutterBottom>
              Find underappreciated and overlooked employees
            </Typography>
            <Typography variant="h6" gutterBottom align="justify">
              CORI: Criminal Offender Record Information - colloquially known as
              the "background check" serves as one of the significant barriers
              to returning citizens attaining jobs, homes, and financial
              services. Due to typical aversion against working with individuals
              with a felony background, most returning citizens face significant
              barriers to joining the workforce. Despite the barrier, many
              returning citizens yearn for a chance for employers to give their
              candidacy a fair look.
            </Typography>
            <Typography variant="h6" gutterBottom align="justify">
              When you work with a returning citizen, you are working with an
              individual who truly appreciates the job and an opportunity that's
              given to him or her.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6} className={classes.verticalCenter}>
            <Typography variant="h4" gutterBottom color="primary">
              Secure funding for training
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              color="secondary"
              align="justify"
            >
              In collaboration with Northeast Advanced Manufacturing Consortium
              (NAMC), we help your firm implement Registered Apprenticeship
              Training Program. Under the Registered Apprenticeship Training
              Program, your firm is entitled to Massachusetts State tax credit
              of up to $4,800 per apprentice. Depending on the nature of the
              work, we will also help you identify additional financial
              resources to subsidize your training requirements for the newly
              hired apprentice.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={stockImage4} alt="Working returning citizen" />
          </Grid>
        </Grid>
      </Section>
      <Section shaded>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <img src={stockImage3} alt="" className={classes.fullWidth} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.verticalCenter}>
            <Typography variant="h4" gutterBottom>
              Mitigate your concerns
            </Typography>
            <Typography variant="h6" gutterBottom align="justify">
              Despite the individual's qualifications, you may be reticent to
              work with someone who may be justifiably perceived as "high-risk."
              To address your concern, we work with the Massachusetts Executive
              Office of Labor and Workforce Development to help you secure
              Fidelity Bonds that will provide insurance coverage up to $25,000
              (with $0 deductable) for the first six months of employment at no
              cost to the employee or the employer.
            </Typography>
          </Grid>
        </Grid>
      </Section>
      <Section
        title="Hire a returning citizen"
        subtitle="Ready to get started? Reach out to us to learn how we can help you."
        image={parallaxImg}
        shaded
        hcenter
        vcenter
      >
        <CBBButton component={Link} to="/contact/" color="primary" size="large">
          Connect with Us
        </CBBButton>
      </Section>
    </Layout>
  );
};

export default Companies;
