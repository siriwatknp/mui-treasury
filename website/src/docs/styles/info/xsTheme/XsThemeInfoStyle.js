import React from 'react';
import Divider from '@material-ui/core/Divider';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { Column, Item } from '@mui-treasury/components/flex';
import { useXsThemeInfoStyles } from '@mui-treasury/styles/info/xsTheme';

const XsThemeInfoStyle = () => {
  return (
    <Column gutter={1.5} bgcolor={'#fff'} minWidth={200}>
      <Info useStyles={useXsThemeInfoStyles}>
        <InfoTitle>Lonely ft.Lil Skies</InfoTitle>
        <InfoSubtitle>Yung Bans</InfoSubtitle>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useXsThemeInfoStyles}>
        <InfoTitle>Lonely ft.Lil Skies</InfoTitle>
        <InfoSubtitle>Yung Bans</InfoSubtitle>
        <InfoCaption>21d • #hiphop #rap</InfoCaption>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useXsThemeInfoStyles}>
        <InfoCaption>21d • #hiphop #rap</InfoCaption>
        <InfoTitle>Lonely ft.Lil Skies</InfoTitle>
        <InfoSubtitle>Yung Bans</InfoSubtitle>
      </Info>
    </Column>
  );
};
// hide-start
XsThemeInfoStyle.metadata = {
  title: 'Xs Theme',
  description: 'total height ~ [2rem, 3rem]',
  path: 'styles/info/xsTheme',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/xsTheme/xsThemeInfo.styles.ts' }],
};
// hide-end

export default XsThemeInfoStyle;
