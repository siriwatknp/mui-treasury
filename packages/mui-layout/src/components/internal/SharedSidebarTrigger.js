import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

const SharedSidebarTrigger = ({
  children,
  onClick,
  useSidebarConfig,
  ...props
}) => {
  const { opened, setOpened, sidebar } = useSidebarConfig();
  if (!sidebar || sidebar.variant === 'permanent') {
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
