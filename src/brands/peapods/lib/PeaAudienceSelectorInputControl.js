/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import PeaSearchInput from './PeaSearchInput';

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.defaultProps = {
  inputRef: () => {},
};

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

function PeaAudienceSelectorInputControl({
  children,
  innerProps,
  innerRef,
  selectProps: { classes, TextFieldProps },
}) {
  return (
    <PeaSearchInput
      fullWidth
      inputComponent={inputComponent}
      className="PeaSearchInput-audience"
      inputProps={{
        className: classes.input,
        ref: innerRef,
        children,
        ...innerProps,
      }}
      {...TextFieldProps}
    />
  );
}

PeaAudienceSelectorInputControl.defaultProps = {
  children: null,
  innerProps: null,
  innerRef: () => {},
};

PeaAudienceSelectorInputControl.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
};

export default PeaAudienceSelectorInputControl;
