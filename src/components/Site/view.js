import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import RoomIcon from "@material-ui/icons/Room";
import HeartIcon from "@material-ui/icons/Favorite";
import Header from "../Header/header";
import SystemStatus from "./systemStatus/systemStatus";
import AddSession from "./sessions/addSession";

const useStyles = makeStyles(theme => ({
  container: {
    width: "90%",
    margin: "2rem auto 0"
  },
  viewWrapper: {
    backgroundColor: "gray",
    minHeight: "100%",
    color: "#fff"
  },
  overview: {
    display: "flex",
    justifyContent: "space-between",
    margin: "2rem 0"
  },
  card: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "#fff"
  },
  p1: {
    padding: "8px"
  },
  m2: {
    marginBottom: theme.spacing(2)
  },
  flex: {
    display: "flex"
  },
  center: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  white: {
    color: "#fff"
  },
  bgGray: {
    backgroundColor: "gray"
  },
  brGreen: {
    border: "1px solid green"
  },
  fillGreen: {
    fill: "green"
  },
  fz12: {
    fontSize: "12px"
  },
  textCenter: {
    textAlign: "center"
  },
  bold: {
    fontWeight: "bold"
  },
  ptb: {
    padding: "0 1rem"
  },
  roundRed: {
    width: "8px",
    minHeight: "8px",
    borderRadius: "50%",
    backgroundColor: "red",
    display: "inline-block"
  },
  flexRowCenter: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0"
  },
  pointer: {
    cursor: "pointer"
  },
  link: {
    textDecoration: "none"
  }
}));

export default function View({ match: { params }, location: { pathname } }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <Box className={classes.viewWrapper}>
      <Header
        menuIcon
        rightMenu={[
          <NotificationsNoneIcon />,
          { name: params.site?.replace("-", " "), styles: false }
        ]}
        leftMenu={[{ name: params.type?.replace("-", " "), styles: true }]}
      />
      {open && <AddSession open={open} setOpen={setOpen} classes={classes} />}
      <Box className={classes.container}>
        <Box className={classes.overview}>
          <Typography component="h1" variant="h5">
            Over view
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            ADD SESSION
          </Button>
        </Box>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  component="h5"
                  variant="caption"
                  className={`${classes.m2} ${classes.white}`}
                >
                  Current monitoring sessions (8)
                </Typography>
                {[1, 2].map(() => (
                  <Link
                    to={`${pathname}/123456`}
                    className={classes.link}
                    key={Math.random()}
                  >
                    <Card className={`${classes.m2} ${classes.pointer}`}>
                      <CardContent
                        className={`${classes.p1} ${classes.bgGray}`}
                      >
                        <Typography
                          component="h5"
                          variant="caption"
                          className={`${classes.flex} ${classes.white}`}
                        >
                          Micheal Wilson (Male, 56 years)
                          <Box className={classes.white}>
                            <RoomIcon />
                          </Box>
                        </Typography>
                        <Typography
                          component="h5"
                          variant="caption"
                          className={`${classes.flex} ${classes.white} ${classes.m2}`}
                        >
                          Device Name &nbsp;&nbsp;&nbsp;
                          <Box className={classes.white}>HCM1234567</Box>
                        </Typography>
                        <Box>
                          <Grid container spacing={4}>
                            {[1, 2, 3, 4].map(() => (
                              <Grid item xs={3} key={Math.random()}>
                                <Card className={classes.brGreen}>
                                  <CardContent
                                    className={`${classes.p1} ${classes.center} ${classes.card}`}
                                  >
                                    <Box>
                                      <HeartIcon
                                        className={`${classes.fillGreen} ${classes.fz12}`}
                                      />{" "}
                                      Co
                                    </Box>
                                    <Box>6.2</Box>
                                    <Box>%</Box>
                                  </CardContent>
                                </Card>
                              </Grid>
                            ))}
                          </Grid>
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <SystemStatus classes={classes} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
