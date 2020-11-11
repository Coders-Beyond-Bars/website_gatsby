import {
  imageRounded,
  fullWidth,
  link,
  flex,
  verticalCenter,
} from "../cbb-material-ui";

const homeStyles = {
  fullWidth,
  imageRounded,
  link,
  verticalCenter: {
    ...flex,
    ...verticalCenter,
  },
  buttonContainer: {
    margin: 20,
    display: "flex",
    justifyContent: "center",
  },
};

export default homeStyles;
