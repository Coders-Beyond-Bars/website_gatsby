import { makeStyles } from "@material-ui/styles";
import {
  link,
  flex,
  horizontalCenter,
  verticalCenter
} from "../cbb-material-ui";

const useStyles = makeStyles({
  link,
  verticalCenter: {
    ...flex,
    ...verticalCenter
  },
  horizontalCenter: {
    ...flex,
    ...horizontalCenter
  },
  image: {
    margin: 0,
    width: "100%"
  }
});

export default useStyles;
