import React from 'react';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import { useJupiterListItemStyles } from '@mui-treasury/styles/listItem/jupiter';

const JupiterListItemStyle = () => {
  const classes = useJupiterListItemStyles();
  return (
    <Box minWidth={240}>
      <ListItem classes={classes} component="div">Default Item</ListItem>
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
JupiterListItemStyle.metadata = {
  title: 'Jupiter',
  path: 'listItem/jupiter',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Mar 07 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'listItem/jupiter/jupiterListItem.styles.js'},
  ],
};
// hide-end

export default JupiterListItemStyle;