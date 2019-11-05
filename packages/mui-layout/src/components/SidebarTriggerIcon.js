import React from 'react';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import { useLayoutCtx } from '../hooks';

const SidebarTriggerIcon = props => {
  const { opened } = useLayoutCtx();
  return opened ? (
    <KeyboardArrowLeftRounded {...props} />
  ) : (
    <MenuRounded {...props} />
  );
};

export default SidebarTriggerIcon;
