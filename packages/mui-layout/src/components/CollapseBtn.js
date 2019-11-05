import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useLayoutCtx } from '../hooks';

const CollapseBtn = ({ component: Component, onClick, ...props }) => {
  const { setCollapsed, collapsed, sidebar } = useLayoutCtx();
  if (!sidebar || !sidebar.collapsible) {
    return null;
  }
  return (
    <Component
      onClick={e => {
        onClick(e);
        setCollapsed(!collapsed);
      }}
      {...props}
    />
  );
};

CollapseBtn.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.elementType,
};
CollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button,
};

export default CollapseBtn;
