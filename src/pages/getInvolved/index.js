import React from "react";
import { Link } from "gatsby";
import { Typography, Fade, Container, Grid, Hidden } from "@material-ui/core";

import Layout from "components/Layout";
import Section from "components/Section";
import CBBButton from "components/CBBButton";

import useStyles from "assets/jss/pages/getInvolved";

import bg from "assets/images/background/bg3.jpg";
import codeImg from "assets/images/stock/code.jpg";
import donateImg from "assets/images/stock/donate.jpg";
import volunteerImg from "assets/images/stock/volunteer.jpg";


const GetInvolved = () => {
  const classes = useStyles();
  return (
      <Layout>
        <Section image={bg} shaded halfScreen vcenter>
          <Container maxWidth="lg">
            <Fade in={true} timeout={2000}>
              <Typography variant="h4">Get Involved</Typography>
            </Fade>
          </Container>
        </Section>
        <Section>
          <Grid container spacing={4}>
            <Hidden smUp>
              <Grid item sm={6}>
                <img
                  src={codeImg}
                  alt="Participate"
                  className={classes.imageRounded}
                />
              </Grid>
            </Hidden>
            <Grid item sm={6}>
              <Typography variant="h4" gutterBottom>
                Participate
              </Typography>
              <Typography variant="body1" gutterBottom>
                Are you a returning citizen? Or are you a friend or a family
                member of someone who has experience in the criminial-justice
                system?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Massachusetts' tech industry is rapidly expanding, and many tech
                companies are looking for qualified individuals, regardless of
                their background, to fill over 10,000 open job openings.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Maybe you think the process of joining this industry is
                too daunting and difficult. It doesn't have to be, and we are
                here to help. Learn more about the opportunities available for you
                by clicking on the link below and filling out a form to introduce yourself.
              </Typography>
              <br />
              <CBBButton href="/contact/" color="primary">
                Contact Us
              </CBBButton>
            </Grid>
            <Hidden xsDown>
              <Grid item sm={6}>
                <img
                  src={codeImg}
                  alt="Participate"
                  className={classes.imageRounded}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Section>
        <Section shaded>
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <img
                src={donateImg}
                alt="Donate"
                className={classes.imageRounded}
              />
            </Grid>
            <Grid item sm={6}>
              <Typography variant="h4" gutterBottom>
                Donate
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our programs are supported through generous
                donations of individuals and business partners who believe in
                our mission of providing second-chances to returning citizens
                and empowering them to be successful, contributing members of our
                society again.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Your contributions will help provide stipends to our outstanding
                students and purchase educational materials to provide a high
                quality educational experience for our students.
              </Typography>
              <br />
              <CBBButton component={Link} to="/donate/" color="primary">
                Donate
              </CBBButton>
            </Grid>
          </Grid>
        </Section>
        <Section>
          <Grid container spacing={4}>
            <Hidden smUp>
              <Grid item sm={6}>
                <img
                  src={volunteerImg}
                  alt="Volunteer"
                  className={classes.imageRounded}
                />
              </Grid>
            </Hidden>
            <Grid item sm={6}>
              <Typography variant="h4" gutterBottom>
                Volunteer / Mentor
              </Typography>
              <Typography variant="body1" gutterBottom>
                From curriculum design, facilitating sessions, post-release
                support, and partnering with corporations and prison facilities,
                it takes a lot to get a program like this off the ground in a
                meaningful way. If you are able to contribute to one of these
                strands, fill out our contact form and get in touch!
              </Typography>
              <br />
              <CBBButton component={Link} to="/contact/" color="secondary">
                Contact Us
              </CBBButton>
            </Grid>
            <Hidden xsDown>
              <Grid item sm={6}>
                <img
                  src={volunteerImg}
                  alt="Volunteer"
                  className={classes.imageRounded}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Section>
      </Layout>
  );
};

export default GetInvolved;
