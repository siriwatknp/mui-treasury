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
import IconButton from '@material-ui/core/IconButton';
import PeaIcon from './PeaIcon';

const PeaDialog = ({
  className,
  title,
  titleVariant,
  closeButtonHidden,
  content,
  actions,
  onClose,
  ...props
}) => (
  <Dialog className={cx('PeaDialog', className)} onClose={onClose} {...props}>
    <DialogTitle
      className={cx(
        titleVariant === 'contained' && 'DialogTitle--contained',
        titleVariant === 'secondaryCentered' &&
          'DialogTitle--secondaryCentered',
      )}
    >
      {title}
      {!closeButtonHidden && (
        <IconButton className={'DialogCloseButton'} onClick={onClose}>
          <PeaIcon icon={'close'} />
        </IconButton>
      )}
    </DialogTitle>
    <DialogContent className={'DialogContent--root'}>
      {typeof content === 'string' ? (
        <Typography align={'center'}>{content}</Typography>
      ) : (
        content
      )}
    </DialogContent>
    <DialogActions className={'DialogActions-root'}>
      {React.Children.toArray(actions)}
    </DialogActions>
  </Dialog>
);

PeaDialog.propTypes = {
  titleVariant: PropTypes.oneOf(['contained', 'secondaryCentered']),
  closeButtonHidden: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  actions: PropTypes.arrayOf(PropTypes.object),
};
PeaDialog.defaultProps = {
  titleVariant: 'secondaryCentered',
  closeButtonHidden: false,
  className: '',
  title: '',
  content: '',
  actions: [],
};
PeaDialog.metadata = {
  name: 'Pea Confirmation',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaDialog.BlockedActions = (
  onSubmit = () => alert('Blocked!'),
  onCancel = () => alert('Canceled!'),
) => [
  <Button onClick={onCancel}>Cancel</Button>,
  <Button className={'MuiButton--danger'} onClick={onSubmit}>
    Block
  </Button>,
];

export default PeaDialog;
