import { createMuiTheme } from "@material-ui/core/styles";

const profileCard = {
  backgroundColor: "inherit",
  border: 0,
  "&:hover": {
    backgroundColor: "inherit"
  }
};

const profileCardAction = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "inherit"
  }
};

const profilePic = {
  maxWidth: "80%",
  borderRadius: 200,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};

const imageRounded = {
  borderRadius: 15
};

const textWhite = {
  color: "#fff"
};

const textItalic = {
  fontStyle: "italic"
};

const link = {
  color: "inherit",
  fontWeight: "bold",
  textDecoration: "none"
};

const flex = {
  display: "flex",
  flexDirection: "column"
};

const verticalCenter = {
  justifyContent: "center"
};

const horizontalCenter = {
  alignItems: "center"
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FDD146",
      contrastText: "#fff"
    },
    secondary: {
      main: "#6D6E71",
      light: "#D1D3D4",
      contrastText: "#fff"
    }
  },
  typography: {
    fontFamily: "'Roboto', 'Open Sans', 'Arial', sans-serif",
    h1: {
      fontFamily: "'OCRAstd'"
    },
    h2: {
      fontFamily: "'OCRAstd'"
    },
    h3: {
      fontFamily: "'OCRAstd'"
    },
    h4: {
      fontFamily: "'OCRAstd'"
    },
    h5: {
      fontFamily: "'Hammersmith One'"
    },
    h6: {
      fontFamily: "'Hammersmith One'"
    },
    title: {
      fontFamily: "'OCRAstd'"
    },
    body1: {
      fontSize: 14
    }
  },
  shape: {
    borderRadius: 25
  }
});

export {
  theme,
  profilePic,
  profileCard,
  profileCardAction,
  imageRounded,
  textWhite,
  textItalic,
  link,
  flex,
  verticalCenter,
  horizontalCenter
};
