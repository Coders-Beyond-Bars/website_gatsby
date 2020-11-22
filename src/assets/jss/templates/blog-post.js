import { makeStyles } from "@material-ui/core/styles";
import { tag } from "../cbb-material-ui";

const blogposttemplateStyle = makeStyles({
  root: {
    paddingTop: 60,
  },
  subtitle: {
    display: "inline",
  },
  tags: {
    margin: "15px 0",
  },
  tag,
});

export default blogposttemplateStyle;
