import React, { Component } from "react";
import { Link } from "gatsby";
import { Typography, Container } from "@material-ui/core";

import Section from "components/Section";
import BlogRoll from "components/BlogRoll";

class BlogSection extends Component {
  render() {
    const { classes, data, ...rest } = this.props;

    return (
      <Section
        {...rest}
        title="Blog"
        subtitle="Keep up with our latest activities."
      >
        <Container maxWidth="lg">
          <BlogRoll />
          <br />
          <Typography variant="body1" component={Link} to="/blog/">
            Read More
          </Typography>
        </Container>
      </Section>
    );
  }
}

export default BlogSection;
