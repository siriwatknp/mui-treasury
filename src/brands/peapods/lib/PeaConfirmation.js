/* eslint-disable no-alert, max-len */
import React from 'react';
import PropTypes from 'prop-types';
import PeaButton from './PeaButton';
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
      <PeaButton elongated color={'danger'} size={'big'} onClick={onSubmit}>
        Block
      </PeaButton>,
      <PeaButton elongated color={'secondary'} size={'big'} onClick={onClose}>
        Cancel
      </PeaButton>,
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
