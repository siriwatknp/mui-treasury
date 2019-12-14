import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SharedCollapseBtn from './internal/SharedCollapseBtn';
import useSidebarConfig from '../hooks/useSidebarConfig';

const CollapseBtn = props => (
  <SharedCollapseBtn {...props} useSidebarConfig={useSidebarConfig} />
);

CollapseBtn.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.elementType,
};
CollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button,
};

export default CollapseBtn;
