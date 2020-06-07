import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import Avatar from '@material-ui/core/Avatar';
import { Row } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useNewsInfoStyles } from '@mui-treasury/styles/info/news';

export const NewsListItemDemo = React.memo(function NewsListItem() {
  const avatarStyles = useDynamicAvatarStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Sen' }]} />
      </NoSsr>
      <Row>
        <Avatar
          classes={avatarStyles}
          src={'https://hapskorea.com/wp-content/uploads/2012/11/PSY4.jpg'}
        />
        <Info useStyles={useNewsInfoStyles}>
          <InfoTitle>Nadine Petrolli</InfoTitle>
          <InfoSubtitle>Jul 20 | 2 Min Read</InfoSubtitle>
        </Info>
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
    title={'News'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
  >
    <NewsListItemDemo />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'components/listItem/news',
  colSpan: 1,
  rowSpan: 2,
  createdAt: 'Sun Jun 07 2020',
  files: [],
};
// @ts-ignore
NewsListItemDemo.Showcase = AttachedShowcase;
// @ts-ignore
NewsListItemDemo.metadata = metadata;
// hide-end
