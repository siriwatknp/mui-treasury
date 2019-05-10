/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const TwitterTabs = () => {
  const [index, onChange] = useState(0);
  return (
    <Tabs
      variant={'fullWidth'}
      centered
      value={index}
      onChange={(e, val) => onChange(val)}
    >
      <Tab classes={{ label: 'MuiTab-label' }} label="Tweet" disableRipple />
      <Tab
        classes={{ label: 'MuiTab-label' }}
        label="Responses"
        disableRipple
      />
      <Tab classes={{ label: 'MuiTab-label' }} label="Media" disableRipple />
      <Tab classes={{ label: 'MuiTab-label' }} label="liking" disableRipple />
    </Tabs>
  );
};

TwitterTabs.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      width: '100%',
      borderBottom: '1px solid #E6ECF0',
    },
    indicator: {
      backgroundColor: '#1da1f2',
    },
  },
  MuiTab: {
    root: {
      minHeight: 53,
      minWidth: 0,
      [muiBaseTheme.breakpoints.up('md')]: {
        minWidth: 0,
      },
      '&:hover': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& .MuiTab-label': {
          color: '#1da1f2',
        },
      },
      '&$selected': {
        '& *': {
          color: '#1da1f2',
        },
      },
    },
    textColorInherit: {
      opacity: 1,
    },
    wrapper: {
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
      color: '#657786',
      '& svg': {
        fontSize: 26.25,
      },
    },
  },
});
TwitterTabs.metadata = {
  name: 'Twitter Tabs',
  description: 'implement Twitter theme',
};
TwitterTabs.codeSandbox = 'https://codesandbox.io/s/5w8kyy1nrk';

export default TwitterTabs;
