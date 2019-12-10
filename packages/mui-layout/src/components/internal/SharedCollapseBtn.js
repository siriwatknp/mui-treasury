import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const CollapseBtn = ({
  component: Component,
  onClick,
  mapContext,
  useSidebarConfig,
  ...props
}) => {
  const ctx = useSidebarConfig();
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
  useSidebarConfig: PropTypes.func.isRequired,
};
CollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button,
  mapContext: ctx => ctx,
};

export default CollapseBtn;
