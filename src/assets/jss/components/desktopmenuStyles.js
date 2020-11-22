import { makeStyles } from "@material-ui/styles";

const desktopmenuStyles = makeStyles((theme) => ({
  menuLink: {
    textTransform: "capitalize",
    fontFamily: theme.typography.title.fontFamily,
    "&:hover": {
      color: "inherit",
    },
    margin: "0 5px",
  },
}));

export default desktopmenuStyles;
