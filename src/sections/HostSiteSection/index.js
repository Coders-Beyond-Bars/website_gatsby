import React from "react";
import { Link } from "gatsby";
import { Typography, Grid } from "@material-ui/core";
import Section from "components/Section";
import useStyles from "assets/jss/pages/program";

import bprc from "assets/images/hostsites/bprc.png";
import southbay from "assets/images/hostsites/southbay.png";
import youth_center from "assets/images/hostsites/youth_center.png";

const HostSiteSection = props => {
  const classes = useStyles();

  return (
    <Section title="Host Sites" shaded {...props}>
      <Grid container spacing={4}>
        <Grid item sm={4} xs={12}>
          <img
            src={bprc}
            alt="Boston Pre-release Center"
            className={classes.hostSitePic}
          />
          <Typography variant="h6" align="center">
            Boston Pre-release Center
          </Typography>
          <Typography variant="body1" align="center">
            430 Canterbury Street <br />
            Roslindale, MA 02131
          </Typography>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img
            src={southbay}
            alt="South Bay House of Correction"
            className={classes.hostSitePic}
          />
          <Typography variant="h6" align="center">
            South Bay House of Correction
          </Typography>
          <Typography variant="body1" align="center">
            20 Bradston Street
            <br />
            Boston, MA 02118
          </Typography>
        </Grid>
        <Grid item sm={4} xs={12}>
          <img
            src={youth_center}
            alt="Judge John J. Connelly Youth Center"
            className={classes.hostSitePic}
          />
          <Typography variant="h6" align="center">
            Judge John J. Connelly Youth Center
          </Typography>
          <Typography variant="body1" align="center">
            450 Canterbury Street
            <br />
            Roslindale, MA 02131
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            We are expanding our relationship with correctional facilities in
            Massachusetts and broader New England region. If you are a staff or
            an educator inside a correctional facility, and you wish to bring
            one of our programs to your location, please{" "}
            <Link to="/contact/" className={classes.link}>
              contact us
            </Link>{" "}
            and we can discuss how we can collaborate to make this a reality.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
};

export default HostSiteSection;
