import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Row, Column, Item } from '@mui-treasury/components/flex';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useD01InfoStyles } from '@mui-treasury/styles/info/d01';

export const DarkRapListItemDemo: React.FC<{}> = React.memo(
  function DarkRapListItem() {
    const avatarStyles = useDynamicAvatarStyles({ size: 70 });
    return (
      <Column gutter={2}>
        <Row>
          <Avatar
            variant={'rounded'}
            classes={avatarStyles}
            src={
              'https://shopage.s3.amazonaws.com/media/f855/580321926366_PEnByxR6Xdn7soyNMiGPG4ZPMng1N4CN4D4XvB7j.jpg'
            }
          />
          <Item>
            <Info useStyles={useD01InfoStyles}>
              <InfoCaption>3d • #triphop #rap</InfoCaption>
              <InfoTitle>Humility (feat. George Benson)</InfoTitle>
              <InfoSubtitle>Gorillaz</InfoSubtitle>
            </Info>
          </Item>
        </Row>
        <Row>
          <Avatar
            variant={'rounded'}
            classes={avatarStyles}
            src={
              'https://music-artwork.com/wp-content/uploads/2018/04/dec110.jpg'
            }
          />
          <Item>
            <Info useStyles={useD01InfoStyles}>
              <InfoCaption>28d • #hiphop #rap</InfoCaption>
              <InfoTitle>Old Town Road</InfoTitle>
              <InfoSubtitle>Unknown</InfoSubtitle>
            </Info>
          </Item>
        </Row>
      </Column>
    );
  }
);
// hide-start
// eslint-disable-next-line import/first
import Showcase, {
  IMetadata,
  ShowcaseProps,
} from '../../../../components/Showcase';

const AttachedShowcase = (props: ShowcaseProps) => (
  <Showcase
    {...props}
    title={'DarkRap'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <DarkRapListItemDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/listItem/darkRap',
  colSpan: 2,
  rowSpan: 3,
  frameProps: {
    bgcolor: '#172338',
  },
  createdAt: 'Sun Jun 07 2020',
  files: [],
};
// @ts-ignore
DarkRapListItemDemo.Showcase = AttachedShowcase;
// @ts-ignore
DarkRapListItemDemo.metadata = metadata;
// hide-end
