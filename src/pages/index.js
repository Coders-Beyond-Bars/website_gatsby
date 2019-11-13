import React, { Component } from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { Typography, Grid, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import Layout from "components/Layout";
import Section from "components/Section";

import pic from "assets/images/stock/mission.png";

import HeaderSection from "sections/HeaderSection";
import MissionSection from "sections/MissionSection";
import ChallengesSection from "sections/ChallengesSection";
import TestimonialSection from "sections/TestimonialSection";
// import PartnersSection from "sections/PartnersSection";

import homeStyles from "assets/jss/pages/home";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      missionYcoordinate: 0
    };
  }

  componentDidMount() {
    window.addEventListener("rezie", this.handleResize);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(
      function() {
        this.handleResize();
      }.bind(this),
      1000
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleClickLearn = event => {
    const navBar = document.getElementById("navbar");

    window.scrollTo({
      top: this.state.missionYcoordinate - navBar.offsetHeight,
      behavior: "smooth"
    });
  };

  handleResize = () => {
    const missionSection = document.getElementById("challenges");
    this.setState({
      missionYcoordinate: missionSection.offsetTop
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>
            Coders Beyond Bars - Empowering Returning Citizens to become
            producers of digital technology
          </title>
          <meta name="description" content="Coders Beyond Bars" />
          <meta
            name="keywords"
            content="Prison Education, Coding, Re-entry, Second Chance"
          />
          <meta name="author" content="Richard Kim" />
        </Helmet>
        <Layout>
          <HeaderSection id="header" onClickLearn={this.handleClickLearn} />
          <ChallengesSection id="challenges" shaded />
          <MissionSection id="mission" />
          <Section>
            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item sm={5} md={4}>
                  <img
                    src={pic}
                    alt="Mission"
                    className={classes.imageRounded}
                  />
                </Grid>
                <Grid item sm={7} md={8} className={classes.verticalCenter}>
                  <Typography variant="h6" gutterBottom>
                    Started as an initiative under The Educational Justice
                    Institute at Massachusetts Institute of Technology, Coders
                    Beyond Bars, Inc. (CBB) is a not-for-profit organization in
                    Massachusetts with the mission of providing incarcerated
                    individuals the opportunity to learn skills in software
                    development and preparing them for successful entry into
                    careers in high-tech industries.{" "}
                    <Link to="/about" className={classes.link}>
                      Read More
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Section>
          <TestimonialSection id="testimonial" shaded />
        </Layout>
      </div>
    );
  }
}

export default withStyles(homeStyles)(Index);
