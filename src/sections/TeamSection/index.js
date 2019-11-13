import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import withStyles from "@material-ui/core/styles/withStyles";

import { Typography, Grid, Card, CardActionArea } from "@material-ui/core";

import Section from "components/Section";

const styles = theme => ({
  team: {
    width: "80%",
    margin: 20
  },
  profileCard: {
    backgroundColor: "inherit",
    textDecoration: "none",
    border: 0,
    "&:hover": {
      backgroundColor: "inherit"
    }
  },
  profileCardAction: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "inherit"
    }
  },
  profilePic: {
    maxWidth: "80%",
    borderRadius: 200
  },
  textWhite: {
    color: "#fff"
  }
});

const TeamSection = ({ classes, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "team-profile" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              title
              image
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const {
    allMarkdownRemark: { edges: teamMembers }
  } = data;

  return (
    <Section title="Team" shaded hcenter {...rest}>
      <Grid container spacing={1} justify="center">
        {teamMembers.map(member => (
          <Grid item sm={4} md={3} key={member.node.id}>
            <Card
              component={Link}
              to={member.node.fields.slug}
              className={classes.profileCard}
              elevation={0}
            >
              <CardActionArea className={classes.profileCardAction}>
                <img
                  src={member.node.frontmatter.image}
                  alt={member.node.frontmatter.name}
                  className={classes.profilePic}
                />
                <Typography
                  variant="h6"
                  align="center"
                  color="textPrimary"
                  className={classes.textWhite}
                >
                  {member.node.frontmatter.name}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.textWhite}
                >
                  {member.node.frontmatter.title}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default withStyles(styles)(TeamSection);
