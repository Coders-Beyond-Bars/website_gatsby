import React, { useState } from "react";
import classnames from "classnames";
import { Typography, Grid, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import Section from "components/Section";

import ItemsCarousel from "react-items-carousel";

import useStyles from "assets/jss/sections/program";

import evaluationImg from "assets/images/stock/stock22-800x800.jpg";
import pretrainImg from "assets/images/stock/stock23-800x800.jpg";
import interviewImg from "assets/images/stock/stock21-800x800.jpg";
import placementImg from "assets/images/stock/stock20-800x800.jpg";
import apprenticeshipImg from "assets/images/stock/stock5-800x800.jpg";
import followupImg from "assets/images/stock/stock24-800x800.jpg";

const ProgramSection = (props) => {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  return (
    <Section title="Program Roadmap">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        showSlither
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
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={5}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <img
                src={evaluationImg}
                alt="Evaluation"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <Typography variant="h4" gutterBottom color="secondary">
                1. Evaluation
              </Typography>
              <Typography variant="h6" gutterBottom color="secondary">
                The first step in your journey to "reboot"-ing your career
                begins with an earnest assessment of the life you led and the
                life you want to attain. Let's work together to identify the
                roadblocks that prevent you from attaining your dream career and
                financial security.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={5}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <img
                src={pretrainImg}
                alt="Evaluation"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <Typography variant="h4" gutterBottom color="secondary">
                2. Pre-Apprenticeship Training
              </Typography>
              <Typography variant="h6" gutterBottom color="secondary">
                You may have been out of school for many years and need to brush
                up on basic skills again. Whether it's basic digital literacy
                skills (e.g. ability to use Microsoft Office tools) or "soft
                skills" such as your ability to work in a team, we'll work with
                you to fill in those skills-gaps. We will also work with you to
                craft your resume and sharpen your interviewing skills so that
                you put your best foot forward for the interviews.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={5}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <img
                src={interviewImg}
                alt="Interview"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <Typography variant="h4" gutterBottom color="secondary">
                3. Interviews
              </Typography>
              <Typography variant="h6" gutterBottom color="secondary">
                We will introduce you to partnering organizations and companies
                that share our mission of providing "second-chance" to returning
                citizens and are committed to working with them. As a result,
                your historical circumstances will play no role in the interview
                process with our partners, and you will be evaluated on your
                true potential.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={5}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <img
                src={apprenticeshipImg}
                alt="Evaluation"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <Typography variant="h4" gutterBottom color="secondary">
                4. Apprenticeship
              </Typography>
              <Typography variant="h6" gutterBottom color="secondary">
                Great! You have been accepted by our partnering organizations.
                During this stage of the program, you will be placed into an
                "apprenticeship" position in which you will learn various skills
                related to your career via hands-on experience at your job.
                Reboot and our partnering firm will provide you with a living
                wage during this stage, which may last from three months up to
                six months depending on the firm.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item sm={5} xs={12}>
              {" "}
              className={classnames(classes.flex, classes.verticalCenter)}
              <img
                src={placementImg}
                alt="Placement"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <Typography variant="h4" gutterBottom color="secondary">
                5. Placement
              </Typography>
              <Typography variant="h6" gutterBottom color="secondary">
                Congratulation! After months of hard work, you have proven
                yourself as a valuable member of your firm, and your firm has
                extended an offer to have you join the firm as a permanent
                full-time employee.
              </Typography>
              <Typography variant="h6" gutterBottom color="secondary">
                Unfortunately, not every apprenticeship turns into full-time
                employment. Do not be discouraged. This outcome does not define
                your personhood and your potential. We will work together to
                find you another employer who may be better suited to your
                abilities and talents.
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={5}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <img
                src={followupImg}
                alt="Evaluation"
                className={classes.image}
              />
            </Grid>
            <Grid
              item
              sm={7}
              xs={12}
              className={classnames(classes.flex, classes.verticalCenter)}
            >
              <Typography variant="h4" gutterBottom color="secondary">
                6. Follow Up
              </Typography>
              <Typography variant="h6" gutterBottom color="secondary">
                Your new career has just begun. Building a successful career is
                a long journey that requires a commitment to continuous learning
                and development of your skills and knowledge. We will
                continuously follow you through your journey to help you along
                the way.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </ItemsCarousel>
    </Section>
  );
};

export default ProgramSection;
