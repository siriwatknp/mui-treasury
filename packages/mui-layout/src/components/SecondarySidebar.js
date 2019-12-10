import React from 'react';
import PropTypes from 'prop-types';
import SharedSidebar from './internal/SharedSidebar';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondarySidebar = props => (
  <SharedSidebar {...props} useSidebarConfig={use2ndSidebarConfig} />
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
