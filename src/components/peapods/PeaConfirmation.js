/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';

const PeaConfirmation = ({ className, title, content, actions, ...props }) => (
  <Dialog className={cx('PeaConfirmation', className)} {...props}>
    <DialogTitle className={'DialogTitle--contained'}>{title}</DialogTitle>
    <DialogContent className={'DialogContent--root'}>
      {typeof content === 'string' ? (
        <Typography>{content}</Typography>
      ) : (
        content
      )}
    </DialogContent>
    <DialogActions className={'DialogActions-root'}>
      {React.Children.toArray(actions)}
    </DialogActions>
  </Dialog>
);

PeaConfirmation.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  actions: PropTypes.arrayOf(PropTypes.object),
};
PeaConfirmation.defaultProps = {
  className: '',
  title: '',
  content: '',
  actions: [],
};
PeaConfirmation.metadata = {
  name: 'Pea Confirmation',
};
PeaConfirmation.BlockedActions = (
  onSubmit = () => alert('Blocked!'),
  onCancel = () => alert('Canceled!'),
) => [
  <Button onClick={onCancel}>Cancel</Button>,
  <Button className={'MuiButton--danger'} onClick={onSubmit}>
    Block
  </Button>,
];

export default PeaConfirmation;
