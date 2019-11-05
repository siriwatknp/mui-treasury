import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { useLayoutCtx } from '../hooks';

const SidebarTrigger = ({ children, onClick, ...props }) => {
  const { opened, setOpened, sidebar } = useLayoutCtx();
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

SidebarTrigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
SidebarTrigger.defaultProps = {
  children: null,
  onClick: () => {},
};

export default SidebarTrigger;
