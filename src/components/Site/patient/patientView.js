import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import C3Chart from "react-c3js";
import SpeedIcon from "@material-ui/icons/Speed";
import ListIcon from "@material-ui/icons/List";
import AppsIcon from "@material-ui/icons/Apps";
import CircularProgress from "@material-ui/core/CircularProgress";
import "c3/c3.css";
import Header from "../../Header/header";
import Tabs from "../../shared/Tabs";
import Label from "./label";
import { data, data1 } from "./data";
import SpeedMeter from "../../shared/SpeedMeter/SpeedMeter";

const useStyles = makeStyles(theme => ({
  bgGray: {
    backgroundColor: "gray",
    color: "#fff",
    minHeight: "100vh"
  },
  container: {
    width: "90%",
    margin: "1rem auto 0"
  },
  w85: {
    width: "85%",
    margin: "auto"
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
    marginRight: theme.spacing(1)
  },
  mtb: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  pointer: {
    cursor: "pointer"
  },
  yellow: {
    color: "yellow"
  },
  green: { color: "green" },
  miniCard: {
    padding: "4px !important",
    backgroundColor: "darkseagreen",
    display: "flex",
    justifyContent: "space-between"
  },
  menuIcons: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1)
  },
  mlr: {
    margin: "0 3px",
    cursor: "pointer"
  },
  fillGreen: {
    fill: "green"
  },
  flexCenter: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center"
  }
}));

export default function PatientView({ match: { params }, history }) {
  const [selected, setSelected] = React.useState("appIcon");
  const classes = useStyles();
  const selectedStyle = menu => {
    return `${selected === menu ? classes.fillGreen : ""}`;
  };
  const updateMenu = menu => {
    setSelected(menu);
  };

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
          <Typography component="h3" variant="h4">
            Micheal Wilson
          </Typography>{" "}
          <Box className={classes.ml2}>(Male, 56 years)</Box>
        </Box>
        <Box className={`${classes.flex} ${classes.mtb} ${classes.yellow}`}>
          <NotificationsNoneIcon className={classes.mr1} /> 2 Alarms available
        </Box>
        <Tabs
          tab1={() => (
            <Box className={`${classes.w85}`}>
              <C3Chart data={data} size={{ height: 160 }} />
              <Box className={classes.menuIcons}>
                <Box className={classes.mlr}>
                  <AppsIcon
                    className={selectedStyle("appIcon")}
                    onClick={() => updateMenu("appIcon")}
                  />
                </Box>
                <Box className={classes.mlr}>
                  <SpeedIcon
                    className={selectedStyle("speedIcon")}
                    onClick={() => updateMenu("speedIcon")}
                  />
                </Box>
                <Box className={classes.mlr}>
                  <ListIcon
                    className={selectedStyle("listIcon")}
                    onClick={() => updateMenu("listIcon")}
                  />
                </Box>
              </Box>
              {selected === "appIcon" && (
                <Grid container spacing={1}>
                  {[1, 2, 3, 4].map(() => (
                    <Grid item xs={6} key={Math.random()}>
                      <Card>
                        <CardContent className={classes.miniCard}>
                          <C3Chart
                            data={data1}
                            size={{ height: 120, width: 350 }}
                            legend={{
                              hide: true
                            }}
                          />
                          <Label />
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
              {selected === "speedIcon" && (
                <Grid container spacing={5}>
                  {[1, 2, 3, 4].map((_, index) => (
                    <Grid item xs={3} key={index}>
                      <Card>
                        <CardContent>
                          <SpeedMeter index={index} />
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          )}
        />
      </Box>
    </Box>
  );
}
