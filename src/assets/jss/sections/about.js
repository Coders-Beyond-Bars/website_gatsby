import { makeStyles } from "@material-ui/styles";
import { imageRounded } from "../cbb-material-ui";

const useStyles = makeStyles({
  imageCard: {
    position: "relative",
    textAlign: "center"
  },
  cardImage: {
    ...imageRounded,
    width: "100%"
  },
  cardTitle: {
    position: "absolute",
    top: "50%",
    color: "white"
  }
});

export default useStyles;
