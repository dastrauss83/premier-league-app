import { createTheme, makeStyles } from "@material-ui/core";
import { red, blue } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: blue[800],
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8, 0, 6),
  },
  navbarText: {
    color: "white",
  },
  navbarButton: {
    color: blue[800],
  },
}));
