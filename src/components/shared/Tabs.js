import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "darkgray"
  }
}));

export default function SimpleTabs(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Patient Overview" {...a11yProps(0)} />
          <Tab label="General information" {...a11yProps(1)} />
          <Tab label="Lab Data" {...a11yProps(2)} />
          <Tab label="Patient History" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.tab1()}
      </TabPanel>
      <TabPanel value={value} index={1}>
        General information
        <h1>Work in Progress</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Lab Data
        <h1>Work in Progress</h1>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Patient History
        <h1>Work in Progress</h1>
      </TabPanel>
    </div>
  );
}
