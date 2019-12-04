import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import { parseSecondaryConfig } from '../utils/sidebarUtils';

const mapContext = ({ header = {}, ...ctx } = {}) => ({
  ...parseSecondaryConfig(ctx),
  clipped: header.secondaryClipped,
});

const SecondarySidebar = props => (
  <Sidebar {...props} mapContext={mapContext} />
);

SecondarySidebar.propTypes = {
  side: PropTypes.oneOf(['left', 'right']),
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
SecondarySidebar.defaultProps = {
  side: undefined,
  PaperProps: {},
  SlideProps: {},
  children: null,
};

export default SecondarySidebar;
