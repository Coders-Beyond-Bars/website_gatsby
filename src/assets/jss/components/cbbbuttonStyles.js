const cbbbuttonStyles = (theme) => {
  return {
    button: {
      fontFamily: theme.typography.title.fontFamily,
      borderWidth: 5,
      borderColor: "white",
      borderRadius: 25,
      color: "white",
      textTransform: "capitalize",
      "&:hover": {
        borderColor: "white",
        borderWidth: 5,
        color: theme.palette.secondary.main,
      },
    },
    primaryColor: {
      borderColor: theme.palette.primary.main,
      color: "white",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
    secondaryColor: {
      borderColor: theme.palette.secondary.main,
      color: "white",
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        borderColor: theme.palette.secondary.light,
        color: "white",
        backgroundColor: theme.palette.secondary.light,
      },
    },
  };
};

export default cbbbuttonStyles;
