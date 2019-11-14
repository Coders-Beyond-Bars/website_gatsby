import { makeStyles } from "@material-ui/styles";
import {
  profilePic,
  profileCardAction,
  profileCard,
  textWhite,
  imageRounded,
  flex,
  verticalCenter,
  horizontalCenter
} from "../cbb-material-ui";

const useStyles = makeStyles({
  profileCard,
  profileCardAction,
  profilePic,
  textWhite,
  imageRounded,
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
