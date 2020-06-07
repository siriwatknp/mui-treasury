import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useGrowAvatarStyles } from '@mui-treasury/styles/avatar/grow';
import { useMusicInfoStyles } from '@mui-treasury/styles/info/music';

const useStyles = makeStyles(() => ({
  text: {
    display: 'flex',
    alignItems: 'center',
    '& > svg': {
      fontSize: 18,
      color: '#888',
      marginRight: 4,
    },
  },
}));

export const MusicListItemDemo = React.memo(function MusicListItem() {
  const src =
    'https://cdn1.vectorstock.com/i/1000x1000/85/40/music-abstract-poster-cover-1980s-style-background-vector-11958540.jpg';
  const avatarStyles = useGrowAvatarStyles({
    src,
    blur: '12px',
    radius: 8,
    size: 48,
    opacity: 0.6,
  });
  const src2 =
    'https://www.designformusic.com/wp-content/uploads/2016/04/orion-trailer-music-album-cover-design.jpg';
  const avatarStyles2 = useGrowAvatarStyles({
    src: src2,
    blur: '12px',
    radius: 8,
    size: 48,
    opacity: 0.6,
  });
  const styles = useStyles();
  return (
    <Column gutter={2} width={'100%'}>
      <Row>
        <div className={avatarStyles.root}>
          <Avatar src={src} />
        </div>
        <Info useStyles={useMusicInfoStyles} minWidth={0}>
          <InfoTitle>Money Longer</InfoTitle>
          <InfoSubtitle>Lil Uzi Vert</InfoSubtitle>
        </Info>
        <Item position={'right'}>
          <IconButton size={'small'}>
            <MoreHoriz />
          </IconButton>
        </Item>
      </Row>
      <Row mt={2}>
        <div className={avatarStyles2.root}>
          <Avatar src={src2} />
        </div>
        <Info useStyles={useMusicInfoStyles} minWidth={0}>
          <InfoTitle>Wait For You</InfoTitle>
          <InfoSubtitle>Jake Miller</InfoSubtitle>
          <InfoCaption className={styles.text}>
            <PlayCircleFilled /> playing...
          </InfoCaption>
        </Info>
        <Item position={'right'}>
          <IconButton size={'small'}>
            <MoreHoriz />
          </IconButton>
        </Item>
      </Row>
    </Column>
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
    title={'Music'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <MusicListItemDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/listItem/music',
  colSpan: 1,
  rowSpan: 2,
  createdAt: 'Sun Jun 07 2020',
  files: [],
};
// @ts-ignore
MusicListItemDemo.Showcase = AttachedShowcase;
// @ts-ignore
MusicListItemDemo.metadata = metadata;
// hide-end
