import { logo, subtitle } from '../cbb-material-ui'

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
  logo,
  subtitle
});

export default navbarStyles;
