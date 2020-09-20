import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import { withStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"

import CBBButton from "components/CBBButton"

import styles from "assets/jss/components/desktopmenuStyles"


class DesktopMenu extends Component {
  render() {
    const { classes } = this.props
    return (
      <StaticQuery
        query={
          graphql`
            query {
              site {
                siteMetadata {
                  navLinks {
                    text
                    url
                    button
                  }
                }
              }
            }
          `
        }
        render={data => {
          const menu = data.site.siteMetadata.navLinks
          return (
            <>
              {menu.map(item => {
                if (item.button) {
                  return (
                    <CBBButton
                      color="inherit"
                      component={Link}
                      to={item.url}
                      style={{ marginLeft: 0 }}
                    >
                      {item.text}
                     </CBBButton>
                    )
                } else {
                  return (
                    <Button 
                      color="inherit" 
                      className={classes.menuLink}
                      component={Link}
                      to={item.url}
                    >
                      {item.text}
                    </Button>
                  )
                }
              })}
            </>
          )
        }}
      />
    );
  }
}

export default withStyles(styles)(DesktopMenu);
