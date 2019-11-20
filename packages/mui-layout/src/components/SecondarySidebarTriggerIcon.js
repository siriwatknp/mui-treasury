import React from 'react';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import { useLayoutCtx } from '../hooks';

const SecondarySidebarTriggerIcon = props => {
  const { secondaryOpened, secondarySidebar } = useLayoutCtx();
  const getArrow = () => {
    if (secondarySidebar.anchor === 'left') {
      return <ArrowLeft {...props} />;
    }
    if (secondarySidebar.anchor === 'right') {
      return <ArrowRight {...props} />;
    }
    return null;
  };
  return secondaryOpened ? getArrow() : <MenuRounded {...props} />;
};

export default SecondarySidebarTriggerIcon;
