import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { useLayoutCtx } from '../layoutContext';

const SidebarTrigger = ({ children, onClick, ...props }) => {
  const { opened, setOpened } = useLayoutCtx();
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
