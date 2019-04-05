/* eslint-disable no-alert, max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import PeaDialog from './PeaDialog';

const PeaConfirmation = ({
  open,
  title,
  content,
  onClose,
  onSubmit,
  ...props
}) => (
  <PeaDialog
    closeButtonHidden
    titleVariant={'contained'}
    title={title}
    content={content}
    open={open}
    onClose={onClose}
    actions={[
      <Button onClick={onClose}>Cancel</Button>,
      <Button className={'MuiButton--danger'} onClick={onSubmit}>
        Block
      </Button>,
    ]}
    {...props}
  />
);

PeaConfirmation.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
PeaConfirmation.defaultProps = {
  className: '',
  title: '',
  content: '',
};
PeaConfirmation.metadata = {
  name: 'Pea Confirmation',
};

export default PeaConfirmation;
