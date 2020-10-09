import { makeStyles } from "@material-ui/styles";
import {
  profilePic,
  profileCardAction,
  profileCard,
  textWhite,
  imageRounded,
  flex,
  verticalCenter,
  horizontalCenter,
  fullWidth
} from "../cbb-material-ui";

const useStyles = makeStyles({
  profileCard,
  profileCardAction,
  profilePic,
  textWhite,
  imageRounded,
  fullWidth,
  section: {
    backgroundColor: "#fff"
  },
  verticalCenter: {
    ...flex,
    ...verticalCenter
  },
  horizontalCenter: {
    ...flex,
    ...horizontalCenter
  }
});

export default useStyles;
