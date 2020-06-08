import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import Avatar from '@material-ui/core/Avatar';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useTrendInfoStyles } from '@mui-treasury/styles/info/trend';

export const TrendyListItemDemo = React.memo(function TrendyListItem() {
  const avatarStyles = useDynamicAvatarStyles({ size: 48, radius: 6 });
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Manrope', weights: [500, 700] }]} />
      </NoSsr>
      <Row gap={3}>
        <Avatar
          variant={'rounded'}
          classes={avatarStyles}
          src={
            'https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/923/a5d/cff/399ac7fa0f6e82bf24f9363.jpg_300_300_2_f169.jpg'
          }
        />
        <Item position={'middle'}>
          <Info useStyles={useTrendInfoStyles}>
            <InfoTitle>Beats X Super Fast Charge</InfoTitle>
            <InfoSubtitle>Starts from $250</InfoSubtitle>
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
    title={'Trendy'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <TrendyListItemDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/listItem/trendy',
  colSpan: 4,
  rowSpan: 1,
  createdAt: 'Sun Jun 07 2020',
  files: [],
};
// @ts-ignore
TrendyListItemDemo.Showcase = AttachedShowcase;
// @ts-ignore
TrendyListItemDemo.metadata = metadata;
// hide-end
