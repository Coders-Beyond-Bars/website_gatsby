import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Typography, Grid } from "@material-ui/core";

import Layout from "components/Layout";
import { Content, HTMLContent } from "components/Content";
import Section from "components/Section";

import useStyles from "assets/jss/templates/team-profile";

export const TeamProfileTemplate = ({
  content,
  contentComponent,
  name,
  title,
  image
}) => {
  const ProfileContent = contentComponent || Content;
  const classes = useStyles();
  return (
    <Section>
      <Grid container spacing={1}>
        <Grid item sm={4}>
          <img src={image} alt="Richard Kim" className={classes.profilePic} />
          <Typography variant="h6" align="center">
            {name}
          </Typography>
          <Typography variant="body1" align="center" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item sm={8}>
          <ProfileContent content={content} />
        </Grid>
      </Grid>
    </Section>
  );
};

TeamProfileTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string
};

const TeamProfile = ({ data }) => {
  const { markdownRemark: profile } = data;

  return (
    <>
      <Helmet>
        <title>{`${profile.frontmatter.name}`}</title>
        <meta
          name="description"
          content={`${profile.frontmatter.name} ${profile.frontmatter.title}`}
        />
      </Helmet>
      <Layout>
        <TeamProfileTemplate
          content={profile.html}
          contentComponent={HTMLContent}
          name={profile.frontmatter.name}
          title={profile.frontmatter.title}
          image={profile.frontmatter.image}
        />
      </Layout>
    </>
  );
};

TeamProfile.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default TeamProfile;

export const profileQuery = graphql`
  query ProfileByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        title
        image
      }
    }
  }
`;
