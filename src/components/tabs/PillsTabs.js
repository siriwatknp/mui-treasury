/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const PillsTabs = () => {
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

PillsTabs.getTheme = () => ({
  MuiTabs: {
    root: {
      width: '100%',
    },
    indicator: {
      display: 'none',
    },
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  MuiTab: {
    root: {
      position: 'relative',
      display: 'block',
      borderRadius: '30px',
      textAlign: 'center',
      transition: 'all .5s',
      padding: '10px 15px',
      color: '#555555',
      height: 'auto',
      opacity: '1',
      margin: '10px 0',
      width: '100%',
      float: 'none',
      '& + button': {
        margin: '10px 0',
      },
      '&$selected': {
        '&, &:hover': {
          color: '#FFFFFF',
          backgroundColor: '#00acc1',
          boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)',
        },
      },
    },
    labelContainer: {
      padding: '0!important',
      color: 'inherit',
    },
    label: {
      lineHeight: '24px',
      textTransform: 'uppercase',
      fontSize: '12px',
      fontWeight: '500',
      position: 'relative',
      display: 'block',
      color: 'inherit',
    },
  },
});

PillsTabs.metadata = {
  name: 'Pills Tabs',
  description: 'implement custom theme with elevated pills tabs',
};

PillsTabs.codeSandbox = 'https://codesandbox.io/s/q885853jkw';

export default PillsTabs;
