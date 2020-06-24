const mobilemenuStyles = theme => ({
    iconButton: {
      marginRight: 10
    },
    list: {
      width: 250,
      paddingTop: 25
    },
    listItemText: {
      color: theme.palette.secondary.main,
      fontFamily: "Hammersmith One",
      primaryTypographyProps: {
        fontFamily: theme.typography.title.fontFamily
      }
    },
    drawer: {
      backgroundColor: "gray"
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    subHeader: {
      marginBottom: 0
    },
    subMenu: {
      paddingTop: 0,
      paddingBottom: 0
    }
});

export default mobilemenuStyles;
