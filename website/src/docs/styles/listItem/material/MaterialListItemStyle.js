import React from 'react';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import { useMaterialListItemStyles } from '@mui-treasury/styles/listItem/material';

const MaterialListItemStyle = () => {
  const classes = useMaterialListItemStyles();
  return (
    <Box minWidth={240}>
      <ListItem classes={classes}>Default Item</ListItem>
      <ListItem classes={classes} button>
        Button Item
      </ListItem>
      <ListItem classes={classes} button selected>
        Selected Item
      </ListItem>
    </Box>
  );
};
// hide-start
MaterialListItemStyle.metadata = {
  title: 'Material',
  path: 'styles/listItem/material',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Mar 07 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'listItem/material/materialListItem.styles.js' },
  ],
};
// hide-end

export default MaterialListItemStyle;
