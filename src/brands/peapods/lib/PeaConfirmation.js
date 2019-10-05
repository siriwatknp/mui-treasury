/* eslint-disable no-alert, max-len */
import React from 'react';
import PropTypes from 'prop-types';
import PeaButton from './PeaButton';
import PeaDialog from './PeaDialog';
import PeaLoadingSpinner from './PeaLoadingSpinner';

const PeaConfirmation = ({
  open,
  title,
  content,
  onClose,
  onSubmit,
  submitLabel,
  submitting,
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
      <PeaButton
        elongated
        color={'danger'}
        size={'big'}
        onClick={onSubmit}
        disabled={submitting}
      >
        {submitting ? (
          <PeaLoadingSpinner size={20} style={{ margin: 0 }} />
        ) : (
          submitLabel
        )}
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
  submitLabel: PropTypes.string,
  submitting: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
PeaConfirmation.defaultProps = {
  className: '',
  title: '',
  content: '',
  submitLabel: 'Ok',
  submitting: false,
};
PeaConfirmation.metadata = {
  name: 'Pea Confirmation',
};

export default PeaConfirmation;
