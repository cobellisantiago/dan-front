import React from 'react';
import PropTypes from 'prop-types';
import {
 Box, Modal as MuiModal, IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  mainContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px'
  },
  header: {
    display: 'flex',
    flex: 0,
    alignItems: 'center',
    marginBottom: '0px'
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  closeButton: {
    flex: 0
  }
});

const Modal = ({
  title,
  children,
  containerClass,
  contentClass,
  sidebarVisible,
  height,
  width,
  onClose,
  ...rest
}) => {
  const classes = useStyles();
  const r = React.useRef();

  return (
    <MuiModal ref={r} {...rest}>
      <Box className={classes.mainContainer} p={5} pl={{ xs: 5, md: sidebarVisible ? 37 : 5 }}>
        <Box className={`${classes.paper} ${containerClass || ''}`} style={{ height, width }}>
          <Box className={classes.header} mx={5} my={4}>
            <Box className={classes.title}>{title}</Box>
            <Box className={classes.closeButton}>
              <IconButton onClick={onClose}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
          <Box flex={1} overflow="hidden" className={contentClass}>
            {children}
          </Box>
        </Box>
      </Box>
    </MuiModal>
  );
};

Modal.defaultProps = {
  disableBackdropClick: true,
  sidebarVisible: true,
  children: null,
  title: '',
  containerClass: '',
  contentClass: '',
  width: undefined,
  height: undefined,
  onClose: () => {}
};

Modal.propTypes = {
  title: PropTypes.any,
  disableBackdropClick: PropTypes.bool,
  sidebarVisible: PropTypes.bool,
  children: PropTypes.any,
  containerClass: PropTypes.string,
  contentClass: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClose: PropTypes.func
};

export default Modal;
