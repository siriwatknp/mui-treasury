import React from 'react';
import PropTypes from 'prop-types';
import SharedSidebarTrigger from './internal/SharedSidebarTrigger';
import useSidebarConfig from '../hooks/useSidebarConfig';

const SidebarTrigger = props => (
  <SharedSidebarTrigger {...props} useSidebarConfig={useSidebarConfig} />
);

SidebarTrigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
SidebarTrigger.defaultProps = {
  children: null,
  onClick: () => {},
};

export default SidebarTrigger;
