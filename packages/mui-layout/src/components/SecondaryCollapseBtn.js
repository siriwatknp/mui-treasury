import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useLayoutCtx } from '../hooks';

const SecondaryCollapseBtn = ({ component: Component, onClick, ...props }) => {
  const {
    setSecondaryCollapsed,
    secondaryCollapsed,
    secondaryOpened,
    secondarySidebar,
  } = useLayoutCtx();
  if (
    !secondarySidebar ||
    !secondarySidebar.collapsible ||
    (secondarySidebar.variant === 'persistent' && !secondaryOpened)
  ) {
    return null;
  }
  return (
    <Component
      onClick={e => {
        onClick(e);
        setSecondaryCollapsed(!secondaryCollapsed);
      }}
      {...props}
    />
  );
};

SecondaryCollapseBtn.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.elementType,
};
SecondaryCollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button,
};

export default SecondaryCollapseBtn;
