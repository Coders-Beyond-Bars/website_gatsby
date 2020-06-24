const navbarStyles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  logoLink: {
    display: "flex",
    color: "white",
    "&:hover": {
      textDecoration: "none"
    }
  },
  logo: {
    lineHeight: 1.0
  },
  subtitle: {
    marginLeft: 20,
    lineHeight: 0.5,
    fontSize: '1.2em'
  }
});

export default navbarStyles;
