import React, { useState } from 'react';
import StayCurrentPortrait from '@material-ui/icons/StayCurrentPortrait';
import StayCurrentLandscape from '@material-ui/icons/StayCurrentLandscape';
import Tablet from '@material-ui/icons/Tablet';
import TabletAndroid from '@material-ui/icons/TabletAndroid';
import LaptopMac from '@material-ui/icons/LaptopMac';

export default ({ initialKey, overrides = {} } = {}) => {
  const screenList = [
    {
      key: 'xs',
      name: 'mobile',
      icon: <StayCurrentPortrait />,
      width: 375,
      height: 628,
      screen: 'xs',
      ...overrides.all,
      ...overrides.xs,
    },
    {
      key: 'xsh',
      name: 'mobile horizontal',
      icon: <StayCurrentLandscape />,
      width: 600,
      height: 375,
      screen: 'sm',
      ...overrides.all,
      ...overrides.xsh,
    },
    {
      key: 'sm',
      name: 'tablet',
      icon: <TabletAndroid />,
      width: 768,
      height: 1024,
      screen: 'sm',
      ...overrides.all,
      ...overrides.sm,
    },
    {
      key: 'md',
      name: 'tablet horizontal',
      icon: <Tablet />,
      width: 1024,
      height: 768,
      screen: 'md',
      ...overrides.all,
      ...overrides.md,
    },
    {
      key: 'lg',
      name: 'laptop',
      icon: <LaptopMac />,
      width: 1360,
      height: 768,
      screen: 'lg',
      ...overrides.all,
      ...overrides.lg,
    },
  ];
  const [activeScreen, setActiveScreen] = useState(
    screenList.find(o => o.key === initialKey)
  );

  return {
    screenList,
    activeScreen,
    selectScreen: screen => setActiveScreen(screen),
    getIsActive: item => activeScreen && item.key === activeScreen.key,
  };
};
