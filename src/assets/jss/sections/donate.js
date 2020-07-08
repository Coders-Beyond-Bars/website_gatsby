import { makeStyles } from "@material-ui/styles";
import { imageRounded } from "../cbb-material-ui";

const useStyles = makeStyles({
  imageRounded,
  div: {
    display: "flex",
    flexDirection: "column",
    justify: "center"
  },
  donateButton: {
    maxWidth: "80%"
  }
});

export default useStyles;
