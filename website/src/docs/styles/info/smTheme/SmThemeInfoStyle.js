import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useSmThemeInfoStyles } from '@mui-treasury/styles/info/smTheme';

const SmThemeInfoStyle = () => {
  return (
    <List>
      <ListItem button>
        <Info useStyles={useSmThemeInfoStyles}>
          <InfoTitle>No Problem (feat. Lil Wayne)</InfoTitle>
          <InfoSubtitle>Chance the Rapper</InfoSubtitle>
        </Info>
      </ListItem>
      <Divider />
      <ListItem button>
        <Info useStyles={useSmThemeInfoStyles}>
          <InfoCaption>19d • #hiphop #rap</InfoCaption>
          <InfoTitle>No Problem (feat. Lil Wayne)</InfoTitle>
          <InfoSubtitle>Chance the Rapper</InfoSubtitle>
        </Info>
      </ListItem>
    </List>
  );
};
// hide-start
SmThemeInfoStyle.metadata = {
  title: 'Sm Theme',
  description: 'total height ~ [2.5rem, 4.35rem]',
  path: 'styles/info/smTheme',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/smTheme/smThemeInfo.styles.ts' }],
};
// hide-end

export default SmThemeInfoStyle;
