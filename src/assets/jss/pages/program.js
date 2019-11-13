import { makeStyles, createStyles } from "@material-ui/styles";
import {
  profilePic,
  textWhite,
  link,
  imageRounded,
  flex,
  verticalCenter,
  horizontalCenter
} from "../cbb-material-ui";

const useStyles = makeStyles(theme =>
  createStyles({
    hostSitePic: {
      ...profilePic
    },
    textWhite,
    link,
    image: {
      ...imageRounded,
      width: "100%",
      margin: 0
    },
    carouselItem: {
      ...flex,
      ...verticalCenter
    },
    horizontalCenter: {
      ...flex,
      ...horizontalCenter
    }
  })
);

export default useStyles;
