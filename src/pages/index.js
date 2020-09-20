import React, { Component } from "react";

import { Typography, Grid, Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

import Layout from "components/Layout";
// import Section from "components/Section";
// import CBBButton from "components/CBBButton";
import SEO from "components/SEO"

import MasterHeaderSection from 'sections/MasterHeaderSection'
import MissionSection from "sections/MissionSection";
// import ChallengesSection from "sections/ChallengesSection";
// import TestimonialSection from "sections/TestimonialSection";
// import PartnersSection from "sections/PartnersSection";
// import DonateSection from "sections/DonateSection";

import styles from "assets/jss/pages/home";

import Context from 'context'


const SECTIONS = [
  "header",
  "mission"
]

class Index extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      section: 'header',
      setSection: this.setSection,
      yCoordinates: SECTIONS.reduce((obj, item) => {
        obj[item] = 0
        return obj
      }, {})
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(
      function() {
        this.handleResize()
      }.bind(this),
      1000
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const { yCoordinates } = this.state
    Object.keys(yCoordinates).forEach(section => {
      const dom = document.getElementById(section)
      this.setState(prevState => ({
        ...prevState,
        yCoordinates: {
          ...prevState.yCoordinates,
          [section]: dom.offsetTop
        }
      }))
    })
  }

  setSection = section => {
    this.setState({ section })

    const navBar = document.getElementById("navbar")
    window.scrollTo({
      top: this.state.yCoordinates[section] - navBar.offsetHeight,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <>
        <SEO title="Home" />
        <Context.Provider value={this.state}>
          <Layout>
            <MasterHeaderSection id="header" />
            <MissionSection id="mission" />
          </Layout>
        </Context.Provider>
      </>
    )
  }
}

export default withStyles(styles)(Index)