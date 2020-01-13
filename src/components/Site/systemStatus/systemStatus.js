import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function SystemStatus({ classes }) {
  return (
    <React.Fragment>
      <Card className={`${classes.card} ${classes.m2}`} id="systemStatus">
        <CardContent>
          <Typography
            component="h5"
            variant="caption"
            className={`${classes.m2} ${classes.white}`}
          >
            System Status
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Card className={classes.m2}>
                <CardContent className={`${classes.p1} ${classes.bgGray}`}>
                  <Typography
                    component="h6"
                    variant="subtitle2"
                    className={`${classes.flex} ${classes.white} ${classes.textCenter}`}
                  >
                    CURRENT MONITORING SESSIONS
                  </Typography>
                  <Typography
                    component="h2"
                    variant="h2"
                    className={`${classes.flex} ${classes.white} ${classes.center} ${classes.bold}`}
                  >
                    8
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.m2}>
                <CardContent className={`${classes.p1} ${classes.bgGray}`}>
                  <Typography
                    component="h6"
                    variant="subtitle2"
                    className={`${classes.flex} ${classes.white} ${classes.textCenter} ${classes.ptb}`}
                  >
                    NUMBER OF PATIENT ALARMS
                  </Typography>
                  <Typography
                    component="h2"
                    variant="h2"
                    className={`${classes.flex} ${classes.white} ${classes.center} ${classes.bold} `}
                  >
                    35
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card className={classes.card} id="alarms">
        <CardContent>
          <Typography
            component="h5"
            variant="caption"
            className={`${classes.m2} ${classes.white}`}
          >
            Alarms (35)
          </Typography>
          <Card className={classes.white}>
            <CardContent className={classes.bgGray}>
              {[1, 2, 3, 4, 5].map(() => (
                <Box className={classes.flexRowCenter} key={Math.random()}>
                  <Box>
                    <div className={classes.roundRed} />
                    &nbsp;&nbsp;&nbsp;&nbsp;John:svv exceeded 17%
                  </Box>
                  <Box>x</Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
