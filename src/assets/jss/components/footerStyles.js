const footerStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    color: "white",
    minHeight: 200,
    padding: "35px 0 15px 0",
    backgroundColor: theme.palette.secondary.main,
  },
  item: {
    padding: "0 0 20px 0",
  },
  bottom: {
    color: "white",
    padding: "15px 0 15px 0",
    backgroundColor: theme.palette.secondary.light,
  },
  contact: {
    display: "flex",
    justifyContent: "space-between",
  },
  grid: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.only("xs")]: {
      justifyContent: "flex-start",
      marginTop: 8,
    },
  },
});

export default footerStyles;
