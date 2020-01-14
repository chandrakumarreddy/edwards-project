import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import HeartIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
  fillGreen: { fill: "green" },
  fz12: { fontSize: "12px" },
  card: {
    padding: "16px! important",
    width: "90px",
    backgroundColor: "darkslategrey",
    border: "3px solid darkgreen",
    color: "#fff",
    boxSizing: "border-box"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  mr1: {
    marginRight: theme.spacing(1)
  },
  bold: { fontWeight: "bold" },
  fz11: { fontSize: "1.2rem" }
}));

export default function Label() {
  const classes = useStyles();
  return (
    <Box className={`${classes.center} ${classes.mr1}`}>
      <Card className={classes.brGreen}>
        <CardContent
          className={`${classes.p1} ${classes.center} ${classes.card}`}
        >
          <Box className={classes.bold}>
            <HeartIcon className={`${classes.fillGreen} ${classes.fz12}`} /> Co
          </Box>
          <Box className={`${classes.bold} ${classes.fz11}`}>6.2</Box>
          <Box>L/mm</Box>
        </CardContent>
      </Card>
    </Box>
  );
}
