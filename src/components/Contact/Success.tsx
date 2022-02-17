import React, { FC, useState } from "react";
import {
  Button,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";

const Success: FC = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="success-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="success-dialog-title">{"Sucessfull send!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Thank's for visit.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Success;
