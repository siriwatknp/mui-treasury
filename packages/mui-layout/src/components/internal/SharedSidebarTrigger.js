import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { useInsetBreakpoint } from '../../hooks';

const SharedSidebarTrigger = ({
  children,
  onClick,
  useSidebarConfig,
  ...props
}) => {
  const parsedCtx = useSidebarConfig();
  const { open, setOpen, sidebar = {} } = parsedCtx;
  const { displayedAboveBreakpoint } = useInsetBreakpoint(parsedCtx);
  const isPermanentDrawer = !sidebar.inset && sidebar.variant === 'permanent';
  if (isPermanentDrawer || displayedAboveBreakpoint) {
    return null;
  }
  return (
    <IconButton
      {...props}
      onClick={e => {
        onClick(e);
        setOpen(!open);
      }}
    >
      {children}
    </IconButton>
  );
};

SharedSidebarTrigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  useSidebarConfig: PropTypes.func.isRequired,
};
SharedSidebarTrigger.defaultProps = {
  children: null,
  onClick: () => {},
};

export default SharedSidebarTrigger;
