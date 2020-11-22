import { tag } from "../cbb-material-ui";

const blogPostCardStyle = (theme) => ({
  card: {
    height: 450,
    position: "relative",
  },
  media: {
    height: 250,
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  cardActions: {
    padding: 15,
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "inherit",
    display: "block",
    textDecoration: "none",
  },
  tag,
});

export default blogPostCardStyle;
