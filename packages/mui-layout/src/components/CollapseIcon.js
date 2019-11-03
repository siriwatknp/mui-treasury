import React from 'react';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import { useLayoutCtx } from '../layoutContext';

const CollapseIcon = props => {
  const { collapsed } = useLayoutCtx();
  return collapsed ? (
    <KeyboardArrowRightRounded {...props} />
  ) : (
    <KeyboardArrowLeftRounded {...props} />
  );
};

export default CollapseIcon;
