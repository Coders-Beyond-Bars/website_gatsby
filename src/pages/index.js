import React, { Component } from "react"
import { Link } from "gatsby"
import { Typography, Grid, Hidden } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"

import Layout from "components/Layout"
import Section from "components/Section"
import CBBButton from "components/CBBButton"

import MasterHeaderSection from 'sections/MasterHeaderSection'
import PartnersSection from "sections/PartnersSection"

import styles from "assets/jss/pages/home"

import stockImage1 from "assets/images/stock/stock1-800x800.jpg"
import stockImage2 from "assets/images/stock/stock2-800x800.jpg"
import stockImage3 from "assets/images/stock/stock3-800x800.jpg"
import stockImage4 from "assets/images/stock/recidivism.jpg"
import stockImage5 from "assets/images/stock/unemployment.jpg"

import Context from 'context'


const SECTIONS = [
  "header",
  "challenges"
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
    const { classes } = this.props
    return (
      <>
        <Context.Provider value={this.state}>
          <Layout title="Home" >
            <MasterHeaderSection id="header" />
            <Section
              id="challenges"
              title="Challenges"
              subtitle="Too many Americans are barred from growing economic opportunities due to their experience with the criminal-justice system"
              shaded
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={5}>
                  <img src={stockImage4} alt="Prison" className={classes.fullWidth} />
                </Grid>
                <Grid item xs={12} sm={12} md={7} className={classes.verticalCenter}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    color="inherit"
                  >
                    Too many Americans are impacted by cimrinal-justice system
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="inherit"
                  >
                    There are over 2 million individuals behind bars in
                    county jails, state prisons, and federal penitentiaries at any give moment across the country. 
                    To put this into another perspective, more than one in one-hundred adults
                    between the ages of eighteen and sixty-five are behind bars in the
                    US.
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="inherit"
                  >
                    This figure does not even include millions more who are
                    on parole or probation and are still part of the correctional
                    system. 
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="inherit"
                  >
                    We call these individuals, <strong>"Returning Citizens."</strong> 
                    They are our family members, friends, neighbors, and valuable members of our community.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={7} className={classes.verticalCenter}>
                <Typography
                    variant="h4"
                    gutterBottom
                    color="inherit"
                  >
                    Returning Citizens are deemd 'untouchable' by employers
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="inherit"
                  >
                    Up to 60% of returning citizens remain jobless a year after their release due to their criminal 
                    records and lack of employable skills. Locked out of gainful employment opportunities, many returning citizens
                    fall back to substance abuse or engage in criminal activities. 
                    According to a research reported by the Department of Justice, 67.8% of returning citizens 
                    were arrested again within 3 years of their release and 76.6% within 5 years.  
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="inherit"
                  >
                    Urban Institute reported in its 2008 research report that individuals who made 
                    more than $10 an hour were half as likely to return to prison as those making less than $7 an hour. 
                    Their finding shows us that having a stable source of income and a career path with potential for financial upward mobility
                    should be crucial pillars of successful re-entry process for returning citizens.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <img src={stockImage5} alt="Job Line" className={classes.fullWidth} />
                </Grid>
              </Grid>
            </Section>
            <Section 
              id="solutions"
              title="Who We Are"
              subtitle="Our vision of the future is a place where returning citizens
                        can become a productive, contributing members of our society again."
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={5}>
                  <img src={stockImage3} alt="About Us" className={classes.fullWidth}/>                  
                </Grid>
                <Grid item xs={12} sm={12} md={7} className={classes.verticalCenter}>
                  <Typography 
                    variant="h4" 
                    gutterBottom 
                    color="secondary"
                  >
                    We 'reboot' careers and lives
                  </Typography>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    color="secondary"
                  >
                    Studies show that having a gainful employment 
                    with a stable income is the best solution 
                    to preventing returning citizens from going back to prison.
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="secondary"
                  >
                    Reboot to Tech empowers and equips returning citizens 
                    with skills in high-tech industries and on-site work experience 
                    to help them attain successful careers and regain
                    the diginity of becoming contributing members of society.
                  </Typography>
                <div className={classes.buttonContainer}>
                  <CBBButton 
                    size="large"
                    color="primary"
                    component={Link}
                    to="/about/"
                  >
                    Read More
                  </CBBButton>
                </div>
                </Grid>
              </Grid>
            </Section>
            <Section
              shaded
              title="What We Can Do for You"
              subtitle="Are you a returning citizen or someone who knows a friend or family member who is?"
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={5}>
                  <img src={stockImage1} alt="Returning Citizens" className={classes.fullWidth} />                  
                </Grid>
                <Grid item xs={12} sm={12} md={7} className={classes.verticalCenter} >
                  <Typography variant="h4" gutterBottom>
                    Reboot your career and life
                  </Typography>
                  <Typography variant="h6" gutterBottom >
                    You've made mistakes in the past. But you don't let those mistakes define
                    who you are and your worth as a member of your community.  
                    We understand your frustration of navigating a job market that doesn't give you a fair look. 
                    We worked with many other returning citizens who faced similar circumstances. 
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    It's time to reboot your career and life.  Let us show you how. 
                  </Typography>
                <div className={classes.buttonContainer}>
                  <CBBButton 
                    size="large"
                    color="secondary"
                    component={Link}
                    to="/getInvolved/"
                  >
                    Ready to get started?
                  </CBBButton>
                </div>
                </Grid>
              </Grid>
            </Section>
            <Section
              title="Partnering with Us"
              subtitle="Tap into one of the largest untapped labor force in the country"
            >
              <Grid container spacing={4}>
                <Hidden mdUp>
                  <Grid item xs={12} sm={12} md={5}>
                    <img src={stockImage2} alt="Corporate Partnerships" className={classes.fullWidth} />                  
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={12} md={7} className={classes.verticalCenter}>
                  <Typography variant="h4" gutterBottom color="secondary">
                    Let us help you find you your next star employee
                  </Typography>
                  <Typography variant="h6" gutterBottom color="secondary">
                    Returning citizens constitute one of the largest untapped potential labor force in the country. 
                    Often shunned by traditional employers, many returning citizens hold deep desire for a second-chance to become contributing members of our society again.
                    They are ready work and commit to an employer willing to give them a chance.
                  </Typography>
                  <Typography variant="h6" gutterBottom color="secondary">
                    Discover how you can make deep impact in the lives of returning citizens while 
                    retaining talented and committed employees ready to add value to your firm.
                  </Typography>
                <br />  
                <div className={classes.buttonContainer}>
                  <CBBButton 
                    size="large"
                    color="primary"
                    component={Link}
                    to="/companies/"
                  >
                    Partner with us
                  </CBBButton>
                </div>
                </Grid>
                <Hidden smDown>
                  <Grid item xs={12} sm={12} md={5}>
                    <img src={stockImage2} alt="Corporate Partnerships" className={classes.fullWidth} />                  
                  </Grid>
                </Hidden>
              </Grid>
            </Section>
            <PartnersSection id="partners"/>
          </Layout>
        </Context.Provider>
      </>
    )
  }
}

export default withStyles(styles)(Index)