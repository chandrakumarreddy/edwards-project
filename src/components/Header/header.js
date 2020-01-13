import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "../shared/Drawer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  accountIcon: {
    marginRight: theme.spacing(2),
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1
  },
  icon: {
    cursor: "pointer",
    marginRight: theme.spacing(2)
  }
}));

function Header({
  leftMenu = [],
  rightMenu = [],
  backButton = false,
  menuIcon = false,
  history
}) {
  const [openDrawer, setOpenDrawer] = React.useState({
    left: false
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {backButton && (
            <ArrowBackRoundedIcon
              onClick={history.goBack}
              className={classes.icon}
            />
          )}
          {menuIcon && (
            <MenuIcon
              className={classes.icon}
              onClick={() => setOpenDrawer({ left: true })}
            />
          )}{" "}
          {openDrawer && (
            <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          )}
          {leftMenu.map((menu, index) => (
            <Box key={index} className={classes.icon}>
              {menu.name ?? menu}
            </Box>
          ))}
          <Box className={classes.accountIcon}>
            {rightMenu.map((menu, index) => (
              <Box
                key={index}
                className={`${menu.styles ?? "true" ? classes.icon : ""}`}
              >
                {menu.name ?? menu}
              </Box>
            ))}
            <PersonOutlineRoundedIcon className={classes.icon} />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
