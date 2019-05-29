import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';

const variantIcon = {
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
  info: 'info',
};

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: theme.palette.primary.main,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.light,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const PeaToast = ({
  className,
  open,
  onClose,
  message,
  variant,
  position,
  timeout,
  closeOnClickOutside,
  ...other
}) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (!closeOnClickOutside && reason === 'clickaway') {
      return;
    }
    onClose(false);
  };

  return (
    <Snackbar
      anchorOrigin={position}
      open={open}
      autoHideDuration={
        variant === 'error' || variant === 'warning' ? null : timeout
      }
      onClose={handleClose}
    >
      <SnackbarContent
        className={cx(classes[variant], className)}
        aria-describedby="pea-toast"
        message={
          <span id="pea-toast" className={classes.message}>
            <Icon className={cx(classes.icon, classes.iconVariant)}>
              {variantIcon[variant]}
            </Icon>
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <Icon className={classes.icon}>close</Icon>
          </IconButton>,
        ]}
        {...other}
      />
    </Snackbar>
  );
};

PeaToast.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  position: PropTypes.shape({
    horizontal: PropTypes.string,
    vertical: PropTypes.string,
  }),
  timeout: PropTypes.number,
  closeOnClickOutside: PropTypes.bool,
};

PeaToast.defaultProps = {
  className: '',
  open: false,
  onClose: () => {},
  position: {
    horizontal: 'center',
    vertical: 'bottom',
  },
  timeout: 3000,
  closeOnClickOutside: false,
};

PeaToast.metadata = {
  name: 'Pea Toast',
};

PeaToast.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaToast;
