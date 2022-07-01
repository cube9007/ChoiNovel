import { createTheme as createMuiTheme } from "@mui/material/styles";

export const DefaultTheme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
  },
  button: {
    fontSize: "inherit",
  },
  palette: {
    primary: {
      main: "#2245FF",
    },
    secondary: {
      main: "#353535",
    },
    black: {
      main: "#000",
      dark: "#222",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      dark: "#eee",
      contrastText: '#000',
    }
  }
});

