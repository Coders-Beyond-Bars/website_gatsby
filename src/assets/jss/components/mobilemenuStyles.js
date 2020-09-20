const mobilemenuStyles = theme => ({
    iconButton: {
      marginRight: 10,
    },
    list: {
      width: 250,
      paddingTop: 25,
    },
    listItemText: {
      color: theme.palette.secondary.main,
      primaryTypographyProps: {
        fontFamily: theme.typography.title.fontFamily,
      },
    },
    drawer: {
      backgroundColor: 'gray',
    },
  });

export default mobilemenuStyles;
