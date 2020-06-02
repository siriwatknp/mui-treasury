import React from 'react';
import Divider from '@material-ui/core/Divider';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { Column, Item } from '@mui-treasury/components/flex';
import { useLgThemeInfoStyles } from '@mui-treasury/styles/info/lgTheme';

const LgThemeInfoStyle = () => {
  return (
    <Column gutter={1.5} bgcolor={'#fff'} minWidth={240}>
      <Info useStyles={useLgThemeInfoStyles}>
        <InfoTitle>#BlackOutTuesday</InfoTitle>
        <InfoSubtitle>1.5M Tweets</InfoSubtitle>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useLgThemeInfoStyles}>
        <InfoCaption>Trending in Thailand</InfoCaption>
        <InfoTitle>#BlackOutTuesday</InfoTitle>
        <InfoSubtitle>1.5M Tweets</InfoSubtitle>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useLgThemeInfoStyles}>
        <InfoTitle>#BlackOutTuesday</InfoTitle>
        <InfoSubtitle>1.5M Tweets</InfoSubtitle>
        <InfoCaption>Trending in Thailand</InfoCaption>
      </Info>
    </Column>
  );
};
// hide-start
LgThemeInfoStyle.metadata = {
  title: 'Lg Theme',
  description: 'total height ~ [4rem, 5.5rem]',
  path: 'styles/info/lgTheme',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'info/lgTheme/lgThemeInfo.styles.ts' }],
};
// hide-end

export default LgThemeInfoStyle;
