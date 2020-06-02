import React from 'react';
import Divider from '@material-ui/core/Divider';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { Column, Item } from '@mui-treasury/components/flex';
import { useMdThemeInfoStyles } from '@mui-treasury/styles/info/mdTheme';

const MdThemeInfoStyle = () => {
  return (
    <Column gutter={1.5} bgcolor={'#fff'} minWidth={200}>
      <Info useStyles={useMdThemeInfoStyles}>
        <InfoTitle>Old Town Road</InfoTitle>
        <InfoSubtitle>Gozilla</InfoSubtitle>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useMdThemeInfoStyles}>
        <InfoTitle>Old Town Road</InfoTitle>
        <InfoSubtitle>Gozilla</InfoSubtitle>
        <InfoCaption>3d • #alternative</InfoCaption>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useMdThemeInfoStyles}>
        <InfoCaption>3d • #alternative</InfoCaption>
        <InfoTitle>Old Town Road</InfoTitle>
        <InfoSubtitle>Gozilla</InfoSubtitle>
      </Info>
    </Column>
  )
};
// hide-start
MdThemeInfoStyle.metadata = {
  title: 'Md Theme',
  description: 'total height ~ [3rem, 4.5rem]',
  path: 'styles/info/mdTheme',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'info/mdTheme/mdThemeInfo.styles.ts'},
  ],
};
// hide-end

export default MdThemeInfoStyle;
