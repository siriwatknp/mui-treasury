import React from 'react';
// import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { useLayoutCtx } from '../hooks';

const RightSidebar = props => {
  const { rightSidebar } = useLayoutCtx();
  return <Drawer variant={rightSidebar.variant} {...props} />;
};

RightSidebar.propTypes = {};
RightSidebar.defaultProps = {};

export default RightSidebar;
