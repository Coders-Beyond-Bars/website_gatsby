import React from "react";
import { Typography, Grid } from "@material-ui/core";

import Section from "components/Section";
import pillars from "assets/images/mission/five_pillars.png";

const AboutSection = () => {
  return (
    <Section title="What We Do">
      <Grid container spacing={1} justify="center">
        <Grid item sm={2}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Typography variant="body1">
            Education is a critical component in creating both professional and
            personal opportunities for future growth. CBB’s focus is to educate
            returning citizens in the areas of software engineering and data
            analysis with the goal of creating a strong labor force to meet the
            growing demand for high-tech jobs in Massachusetts.
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="h6" gutterBottom>
            Community
          </Typography>
          <Typography variant="body1">
            Transitions in life always present challenges. Having experienced
            difficult challenges in our own lives, we understand the importance
            of being surrounded by an encouraging, supportive and caring
            community. CBB’s focus on community brings each of our students a
            variety of resources including; life coaching, professional
            mentorship, and connections to a broad range of personal resources.
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="h6" gutterBottom>
            Life Coaching
          </Typography>
          <Typography variant="body1">
            CBB’s management team has decades of experience working with both
            the incarcerated and returning citizen population. Some members of
            our team have experience life behind the wall and understand, first
            hand, how difficult transitioning back to society can be. Our
            resident life coach Bob Balfour works directly with our students to
            assist them through the everyday challenges of life. Bob has worked
            with hundreds of individuals dealing with a variety of challenges
            from basic coping skills to recovery. Bob sees the promise in
            everyone and more importantly helps them see it for themselves.
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="h6" gutterBottom>
            Advocacy
          </Typography>
          <Typography variant="body1">
            I’m still working on this. I am really not sure what to say. Maybe
            it’s already accounted for in the other pillars.
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Typography variant="h6" gutterBottom>
            Employment
          </Typography>
          <Typography variant="body1">
            CBB’s promise to our students goes beyond education. Education is a
            critical factor in success but education alone is simply not enough.
            Our students need help navigating the job search and interview
            process. To better support our students, CBB is building a network
            of business relationships with hiring managers in the high-tech
            space who often struggle to source talent and see the value of our
            program in terms of our commitment to train a reliable untapped
            labor force.
          </Typography>
        </Grid>
        <Grid item md={12}>
          <img src={pillars} alt="Five Pillars of CBB" />
        </Grid>
      </Grid>
    </Section>
  );
};

export default AboutSection;
