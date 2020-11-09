import React from "react"
import { Link } from "gatsby"
import { Typography, Fade, Container, Grid, Hidden } from "@material-ui/core"

import Layout from "components/Layout"
import Header from "components/Header"
import Section from "components/Section"
import CBBButton from "components/CBBButton"

import useStyles from "assets/jss/pages/companies"

import bg from "assets/images/background/bg11.jpg"
import massachusettsMap from "assets/images/massachusetts.png"
import stockImage1 from "assets/images/stock/stock19-800x800.jpg"
import stockImage2 from "assets/images/stock/stock9-800x800.jpg"
import stockImage3 from "assets/images/stock/stock10-800x800.jpg"
import stockImage4 from "assets/images/stock/stock16-800x800.jpg"
import parallaxImg from "assets/images/parallax/parallax8-6720x2800.jpg"

const Companies = () => {
  const classes = useStyles()
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
        <Section 
          title="Who are the returning citizens?" 
          subtitle="a.k.a. ex-offenders, returning citizens are the largest class of underappreciated American workforce"
          hcenter 
          vcenter
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5}>
              <img 
                src={stockImage1}
                alt="Partnerships" 
                className={classes.fullWidth}
              />
            </Grid>
            <Grid
              item 
              xs={12} 
              sm={12} 
              md={7} 
              className={classes.verticalCenter}>
              <Typography 
                variant="h4"
                color="secondary"
                gutterBottom
              >
                Who are the returning citizens?
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                color="secondary"
              >
                adfljlakdjfd
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section 
          title="By the numbers in Massachusetts"
          hcenter 
          vcenter
        >
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
                   is the average age of returning citizens at the 
                   time of their release
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
                    gutterBottom>
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
                    returning citizens are released from each year in Massachusetts
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="body1">
            Source: <a href="https://www.mass.gov/lists/prison-population-trends" className={classes.link}>Massachusetts Department of Corrections - Prison Population Trends 2019</a>
          </Typography>
        </Section>
        <Section
          title="Stable and "
          shaded
          hcenter
          vcenter
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5}>
              <img src={stockImage2} alt="Working returning citizen" />
            </Grid>
            <Grid item xs={12} sm={12} md={7} className={classes.verticalCenter}>
              <Typography variant="h4" gutterBottom>
                Stable and committed employees
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section
          title="Funding for Apprenticeship"
          hcenter
          vcenter
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={7} className={classes.verticalCenter}>
              <Typography 
                variant="h4" 
                gutterBottom
                color="secondary"
              >
                Funding
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <img src={stockImage4} alt="Working returning citizen" />
            </Grid>
          </Grid>
        </Section>
        <Section 
          title="Mitigate Your Concerned"
          subtitle="You are curious, but you are still concerned.  Here's what we can do to help." 
          shaded
          hcenter 
          vcenter
        >
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={5}>
              <img src={stockImage3} alt="" className={classes.fullWidth} />
            </Grid>
            <Grid item xs={12} sm={12} md={7} className={classes.verticalCenter}>
              <Typography 
                variant="h4"
                gutterBottom
              >
                We cover you via Federal Bonding
              </Typography>
            </Grid>
          </Grid>
        </Section>
        <Section
          title="Hire a Returning Citizen" 
          subtitle="Ready to get started? Reach out to us to learn how we can help you."
          image={parallaxImg}
          shaded
          hcenter 
          vcenter
        >
          <CBBButton
            component={Link}
            to="/contact/"
            color="primary"
            size="large"
          >
            Connect with Us
          </CBBButton>
        </Section>
      </Layout>
  )
}

export default Companies
