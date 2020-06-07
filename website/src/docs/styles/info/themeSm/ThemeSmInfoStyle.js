import React from 'react';
import Divider from '@material-ui/core/Divider';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { Column, Item } from '@mui-treasury/components/flex';
import { useThemeSmInfoStyles } from '@mui-treasury/styles/info/themeSm';

const ThemeSmInfoStyle = () => {
  return (
    <Column gap={1.5} bgcolor={'#fff'} minWidth={200}>
      <Info useStyles={useThemeSmInfoStyles}>
        <InfoTitle>No Problem (feat. Lil Wayne)</InfoTitle>
        <InfoSubtitle>Chance the Rapper</InfoSubtitle>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useThemeSmInfoStyles}>
        <InfoCaption>19d • #hiphop #rap</InfoCaption>
        <InfoTitle>No Problem (feat. Lil Wayne)</InfoTitle>
        <InfoSubtitle>Chance the Rapper</InfoSubtitle>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useThemeSmInfoStyles}>
        <InfoTitle>No Problem (feat. Lil Wayne)</InfoTitle>
        <InfoSubtitle>Chance the Rapper</InfoSubtitle>
        <InfoCaption>19d • #hiphop #rap</InfoCaption>
      </Info>
    </Column>
  );
};
// hide-start
ThemeSmInfoStyle.metadata = {
  title: 'Theme Sm',
  description: 'total height ~ [2.5rem, 3.8rem]',
  path: 'styles/info/themeSm',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/themeSm/themeSmInfo.styles.ts' }],
};
// hide-end

export default ThemeSmInfoStyle;
