import React from 'react';
import Divider from '@material-ui/core/Divider';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { Column, Item } from '@mui-treasury/components/flex';
import { useThemeMdInfoStyles } from '@mui-treasury/styles/info/themeMd';

const ThemeMdInfoStyle = () => {
  return (
    <Column gap={1.5} bgcolor={'#fff'} minWidth={200}>
      <Info useStyles={useThemeMdInfoStyles}>
        <InfoTitle>Old Town Road</InfoTitle>
        <InfoSubtitle>Gozilla</InfoSubtitle>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useThemeMdInfoStyles}>
        <InfoTitle>Old Town Road</InfoTitle>
        <InfoSubtitle>Gozilla</InfoSubtitle>
        <InfoCaption>3d • #alternative</InfoCaption>
      </Info>
      <Item>
        <Divider />
      </Item>
      <Info useStyles={useThemeMdInfoStyles}>
        <InfoCaption>3d • #alternative</InfoCaption>
        <InfoTitle>Old Town Road</InfoTitle>
        <InfoSubtitle>Gozilla</InfoSubtitle>
      </Info>
    </Column>
  )
};
// hide-start
ThemeMdInfoStyle.metadata = {
  title: 'Theme Md',
  description: 'total height ~ [3rem, 4.5rem]',
  path: 'styles/info/themeMd',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Jun 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'info/themeMd/themeMdInfo.styles.ts'},
  ],
};
// hide-end

export default ThemeMdInfoStyle;
