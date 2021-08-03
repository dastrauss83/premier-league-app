import { AppBar, Grid, Toolbar, Button, Typography } from "@material-ui/core";
import { useStyles } from "../Styling";

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              className={classes.navbarButton}
            >
              <Typography className={classes.navbarText}>
                Premier League Table
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
