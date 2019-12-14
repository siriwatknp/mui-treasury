import React from 'react';
import PropTypes from 'prop-types';
import SharedSidebar from './internal/SharedSidebar';
import useSidebarConfig from '../hooks/useSidebarConfig';

const Sidebar = props => {
  return <SharedSidebar {...props} useSidebarConfig={useSidebarConfig} />;
};

Sidebar.propTypes = {
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  ModalProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
Sidebar.defaultProps = {
  PaperProps: undefined,
  SlideProps: undefined,
  ModalProps: undefined,
  children: null,
};

export default Sidebar;
