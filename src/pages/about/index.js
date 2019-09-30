import React, { Component } from "react";
import Helmet from "react-helmet";
import withStyles from "@material-ui/core/styles/withStyles";

import {
  Typography,
  Fade,
  Container,
  Grid,
  Card,
  CardActionArea
} from "@material-ui/core";

import { LandingLayout } from "components/Layout";

import Section from "components/Section";
import MissionSection from "sections/MissionSection";

import bg from "assets/images/background/bg11.jpg";
import richardkim from "assets/images/team/richardkim.jpg";
import lewvalenti from "assets/images/team/lewvalenti.jpg";
import bobbalfour from "assets/images/team/bobbalfour.jpg";
import marrkharris from "assets/images/team/marrkharris.jpg";
import anjalimoorthy from "assets/images/team/anjalimoorthy.jpg";

const styles = theme => ({
  profileCard: {
    backgroundColor: "inherit",
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

class AboutUs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <Helmet>
          <title>Coders Beyond Bars - About Us</title>
        </Helmet>
        <LandingLayout>
          <Section image={bg} shaded halfScreen vcenter>
            <Container maxWidth="lg">
              <Fade in={true} timeout={2000}>
                <Typography variant="h4">About Us</Typography>
              </Fade>
            </Container>
          </Section>
          <MissionSection id="mission" shaded />
          <Section center title="What We Do">
            <Container maxWidth="lg">
              <Typography variant="body1">What we do</Typography>
            </Container>
          </Section>
          <Section shaded center title="Team">
            <Grid container spacing={1} justify="center">
              <Grid item sm={4} md={3}>
                <Card className={classes.profileCard} elevation={0}>
                  <CardActionArea className={classes.profileCardAction}>
                    <img
                      src={richardkim}
                      alt="Richard Kim"
                      className={classes.profilePic}
                    />
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      className={classes.textWhite}
                    >
                      Richard Kim
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      className={classes.textWhite}
                    >
                      Co-founder & Head of Technology Education
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} md={3}>
                <Card className={classes.profileCard} elevation={0}>
                  <CardActionArea className={classes.profileCardAction}>
                    <img
                      src={lewvalenti}
                      alt="Lew Valenti"
                      className={classes.profilePic}
                    />
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      className={classes.textWhite}
                    >
                      Lew Valenti
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      className={classes.textWhite}
                    >
                      Head of Corporate Partnerships
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} md={3}>
                <Card className={classes.profileCard} elevation={0}>
                  <CardActionArea className={classes.profileCardAction}>
                    <img
                      src={bobbalfour}
                      alt="Bob Balfour"
                      className={classes.profilePic}
                    />
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      className={classes.textWhite}
                    >
                      Bob Balfour
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      className={classes.textWhite}
                    >
                      Head of Student Outreach & Mentorship
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} md={3}>
                <Card className={classes.profileCard} elevation={0}>
                  <CardActionArea className={classes.profileCardAction}>
                    <img
                      src={marrkharris}
                      alt="Marrk Harris"
                      className={classes.profilePic}
                    />
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      className={classes.textWhite}
                    >
                      Marrk Harris
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      className={classes.textWhite}
                    >
                      Head of Social Media
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} md={3}>
                <Card className={classes.profileCard} elevation={0}>
                  <CardActionArea className={classes.profileCardAction}>
                    <img
                      src={anjalimoorthy}
                      alt="Anjali Moorthy"
                      className={classes.profilePic}
                    />
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      className={classes.textWhite}
                    >
                      Anjali Moorthy
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      className={classes.textWhite}
                    >
                      Co-founder (Alum.)
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Section>
        </LandingLayout>
      </>
    );
  }
}

export default withStyles(styles)(AboutUs);
