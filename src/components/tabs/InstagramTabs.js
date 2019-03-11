/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';

const InstagramTabs = () => {
  const [index, onChange] = useState(0);
  return (
    <Tabs centered value={index} onChange={(e, val) => onChange(val)}>
      <Tab label="Posts" disableRipple icon={<Icon>grid_on_outlined</Icon>} />
      <Tab label="IGTV" disableRipple icon={<Icon>live_tv</Icon>} />
      <Tab
        label="Saved"
        disableRipple
        icon={<Icon>bookmark_border_outlined</Icon>}
      />
      <Tab label="Tagged" disableRipple />
    </Tabs>
  );
};

InstagramTabs.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      borderTop: '1px solid #efefef',
      overflow: 'visible',
    },
    fixed: {
      overflowX: 'visible',
    },
    indicator: {
      height: 1,
      transform: 'translateY(-53px)',
      backgroundColor: '#262626',
    },
  },
  MuiTab: {
    root: {
      lineHeight: 'inherit',
      minWidth: 0,
      '&:not(:last-child)': {
        marginRight: 24,
        [muiBaseTheme.breakpoints.up('sm')]: {
          marginRight: 60,
        },
      },
      [muiBaseTheme.breakpoints.up('md')]: {
        minWidth: 0,
      },
    },
    labelIcon: {
      minHeight: 53,
      paddingTop: 0,
    },
    textColorInherit: {
      opacity: 0.4,
    },
    wrapper: {
      flexDirection: 'row',
      '& svg, .material-icons': {
        fontSize: 16,
        marginRight: 4,
      },
    },
    labelContainer: {
      padding: 0,
      [muiBaseTheme.breakpoints.up('md')]: {
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
    label: {
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
  },
});
InstagramTabs.metadata = {
  name: 'Instagram Tabs',
  description: 'implement Instagram theme',
};
InstagramTabs.codeSandbox = 'https://codesandbox.io/s/kkl6yq01v';

export default InstagramTabs;
