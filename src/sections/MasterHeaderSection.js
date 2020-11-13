import React, { Component } from 'react'
import classnames from "classnames"
import withStyles from '@material-ui/core/styles/withStyles'

import { Typography, Fade, Container, IconButton } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Context from 'context'

import Section from 'components/Section'
import Logo from 'components/Logo'
import SubscribeForm from 'components/SubscribeForm'


import bg from 'assets/images/background/bg3.jpg'
import styles from 'assets/jss/sections/headerStyles'


class HeaderSection extends Component {
  state = {
    fadeIn: false,
  }

  componentDidMount() {
    this.setState({
      fadeIn: true,
    })
  }

  render() {
    const { fadeIn } = this.state
    const { classes, ...rest } = this.props
    return (
      <Section
        image={bg}
        {...rest}
        shaded
        fullScreen
        hcenter
        classNames={classes.header}
      >
        <Container maxWidth="md" className={classes.container}>
            <Fade in={fadeIn} timeout={2000}>
              <div className={classnames(classes.logoContainer, classes.headerText)}>
                <Logo 
                  size={5}
                  logoColor="primary"
                  subColor="inherit"
                />
              </div>
            </Fade>
            <Fade in={fadeIn} timeout={2000}>
              <div>
                <Typography
                  variant="h4"
                  color="inherit"
                  align="center"
                  gutterBottom
                >
                  Empowering returning citizens to become contributors to digital technology revolution
                </Typography>
              </div>
            </Fade>
          <Fade in={fadeIn} timeout={3000}>
            <div className={classes.subscribe}>
              <SubscribeForm />
            </div>            
          </Fade>
          <Fade in={fadeIn} timeout={4000}>
            <div className={classes.slideDown}>
              <Typography variant="body1">Learn More</Typography>
              <Context.Consumer>
                {({ section, setSection }) => (
                  <IconButton 
                    aria-label="learn" 
                    color="inherit" 
                    size="medium"
                    onClick={() => setSection('challenges')}
                  >
                    <ExpandMoreIcon fontSize="large" />
                </IconButton>
                )}
              </Context.Consumer>
            </div>           
          </Fade>
        </Container>
      </Section>
    )
  }
}

export default withStyles(styles)(HeaderSection)
