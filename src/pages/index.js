import React, { Component } from "react";
import Helmet from "react-helmet";

import { LandingLayout } from "components/Layout";

import HeaderSection from "sections/HeaderSection";
import MissionSection from "sections/MissionSection";
import ActivitiesSection from "sections/ActivitiesSection";
import TeamSection from "sections/TeamSection";
import GetInvolvedSection from "sections/GetInvolvedSection";
import PartnersSection from "sections/PartnersSection";

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
    const missionSection = document.getElementById("mission");
    this.setState({
      missionYcoordinate: missionSection.offsetTop
    });
  };

  render() {
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

        <LandingLayout>
          <HeaderSection id="header" onClickLearn={this.handleClickLearn} />
          <MissionSection id="mission" shaded />
          <ActivitiesSection id="activities" />
          <GetInvolvedSection id="getInvolved" />
          <PartnersSection id="partners" />
        </LandingLayout>
      </div>
    );
  }
}

export default Index;
