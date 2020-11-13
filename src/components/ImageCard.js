import React, { useState } from "react";
import { Typography, Container, Grow } from "@material-ui/core";

import useStyles from "assets/jss/components/imagecardStyles";

const ImageCard = ({ image, title, description }) => {
  const [hover, setDescription] = useState(false);
  const classes = useStyles();

  const imageStyle = {
    background: `url(${image}) no-repeat center top`,
    backgroundSize: "cover",
  };

  const handleMouseEnter = () => {
    setDescription(true);
  };

  const handleMouseLeave = () => {
    setDescription(false);
  };

  return (
    <div
      className={classes.card}
      style={imageStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container maxWidth="lg">
        {!hover && (
          <Typography variant="h5" align="center" className={classes.title}>
            {title}
          </Typography>
        )}
        {hover && (
          <Grow in={hover}>
            <Typography variant="body1">{description}</Typography>
          </Grow>
        )}
      </Container>
    </div>
  );
};

export default ImageCard;
