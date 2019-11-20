import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { useLayoutCtx } from '../hooks';

const SecondarySidebarTrigger = ({ children, onClick, ...props }) => {
  const {
    secondaryOpened,
    setSecondaryOpened,
    secondarySidebar,
  } = useLayoutCtx();
  if (!secondarySidebar || secondarySidebar.variant === 'permanent') {
    return null;
  }
  return (
    <IconButton
      {...props}
      onClick={e => {
        onClick(e);
        setSecondaryOpened(!secondaryOpened);
      }}
    >
      {children}
    </IconButton>
  );
};

SecondarySidebarTrigger.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
SecondarySidebarTrigger.defaultProps = {
  children: null,
  onClick: () => {},
};

export default SecondarySidebarTrigger;
