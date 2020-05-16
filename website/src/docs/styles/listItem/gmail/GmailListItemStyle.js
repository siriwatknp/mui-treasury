import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useGmailListItemStyles } from '@mui-treasury/styles/listItem/gmail';
import Inbox from '@material-ui/icons/Inbox';
import Star from '@material-ui/icons/Star';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';

const GmailListItemStyle = () => {
  const selectedStyles = useGmailListItemStyles({ color: '#da3125' });
  const styles = useGmailListItemStyles();
  return (
    <Box minWidth={256} bgcolor={'#fff'}>
      <List>
        <ListItem classes={selectedStyles} button selected>
          <Inbox fontSize={'small'} />
          Inbox
          <span className={'MuiLabel-amount'}>1,183</span>
        </ListItem>
        <ListItem classes={styles} button>
          <Star fontSize={'small'} />
          Starred
        </ListItem>
        <ListItem classes={styles} button>
          <InsertDriveFile fontSize={'small'} />
          <b>Drafts</b>
          <span className={'MuiLabel-amount'}>5</span>
        </ListItem>
      </List>
    </Box>
  );
};
// hide-start
GmailListItemStyle.metadata = {
  title: 'Gmail',
  path: 'styles/listItem/gmail',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat May 16 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'listItem/gmail/gmailListItem.styles.ts' },
  ],
};
// hide-end

export default GmailListItemStyle;
