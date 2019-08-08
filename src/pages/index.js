import React, { Component } from "react";
import Helmet from "react-helmet";

import { LandingLayout } from "components/Layout";

import HeaderSection from "sections/HeaderSection";
import MissionSection from "sections/MissionSection";
import ActivitiesSection from "sections/ActivitiesSection";
import TeamSection from "sections/TeamSection";
import GetInvolvedSection from "sections/GetInvolvedSection";
import PartnersSection from "sections/PartnersSection";
import ContactSection from "sections/ContactSection";

import Context from "context";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: "header",
      setSection: this.setSection,
      yCoordinates: {
        header: 0,
        about: 0,
        problem: 0,
        solution: 0,
        value: 0,
        demo: 0
      }
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
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

  handleResize = () => {
    const sections = [
      "header",
      "mission",
      "activities",
      "team",
      "getInvolved",
      "partners",
      "contact"
    ];
    sections.forEach(section => {
      const dom = document.getElementById(section);
      this.setState(prevState => ({
        ...prevState,
        yCoordinates: {
          ...prevState.yCoordinates,
          [section]: dom.offsetTop
        }
      }));
    });
  };

  setSection = section => {
    this.setState({ section });

    const navBar = document.getElementById("navbar");

    window.scrollTo({
      top: this.state.yCoordinates[section] - navBar.offsetHeight,
      behavior: "smooth"
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

        <Context.Provider value={this.state}>
          <LandingLayout>
            <HeaderSection id="header" />
            <MissionSection id="mission" />
            <ActivitiesSection id="activities" />
            <TeamSection id="team" />
            <GetInvolvedSection id="getInvolved" />
            <PartnersSection id="partners" />
            <ContactSection id="contact" />
          </LandingLayout>
        </Context.Provider>
      </div>
    );
  }
}

export default Index;
