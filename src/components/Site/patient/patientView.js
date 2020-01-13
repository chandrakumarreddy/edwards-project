import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import Header from "../../Header/header";
import Tabs from "../../shared/Tabs";

const useStyles = makeStyles(theme => ({
  bgGray: {
    backgroundColor: "gray",
    color: "#fff",
    minHeight: "100vh"
  },
  container: {
    width: "90%",
    margin: "2rem auto 0"
  },
  details: {
    display: "flex",
    justifyContent: "space-between"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  ml2: {
    marginLeft: theme.spacing(2)
  },
  mr2: {
    marginRight: theme.spacing(2)
  },
  mr1: {
    marginRight: theme.spacing(2)
  },
  mtb: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  pointer: {
    cursor: "pointer"
  },
  yellow: {
    color: "yellow"
  }
}));

export default function PatientView({ match: { params }, history }) {
  const classes = useStyles();
  return (
    <Box className={classes.bgGray}>
      <Header
        menuIcon
        rightMenu={[
          <NotificationsNoneIcon />,
          { name: params.site?.replace("-", " "), styles: false }
        ]}
        leftMenu={[{ name: params.type?.replace("-", " "), styles: true }]}
      />
      <Box className={classes.container}>
        <Box className={`${classes.details} `}>
          <Box>
            <ArrowBackRoundedIcon
              className={classes.pointer}
              onClick={history.goBack}
            />
          </Box>
          <Box>
            <Button variant="contained" color="primary">
              Remove Session
            </Button>
          </Box>
        </Box>
        <Box className={classes.flex}>
          <Typography component="h1" variant="h3">
            Micheal Wilson
          </Typography>{" "}
          <Box className={classes.ml2}>(Male, 56 years)</Box>
        </Box>
        <Box className={`${classes.flex} ${classes.mtb} ${classes.yellow}`}>
          <NotificationsNoneIcon className={classes.mr1} /> 2 Alarms available
        </Box>
        <Tabs />
      </Box>
    </Box>
  );
}
