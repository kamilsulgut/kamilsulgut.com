import React, { FC, useState } from "react";
import {
  Button,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useStyles } from "../../constants/styles";

const Success: FC = () => {
  const [open, setOpen] = useState(true);
  const styles = useStyles();

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
      <DialogTitle
        className={styles.dialogSuccessTitle}
        id="success-dialog-title"
      >
        {"Sucessfull send!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          className={styles.dialogSuccessContent}
        >
          Thank's for visit.
        </DialogContentText>
        <DialogContentText
          id="alert-dialog-description"
          className={styles.dialogSuccessContent}
        ></DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          {" "}
          <DoneIcon className={styles.dialogSuccessActions} />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Success;
