import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

import { Button } from "@material-ui/core";

import CBBButton from "components/CBBButton";

import useStyles from "assets/jss/components/desktopmenuStyles";

const DesktopMenu = () => {
  const classes = useStyles();
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              navLinks {
                text
                url
              }
            }
          }
        }
      `}
      render={(data) => {
        const menu = data.site.siteMetadata.navLinks;
        return (
          <>
            {menu.map((item) => {
              if (item.button) {
                return (
                  <CBBButton
                    key={item.url}
                    color="inherit"
                    component={Link}
                    to={item.url}
                    style={{ marginLeft: 0 }}
                    size="large"
                  >
                    {item.text}
                  </CBBButton>
                );
              }
              return (
                <Button
                  key={item.url}
                  color="inherit"
                  className={classes.menuLink}
                  component={Link}
                  to={item.url}
                >
                  {item.text}
                </Button>
              );
            })}
          </>
        );
      }}
    />
  );
};

export default DesktopMenu;
