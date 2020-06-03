import React from 'react';
import Divider from '@material-ui/core/Divider';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { Column, Item } from '@mui-treasury/components/flex';
import { useThemeXsInfoStyles } from '@mui-treasury/styles/info/themeXs';

const ThemeXsInfoStyle = () => {
  return (
    <Column gutter={1.5} bgcolor={'#fff'} minWidth={200}>
      <Info useStyles={useThemeXsInfoStyles}>
        <InfoTitle>Lonely ft.Lil Skies</InfoTitle>
        <InfoSubtitle>Yung Bans</InfoSubtitle>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useThemeXsInfoStyles}>
        <InfoTitle>Lonely ft.Lil Skies</InfoTitle>
        <InfoSubtitle>Yung Bans</InfoSubtitle>
        <InfoCaption>21d • #hiphop #rap</InfoCaption>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useThemeXsInfoStyles}>
        <InfoCaption>21d • #hiphop #rap</InfoCaption>
        <InfoTitle>Lonely ft.Lil Skies</InfoTitle>
        <InfoSubtitle>Yung Bans</InfoSubtitle>
      </Info>
    </Column>
  );
};
// hide-start
ThemeXsInfoStyle.metadata = {
  title: 'Theme Xs',
  description: 'total height ~ [2rem, 3rem]',
  path: 'styles/info/themeXs',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/themeXs/themeXsInfo.styles.ts' }],
};
// hide-end

export default ThemeXsInfoStyle;
