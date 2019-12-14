import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import IconButton from '@material-ui/core/IconButton';
import { useScreenComparison } from '../../hooks';

const SharedSidebarTrigger = ({
  children,
  onClick,
  useSidebarConfig,
  ...props
}) => {
  const { opened, setOpened, sidebar = {} } = useSidebarConfig();
  const { hiddenBreakpoint, hiddenDisabled } = get(sidebar, 'insetProps', {});
  const { isTargetAbove } = useScreenComparison(hiddenBreakpoint);
  const isPermanentDrawer = !sidebar.inset && sidebar.variant === 'permanent';
  const isInsetAbove = sidebar.inset && isTargetAbove && !hiddenDisabled;
  if (isPermanentDrawer || isInsetAbove) {
    return null;
  }
  return (
    <IconButton
      {...props}
      onClick={e => {
        onClick(e);
        setOpened(!opened);
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
