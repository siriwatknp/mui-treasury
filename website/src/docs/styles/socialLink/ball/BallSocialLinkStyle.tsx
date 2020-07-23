import React from 'react';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useBallSocialLinkStyles } from '@mui-treasury/styles/socialLink/ball';

export const BallSocialLinkStyle = React.memo(
  function BallSocialLink() {
    return (
      <>
        <SocialProvider useStyles={useBallSocialLinkStyles}>
          <SocialLink brand={'Envelope'}  />
          <SocialLink brand={'GooglePlus'} />
          <SocialLink brand={'Pinterest'} />
          <SocialLink brand={'Dribbble'} />
        </SocialProvider>
      </>
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
    title={'Ball'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <BallSocialLinkStyle />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/socialLink/ball',
  colSpan: 4,
  createdAt: 'Fri Jul 24 2020',
  files: [{ pkg: 'mui-styles', path: 'socialLink/ball/ballSocialLink.styles.ts' }],
};
// @ts-ignore
BallSocialLinkStyle.Showcase = AttachedShowcase
// @ts-ignore
BallSocialLinkStyle.metadata = metadata
// hide-end
