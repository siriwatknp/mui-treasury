import React from 'react';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import { useLayoutCtx } from '../hooks';

const SecondaryCollapseIcon = props => {
  const { secondaryCollapsed, secondarySidebar } = useLayoutCtx();
  const getCollapsedArrow = () => {
    if (secondarySidebar.anchor === 'right') {
      return <KeyboardArrowLeftRounded {...props} />;
    }
    if (secondarySidebar.anchor === 'left') {
      return <KeyboardArrowRightRounded {...props} />;
    }
    return null;
  };
  const getUnCollapsedArrow = () => {
    if (secondarySidebar.anchor === 'left') {
      return <KeyboardArrowLeftRounded {...props} />;
    }
    if (secondarySidebar.anchor === 'right') {
      return <KeyboardArrowRightRounded {...props} />;
    }
    return null;
  };
  return secondaryCollapsed ? getCollapsedArrow() : getUnCollapsedArrow();
};

export default SecondaryCollapseIcon;
