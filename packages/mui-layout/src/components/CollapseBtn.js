import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useLayoutCtx } from '../hooks';

const CollapseBtn = ({ component: Component, onClick, mapContext, ...props }) => {
  const ctx = useLayoutCtx();
  const { setCollapsed, collapsed, opened, sidebar } = mapContext(ctx);
  if (
    !sidebar ||
    !sidebar.collapsible ||
    (sidebar.variant === 'persistent' && !opened)
  ) {
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
  mapContext: PropTypes.func,
};
CollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button,
  mapContext: ctx => ctx,
};

export default CollapseBtn;
