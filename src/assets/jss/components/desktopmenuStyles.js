const desktopmenuStyles = theme => ({
  menuLink: {
    textTransform: "capitalize",
    fontFamily: theme.typography.title.fontFamily,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  dropDownMenu: {
    borderRadius: 5
  }
});

export default desktopmenuStyles;
