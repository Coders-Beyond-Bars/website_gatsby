import { makeStyles } from "@material-ui/styles";
import {
  profilePic,
  textItalic,
  flex,
  verticalCenter,
} from "../cbb-material-ui";

const useStyles = makeStyles({
  profilePic,
  title: {
    ...textItalic,
  },
  verticalCenter: {
    ...flex,
    ...verticalCenter,
  },
});

export default useStyles;
