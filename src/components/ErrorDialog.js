import React from 'react';
import PropTypes from 'prop-types';
import {
Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button, Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  content: {
    whiteSpace: 'pre-wrap'
  },
  title: {
    backgroundColor: '#FC8380',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }
}));

const ErrorDialog = ({ title, message, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ ContentComponent: Paper }}
    >
      <DialogTitle id="alert-dialog-title" className={classes.title}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" className={classes.content}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="secondary"
          variant="contained"
          size="medium"
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ErrorDialog.defaultProps = {
  title: 'Error',
  message: 'An unexpected error has ocurred.'
};

ErrorDialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string
};

export default ErrorDialog;
