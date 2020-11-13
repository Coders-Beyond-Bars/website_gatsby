import React from "react";
import { Link } from "gatsby";
import { Typography, Grid, Container } from "@material-ui/core";
import Section from "components/Section";
import useStyles from "assets/jss/pages/program";

const TechStackSection = (props) => {
  const classes = useStyles();

  return (
    <Section title="Tech Stack">
      <Container maxWidth="lg">
        <Typography variant="h1">adfd</Typography>
      </Container>
    </Section>
  );
};

export default TechStackSection;
