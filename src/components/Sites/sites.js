import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "../Header/header";

const useStyles = makeStyles(theme => ({
  sitesWrapper: {
    backgroundColor: "gray",
    minHeight: "100vh"
  },
  sites: {
    maxWidth: "80%",
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
  link: {
    textDecoration: "none"
  }
}));

export default function Site({ location }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Box className={classes.sitesWrapper}>
        <Box className={classes.sites}>
          <Typography component="h1" variant="h5" className={classes.header}>
            Select a Site
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Link
                to={`${location.pathname}/charity-hospital`}
                className={classes.link}
              >
                <Paper className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    Charity Hospital
                  </Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link
                to={`${location.pathname}/bedFord-hospital`}
                className={classes.link}
              >
                <Paper className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    BedFord Hospital
                  </Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link
                to={`${location.pathname}/st.james-hospital`}
                className={classes.link}
              >
                <Paper className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    St.james Hospital
                  </Typography>
                </Paper>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}
