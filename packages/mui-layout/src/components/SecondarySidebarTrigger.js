import React from 'react';
import PropTypes from 'prop-types';
import SidebarTrigger from './SidebarTrigger';
import SidebarAdapter from '../adapters/sidebar';

const SecondarySidebarTrigger = props => (
  <SidebarTrigger mapContext={SidebarAdapter.mapSecondaryConfig} {...props} />
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
