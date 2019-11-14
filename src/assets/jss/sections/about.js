import { makeStyles, createStyles } from "@material-ui/styles";
import { imageRounded } from "../cbb-material-ui";

const useStyles = makeStyles(theme =>
  createStyles({
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
    },
    grid: {
      marginBottom: 0,
      [theme.breakpoints.only("xs")]: {
        marginBottom: 15
      }
    }
  })
);

export default useStyles;
