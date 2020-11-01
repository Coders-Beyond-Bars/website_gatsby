import { makeStyles } from "@material-ui/styles";
import { imageRounded, fullWidth, flex, horizontalCenter, verticalCenter, link } from "../cbb-material-ui";

const useStyles = makeStyles({
  imageRounded,
  fullWidth,
  link,
  section: {
    backgroundColor: "#fff"
  },
  horizontalCenter,
  verticalCenter: {
    ...flex,
    ...verticalCenter
  }
});

export default useStyles;
