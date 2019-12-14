import React from 'react';
import PropTypes from 'prop-types';
import SharedSidebarTrigger from './internal/SharedSidebarTrigger';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondarySidebarTrigger = props => (
  <SharedSidebarTrigger {...props} useSidebarConfig={use2ndSidebarConfig} />
);

SecondarySidebarTrigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
SecondarySidebarTrigger.defaultProps = {
  children: null,
  onClick: () => {},
};

export default SecondarySidebarTrigger;
