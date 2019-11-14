import { imageRounded, link, flex, verticalCenter } from "../cbb-material-ui";

const homeStyles = {
  imageRounded,
  link,
  verticalCenter: {
    ...flex,
    ...verticalCenter
  }
};

export default homeStyles;
