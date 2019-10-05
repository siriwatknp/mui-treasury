import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

const PeaTooltip = ({ title, children, ...props }) => (
  <Tooltip title={title} {...props}>
    {children}
  </Tooltip>
);
PeaTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PeaTooltip.metadata = {
  name: 'Pea Tooltip',
};

PeaTooltip.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaTooltip;
