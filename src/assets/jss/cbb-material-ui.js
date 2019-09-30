import { createMuiTheme } from "@material-ui/core/styles";

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
    }
  },
  shape: {
    borderRadius: 25
  }
});

export { theme };
