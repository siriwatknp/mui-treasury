import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info';
import { useChatzInfoStyles } from '@mui-treasury/styles/info/chatz';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useGradientAvatarStyles } from '@mui-treasury/styles/avatar/gradient';

export const ChatzListItemDemo = React.memo(function ChatzListItem() {
  const avatarStyles = useGradientAvatarStyles({
    size: 72,
    thickness: 3,
    color: 'linear-gradient(to right, #8a2387, #e94057, #f27121);',
    gapColor: '#f4f7fa',
  });
  const avatarStyles2 = useDynamicAvatarStyles({ size: 72 });
  return (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[{ font: 'Maven Pro', weights: [400, 500] }]}
        />
      </NoSsr>
      <Column gap={2}>
        <Row alignItems={'center'}>
          <div className={avatarStyles.root}>
            <Avatar src={'https://avatarfiles.alphacoders.com/816/81602.jpg'} />
          </div>
          <Item>
            <Info useStyles={useChatzInfoStyles}>
              <InfoTitle>Phawta Tuntayakul</InfoTitle>
              <InfoSubtitle>Great, I'll join you tomorrow...</InfoSubtitle>
              <InfoCaption>10 m</InfoCaption>
            </Info>
          </Item>
          <Item minWidth={48} textAlign={'right'}>
            <Chip color={'secondary'} label={2} size={'small'} />
          </Item>
        </Row>
        <Row mt={2} alignItems={'center'}>
          <Avatar
            classes={avatarStyles2}
            src={'https://avatarfiles.alphacoders.com/166/166630.jpg'}
          />
          <Item>
            <Info useStyles={useChatzInfoStyles}>
              <InfoTitle>Maria Illesaca</InfoTitle>
              <InfoSubtitle>Can you please send me more detail...</InfoSubtitle>
              <InfoCaption>10:45 AM</InfoCaption>
            </Info>
          </Item>
        </Row>
      </Column>
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
    title={'Chatz'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <ChatzListItemDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/listItem/chatz',
  colSpan: 6,
  rowSpan: 2,
  createdAt: 'Sun Jun 07 2020',
  files: [],
};
// @ts-ignore
ChatzListItemDemo.Showcase = AttachedShowcase;
// @ts-ignore
ChatzListItemDemo.metadata = metadata;
// hide-end
