/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const ElevatedTabs = () => {
  const [index, onChange] = useState(0);
  return (
    <React.Fragment>
      <Tabs
        variant={'fullWidth'}
        value={index}
        onChange={(e, val) => onChange(val)}
      >
        <Tab label="Data" />
        <Tab label="Rules" />
        <Tab label="Indexes" />
        <Tab label="Usage" />
      </Tabs>
    </React.Fragment>
  );
};

ElevatedTabs.getTheme = theme => {
  const tabsBackground = 'linear-gradient(60deg, #ab47bc, #8e24aa)';
  const indicatorBackground = 'rgba(255, 255, 255, .2)';
  const borderRadius = theme.spacing(1);
  const tabsGutter = theme.spacing(2);
  const labelColor = '#ffffff';

  return {
    MuiTabs: {
      root: {
        width: '100%',
        borderRadius: theme.spacing(1),
        background: tabsBackground,
        padding: 10,
        boxShadow: '0px 3px 15px rgba(34, 35, 58, 0.5)',
      },
      indicator: {
        height: '100%',
        borderRadius,
        backgroundColor: indicatorBackground,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'initial',
        margin: `0 ${tabsGutter}px`,
        minWidth: 0,
        [theme.breakpoints.up('md')]: {
          minWidth: 0,
        },
      },
      wrapper: {
        fontWeight: 'normal',
        letterSpacing: 0.5,
        color: labelColor,
      },
    },
  };
};

ElevatedTabs.metadata = {
  name: 'Elevated Tabs',
  description: 'implement custom theme with elevated tabs',
};

ElevatedTabs.codeSandbox = 'https://codesandbox.io/s/vmzjw3o5l5';

export default ElevatedTabs;
