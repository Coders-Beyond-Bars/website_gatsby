import React from "react";
import { Grid, Container } from "@material-ui/core";

import Section from "components/Section";
import ImageCard from "components/ImageCard";

// import education from "assets/images/mission/education.jpg";
// import community from "assets/images/mission/community.jpg";
// import mentorship from "assets/images/mission/mentorship.jpg";
// import advocacy from "assets/images/mission/stock20-800x800.jpg";
// import employment from "assets/images/mission/employment.jpg";

import useStyles from "assets/jss/sections/about";

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Section 
      title="What We Do"
      subtitle="Reboot to Tech as a 501(c)(3) non-profit organization is committed to supporting 
      returning citizens attaining careers in high-tech industries.  Here are what we do to 
      meet our vision."
      >
      {/* <Container maxWidth="lg">
        <Grid container spacing={0} justify="center">
          <Grid item sm={4} xs={12} className={classes.grid}>
            <ImageCard
              image={education}
              title="Education"
              description="Education is a critical component in creating both professional
                          and personal opportunities for future growth. Our focus is to
                          educate returning citizens in the areas of software development
                          and advanced manfuacturing with the goal of creating a strong labor force
                          to meet the growing demand for high-tech talent."
            />
          </Grid>
          <Grid item sm={4} xs={1}></Grid>
          <Grid item sm={4} xs={12} className={classes.grid}>
            <ImageCard
              image={community}
              title="Community"
              description="Transitions in life always present challenges.
                          Having experienced difficult challenges in our own lives, we
                          understand the importance of being surrounded by an encouraging,
                          supportive and caring community. Our focus on community brings
                          each of our students a variety of resources including: life
                          coaching, professional mentorship, and connections to a
                          broad range of personal resources."
            />
          </Grid>
          <Grid item sm={4}></Grid>
          <Grid item sm={4} xs={12} className={classes.grid}>
            <ImageCard
              image={mentorship}
              title="Mentorship"
              description="Our leadership team has decades of
                          experience working with the returning citizen population. 
                          Some members of our team have experienced life behind the wall
                          and understand, first hand, how difficult
                          transitioning back to society can be. We work
                          directly with our students to assist them through
                          the everyday challenges of life. Our team has
                          worked with hundreds of individuals dealing with a
                          variety of challenges from basic coping skills to recovery."
            />
          </Grid>
          <Grid item sm={4}></Grid>
          <Grid item sm={4} xs={12} className={classes.grid}>
            <ImageCard
              image={advocacy}
              title="Advocacy"
              description="Tackling the problem surrounding stigma around
                        incarceration requires more than effort on the part of the
                        returning citizens.  Society at large must undergo change
                        in its views toward educating and working with returning citizens.
                        We actively connect with communities at large -
                        the business community and the public sector -
                        to educate and inform them of benefits and opportunities
                        in providing returning citizens' with second chance."
            />
          </Grid>
          <Grid item sm={4}></Grid>
          <Grid item sm={4} xs={12} className={classes.grid}>
            <ImageCard
              image={employment}
              title="Employment"
              description="Our promise to our students goes
              beyond education. Education is a critical factor in success
              but education alone is simply not enough. Our
              students need help navigating the job search and
              interview process. To better support our students,
              Reboot is building a network of business relationships
              with hiring managers in the high-tech space who
              often struggle to source talent and see the value of
              our program in terms of our commitment to train a reliable
              untapped labor force."
            />
          </Grid>
        </Grid>
      </Container> */}
    </Section>
  );
};

export default AboutSection;
