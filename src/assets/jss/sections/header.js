import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    header: {
      [theme.breakpoints.only("xs")]: {
        paddingTop: 100
      }
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.only("xs")]: {
        flexDirection: "column"
      }
    }
  })
);

export default useStyles;
