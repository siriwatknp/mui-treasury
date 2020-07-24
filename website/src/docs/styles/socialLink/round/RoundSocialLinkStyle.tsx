import React from 'react';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import { useRoundSocialLinkStyles } from '@mui-treasury/styles/socialLink/round';

export const RoundSocialLinkStyle = React.memo(function RoundSocialLink() {
  return (
    <>
      <SocialProvider useStyles={useRoundSocialLinkStyles}>
        <SocialLink
          brand={'FacebookCircle'}
          href={'https://www.facebook.com/siriwat.kunaporn/'}
        />
        <SocialLink brand={'Twitter'} href={'https://twitter.com/siriwatknp'} />
        <SocialLink
          brand={'Instagram'}
          href={''}
        />
        <SocialLink
          brand={'LinkedIn'}
          href={'https://www.linkedin.com/in/siriwat-kunaporn-1b4095158/'}
        />
        <SocialLink
          brand={'GithubCircle'}
        />
      </SocialProvider>
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
    title={'Round'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <RoundSocialLinkStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/socialLink/round',
  colSpan: 4,
  createdAt: 'Fri Jul 24 2020',
  files: [
    { pkg: 'mui-styles', path: 'socialLink/round/roundSocialLink.styles.ts' },
  ],
};
// @ts-ignore
RoundSocialLinkStyle.Showcase = AttachedShowcase;
// @ts-ignore
RoundSocialLinkStyle.metadata = metadata;
// hide-end
