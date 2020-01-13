import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import Table from "../../shared/Table";

const rows = [
  {
    name: "Micheal",
    mrn: 23456789777,
    deviceName: "HCM1224342",
    gender: "male",
    do: "32",
    loc: "memphis"
  },
  {
    name: "Micheal",
    mrn: 23456789777,
    deviceName: "HCM1224342",
    gender: "male",
    do: "32",
    loc: "memphis"
  },
  {
    name: "Micheal",
    mrn: 23456789777,
    deviceName: "HCM1224342",
    gender: "male",
    do: "32",
    loc: "memphis"
  },
  {
    name: "Micheal",
    mrn: 23456789777,
    deviceName: "HCM1224342",
    gender: "male",
    do: "32",
    loc: "memphis"
  },
  {
    name: "Micheal",
    mrn: 23456789777,
    deviceName: "HCM1224342",
    gender: "male",
    do: "32",
    loc: "memphis"
  }
];

const useStyles = makeStyles(theme => ({
  m50: { width: "50%", margin: "0 auto" },
  searchField: {
    backgroundColor: "#fff",
    borderRadius: "6px",
    marginBottom: "2rem"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#fff",
    cursor: "pointer"
  }
}));

export default function AddSession({ open, setOpen, classes }) {
  const sessionClasses = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"md"}
        fullWidth={true}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        PaperProps={{ className: classes.bgGray }}
      >
        <DialogTitle id="scroll-dialog-title">
          <Typography
            component="h5"
            variant="caption"
            className={`${classes.white}`}
          >
            Available remote Sessions
          </Typography>
          <CloseIcon
            className={sessionClasses.closeButton}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Box className={sessionClasses.m50}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                placeholder="Search by patient name , MRN"
                name="email"
                autoComplete="off"
                variant="outlined"
                className={sessionClasses.searchField}
              />
            </Box>
            <Table rows={rows} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="outlined"
            className={classes.white}
          >
            CANCEL
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            ADD SESSION
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
