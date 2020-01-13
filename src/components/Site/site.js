import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "../Header/header";
import TimelineIcon from "@material-ui/icons/Timeline";

const useStyles = makeStyles(theme => ({
  siteWrapper: {
    backgroundColor: "gray",
    minHeight: "100vh"
  },
  site: {
    maxWidth: "90%",
    margin: "0 auto",
    paddingTop: theme.spacing(10)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "250px",
    cursor: "pointer"
  },
  header: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: "#fff"
  },
  icon: {
    width: "10rem",
    minHeight: "10rem"
  },
  link: {
    textDecoration: "none"
  }
}));

function Sites({ location }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header backButton />
      <Box className={classes.siteWrapper}>
        <Box className={classes.site}>
          <Typography component="h1" variant="h5" className={classes.header}>
            Select an App
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Connected Insights
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Acumen Analytics
                </Typography>
                <TimelineIcon className={classes.icon} />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Link
                to={`${location.pathname}/Remote-View`}
                className={classes.link}
              >
                <Paper className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    Remote view
                  </Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Clinical View
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Sites;
