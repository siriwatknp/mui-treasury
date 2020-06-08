import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import Avatar from '@material-ui/core/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { usePopularInfoStyles } from '@mui-treasury/styles/info/popular';

export const PopularListItemDemo = React.memo(function PopularListItem() {
  const avatarStyles = useDynamicAvatarStyles({
    height: 56,
    width: 64,
    radius: 8,
  });
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Poppins', weights: [400, 700] }]} />
      </NoSsr>
      <Row gap={3}>
        <Avatar
          variant={'rounded'}
          classes={avatarStyles}
          src={
            'https://freedesignfile.com/upload/2016/03/Abstract-geometric-petals-vector-graphic-03.jpg'
          }
        />
        <Item position={'middle'}>
          <Info useStyles={usePopularInfoStyles}>
            <InfoSubtitle>Design</InfoSubtitle>
            <InfoTitle>Most Awaited - Figma Launches Plugin</InfoTitle>
            <InfoCaption>14 sec ago</InfoCaption>
          </Info>
        </Item>
      </Row>
    </>
  );
});
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'Popular'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <PopularListItemDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/listItem/popular',
  colSpan: 4,
  rowSpan: 1,
  createdAt: 'Sun Jun 07 2020',
  files: [],
};
// @ts-ignore
PopularListItemDemo.Showcase = AttachedShowcase;
// @ts-ignore
PopularListItemDemo.metadata = metadata;
// hide-end
