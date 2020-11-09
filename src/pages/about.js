import React from "react"
import { Link } from "gatsby"
import { Typography, Container, Grid } from "@material-ui/core"

import Layout from "components/Layout"
import Header from "components/Header"

import Section from "components/Section"
import CBBButton from "components/CBBButton"
import MissionSection from "sections/MissionSection"
import AboutUsSection from "sections/AboutUsSection"

import useStyles from "assets/jss/pages/about"

import bg from "assets/images/background/bg5.jpg"
import techjob1 from "assets/images/stock/stock1-800x800.jpg"
import advmanuf from "assets/images/stock/adv_manuf.jpg"
import code from "assets/images/stock/code2.jpg"
import contactUsImg from "assets/images/parallax/parallax8-6720x2800.jpg"

const AboutUs = () => {
  const classes = useStyles();

  return (
      <Layout title="About Us">
        <Header 
          image={bg} 
          title="About Us" 
          subtitle="We are ..."
          shaded 
          halfScreen 
          hcenter 
          vcenter 
        />
        <MissionSection id="mission" shaded />
        <Section>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              <img src={techjob1} alt="Tech Skill" className={classes.fullWidth} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.verticalCenter}>
              <Container maxWidth="md">
                <Typography variant="h4" gutterBottom color="secondary">
                  The Challenge
                </Typography>
                <Typography variant="body1">
                  Studies show that having a gainful employment with stable income is the greatest
                  contributing factor in prevent a returning citizens from going back to correctional facilities.
                  As a result, many re-entry programs in correctional facilities aims 

                
                </Typography>
                <Typography variant="body1">
                Proin cursus risus non enim vulputate, vel blandit justo lobortis. Sed mollis massa in lectus volutpat laoreet. Praesent id tempus nisi. Suspendisse eu purus finibus, porta ipsum eget, bibendum magna. Aliquam enim nisi, ultrices ac sollicitudin aliquet, luctus quis purus. Vestibulum vehicula magna diam, nec ornare nunc ultricies in. Morbi lobortis tristique nisi sit amet euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ac viverra augue. Nunc vel luctus arcu. Aenean sagittis lectus ante, quis ullamcorper turpis mattis sagittis. Nunc eu egestas metus. Nullam justo nisl, porta sed interdum a, tempor sed nisl. Ut ornare dictum feugiat.
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.verticalCenter} >
              <Container maxWidth="md">
                <Typography variant="h4" gutterBottom color="secondary">
                  Our Solution
                </Typography>
                <Typography variant="body1" gutterBottom>
                Immersive coding boot camps give students opportunity to learn by doing in a collaborative environment. Many hours are spent coding, applying the principles taught in the lectures. Working together on teams to solve complex code challenges simulates the real-world work experience.  Jobs are available — some coding boot camps have demonstrated placement rates comparable to top four-year colleges.

                Code Platoon was created to connect members of the veteran community with job opportunities using a similar model, while facilitating the transition into civilian life.  Code Platoon teaches veterans and military spouses marketable skills that leverage core competencies, transforming them into software developers through an immersive, hands­-on, educational process and paid internship program.
                </Typography>
                <ul>
                  <li><Typography variant="body1">Computer Programming</Typography></li>
                  <li><Typography variant="body1">System Administration</Typography></li>
                  <li><Typography variant="body1">Computer Aided Design (CAD)</Typography></li>
                  <li><Typography variant="body1">Computer Numerical Control (CNC) Machines</Typography></li>
                </ul>
              </Container>
            </Grid>
            <Grid item sm={6}>
              <img src={advmanuf} alt="Coding" className={classes.fullWidth} />
            </Grid>
          </Grid>
        </Section>
        <Section title="Our Story" shaded>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid
                item
                md={3}
                sm={5}
                xs={12}
                className={classes.horizontalCenter}
              >
                <img src={code} alt="Coding" />
              </Grid>
              <Grid
                item
                md={9}
                sm={7}
                xs={12}
                className={classes.verticalCenter}
              >
                <Typography variant="body1" gutterBottom>
                  Coding has become a powerful, distinguishing skill in the 21st
                  Century job market. Those who possess the ability to read and
                  write code enjoy the opportunities to participate in the new
                  economy as producers of digital products and services.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  However, resources to acquire coding skills are far from
                  broadly accessible across all communities. Many incarcerated
                  individuals are locked out, literally and figuratively, from
                  educational resources to acquire coding skills. Their families
                  and communities, in many cases, do not have the knowledge to
                  properly utilize affordable educational resources. If
                  educational opportunities in coding is not broadly accessible
                  to more communities, including the incarcerated, then coding
                  has the potential of becoming a polarizing force in income and
                  wealth inequality.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  In light of this background, we place ourselves at the
                  intersection of education, technology and criminal justice in
                  order to open up access to communities that have historically
                  been marginalized in these contexts. While we do not advocate
                  that everyone MUST code and pursue careers in the technology
                  domain, we certainly believe everyone should have the
                  opportunity to do so.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <AboutUsSection id="What We Do" />
        <Section
          title="Frequently Asked Questions"
        >
          
          <Typography variant="h6">
            Not finding answers to your questions?  Please drop us a line 
            {" "}<Link to="/contact/">here</Link>.
          </Typography>
        </Section>
      </Layout>
  );
};

export default AboutUs;
