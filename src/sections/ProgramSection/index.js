import React, { useState } from "react";
import { Typography, Grid, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Section from "components/Section";

import ItemsCarousel from "react-items-carousel";

import useStyles from "assets/jss/pages/program";

import evaluation from "assets/images/program/evaluation.jpg";
import preboarding from "assets/images/program/preboarding.jpg";
import bootcamp from "assets/images/program/bootcamp.jpg";
import placement from "assets/images/program/placement.jpg";

const ProgramSection = props => {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Section
      title="Program Outline"
      subtitle="Returning citizens have diverse educational backgrounds. Some returning citizens have college degrees while others never had formal education beyond elementary school before being incarcerated. Our 12 months program was designed to support unique background and circumstances of each individual returning citizens."
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        infiniteLoop
        showSlither={true}
        gutter={5}
        activePosition="center"
        outsideChevron
        leftChevron={
          <IconButton color="secondary" aria-label="add an alarm">
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        }
        rightChevron={
          <IconButton color="secondary" aria-label="add an alarm">
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        }
        chevronWidth={25}
      >
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} className={classes.horizontalCenter}>
            <img src={evaluation} alt="Evaluation" className={classes.image} />
          </Grid>
          <Grid item sm={6} className={classes.carouselItem}>
            <Typography variant="h5" gutterBottom color="primary">
              Evaluation / Interview
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our program starts with a rigorous evaluation process that
              includes pre-evaluation exam and an interview.
            </Typography>
            <Typography variant="body1" gutterBottom>
              This step is used to identify candidates who have the fundamental
              skills in mathematics, reading comprehension, and English
              composition necessary to take on the challenge of learning to
              code. For candidates who do not pass this step, we provide
              resources to refresh their knowledge so that they can be better
              prepared for our program in the future.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We also conduct interviews with our candidates to determine if
              they have the emotional and pyschological aptitude to undergo a
              rigorous training program.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} className={classes.horizontalCenter}>
            <img
              src={preboarding}
              alt="Pre-boarding Training"
              className={classes.image}
            />
          </Grid>
          <Grid item sm={6} className={classes.carouselItem}>
            <Typography variant="h5" gutterBottom color="primary">
              Pre-boarding Training
            </Typography>
            <Typography variant="body1" gutterBottom>
              After being accepted into the program, candidates undertake{" "}
              <strong>four months</strong> months of pre-boarding training in
              which they commit approximately five to six hours a week to learn
              fundamental concepts in computer programming and web development.
              This step in the program provides our candidates an opportunity to
              explore software development before they take a deep dive into the
              intensive bootcamp training.
            </Typography>
            <Typography variant="body1" gutterBottom>
              This stage of the program is conducted either inside the
              correctional facility (with Internet access) or outside for
              returning citizens who are already in middle of transition back
              into society.
            </Typography>
            <Typography variant="h6" color="secondary">
              Duration:
            </Typography>
            <Typography variant="body1" color="secondary">
              16 Weeks
            </Typography>
            <Typography variant="h6" color="secondary">
              Weekly Commitment:
            </Typography>
            <Typography variant="body1" color="secondary">
              5 - 6 Hours
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} className={classes.horizontalCenter}>
            <img
              src={bootcamp}
              alt="Training Bootcamp"
              className={classes.image}
            />
          </Grid>
          <Grid item sm={6} className={classes.carouselItem}>
            <Typography variant="h5" gutterBottom color="primary">
              Training Bootcamp
            </Typography>
            <Typography variant="body1" gutterBottom>
              For <strong>six months</strong>, CBB candidates receive intense
              and focussed instruction on more advanced concepts in{" "}
              <strong>full stack web development</strong> where they can
              anticipate at least <strong>20 hours/week</strong> of instruction
              and coding. During this stage, students are required to create a
              portfolio of at least three projects in the course of six months
              to showcase their newly acquired talent in web development.
            </Typography>
            <Typography variant="body1" gutterBottom>
              During the bootcamp period, our students receive a modest living
              stipend to supplement their income so that they can direct 100% of
              their energy into learning instead of taking on second or third
              job to meet their day-to-day financial obligations.
            </Typography>
            <Typography variant="h6" color="secondary">
              Duration:
            </Typography>
            <Typography variant="body1" color="secondary">
              24 Weeks
            </Typography>
            <Typography variant="h6" color="secondary">
              Weekly Commitment:
            </Typography>
            <Typography variant="body1" color="secondary">
              +20 Hours
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} className={classes.horizontalCenter}>
            <img
              src={placement}
              alt="Job Placement"
              className={classes.image}
            />
          </Grid>
          <Grid item sm={6} className={classes.carouselItem}>
            <Typography variant="h5" gutterBottom color="primary">
              Job Placement
            </Typography>
            <Typography variant="body1" gutterBottom>
              For approximately <strong>2 months</strong>, our candidates
              prepare to take their first step towards career in the tech
              industry. With a portfolio built during the bootcamp period,
              students learn to articulate their value proposition as software
              developer to prospective employers via resume and interviews.
            </Typography>
            <Typography variant="body1" gutterBottom>
              With business partners committed to hiring returning citizens, CBB
              aims to offer at minimum three interviews per each candidate.
            </Typography>
            <Typography variant="h6" color="secondary">
              Duration:
            </Typography>
            <Typography variant="body1" color="secondary">
              8 Weeks
            </Typography>
          </Grid>
        </Grid>
      </ItemsCarousel>
    </Section>
  );
};

export default ProgramSection;
