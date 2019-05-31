/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const FirebaseTabs = () => {
  const [index, onChange] = useState(0);
  return (
    <AppBar position={'static'}>
      <Tabs value={index} onChange={(e, val) => onChange(val)}>
        <Tab label="Data" disableRipple />
        <Tab label="Rules" disableRipple />
        <Tab label="Indexes" disableRipple />
        <Tab label="Usage" disableRipple />
      </Tabs>
    </AppBar>
  );
};

FirebaseTabs.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      marginLeft: muiBaseTheme.spacing(1),
    },
    indicator: {
      height: 3,
      borderTopLeftRadius: 3,
      borderTopRightRadius: 3,
      backgroundColor: muiBaseTheme.palette.common.white,
    },
  },
  MuiTab: {
    root: {
      textTransform: 'initial',
      margin: muiBaseTheme.spacing(0, 2),
      minWidth: 0,
      [muiBaseTheme.breakpoints.up('md')]: {
        minWidth: 0,
      },
    },
    wrapper: {
      fontWeight: 'normal',
      letterSpacing: 0.5,
    },
  },
});
FirebaseTabs.metadata = {
  name: 'Firebase Tabs',
  description: 'implement firebase theme (primary-color: #039be5)',
};
FirebaseTabs.codeSandbox = 'https://codesandbox.io/s/13kjwkry7l';

export default FirebaseTabs;
