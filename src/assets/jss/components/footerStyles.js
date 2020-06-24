const footerStyles = theme => ({
  root: {
    flexGrow: 1
  },
  main: {
    color: "white",
    height: 200,
    padding: "25px 0 25px 0",
    backgroundColor: theme.palette.secondary.main
  },
  bottom: {
    color: "white",
    padding: "15px 0 15px 0",
    backgroundColor: theme.palette.secondary.light
  },
  contact: {
    display: "flex",
    justifyContent: "space-between"
  },
  grid: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "flex-start",
      marginTop: 8
    }
  }
});

export default footerStyles
