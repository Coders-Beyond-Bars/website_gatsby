import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    borderRadius: 15,
    minHeight: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff"
  },
  title: {
    color: "#ffffff",
    textShadow: "1px 1px 2px #cccccc"
  }
});

export default useStyles;
