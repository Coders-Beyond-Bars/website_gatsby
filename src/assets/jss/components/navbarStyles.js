import { subtitle } from '../cbb-material-ui'

const navbarStyles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  transparent: {
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none"
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
  logo: {
    display: 'flex',
    alignSelf: 'center',
    flexGrow: 1,
    paddingTop: 10
  },
  logoLink: {
    display: "flex",
    color: "white",
    "&:hover": {
      textDecoration: "none"
    }
  },
  link: {
    color: 'inherit',
    textDecoration: "none"
  },
  subtitle
});

export default navbarStyles;
