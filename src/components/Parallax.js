import { withStyles } from "@material-ui/styles";
import React from "react";

const styles = (theme) => ({
  section: {
    height: "40vh",
  },
});

const Parallax = ({ classes, image }) => {
  const style = {
    backgroundImage: `url(${image})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return <section className={classes.section} style={style} />;
};

export default withStyles(styles)(Parallax);
