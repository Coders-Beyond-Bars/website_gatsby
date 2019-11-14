import {
  profilePic,
  textItalic,
  flex,
  verticalCenter
} from "../cbb-material-ui";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  profilePic,
  title: {
    ...textItalic
  },
  verticalCenter: {
    ...flex,
    ...verticalCenter
  }
});

export default useStyles;
