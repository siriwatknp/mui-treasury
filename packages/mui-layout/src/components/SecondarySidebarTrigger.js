import React from 'react';
import PropTypes from 'prop-types';
import SidebarTrigger from './SidebarTrigger';
import { parseSecondaryConfig } from '../utils/sidebarUtils';

const SecondarySidebarTrigger = props => (
  <SidebarTrigger mapContext={parseSecondaryConfig} {...props} />
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
