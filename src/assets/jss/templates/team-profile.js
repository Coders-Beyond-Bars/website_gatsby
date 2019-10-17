import { profilePic, textItalic } from "../cbb-material-ui";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  profilePic,
  title: {
    ...textItalic
  }
});

export default useStyles;
