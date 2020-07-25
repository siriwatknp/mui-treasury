import React from 'react';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';

export const MoonSocialLinkStyle = React.memo(
  function MoonSocialLink() {
    return (
      <>
        <SocialProvider useStyles={useMoonSocialLinkStyles}>
          <SocialLink brand={'FacebookCircle'} href={'https://www.facebook.com/siriwat.kunaporn/'} />
          <SocialLink brand={'Twitter'} href={'https://twitter.com/siriwatknp'} />
          <SocialLink brand={'Instagram'} href={''} />
          <SocialLink brand={'LinkedIn'} href={'https://www.linkedin.com/in/siriwat-kunaporn-1b4095158/'} />
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
    title={'Moon'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <MoonSocialLinkStyle />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/socialLink/moon',
  colSpan: 4,
  createdAt: 'Wed Jul 22 2020',
  files: [{ pkg: 'mui-styles', path: 'socialLink/moon/moonSocialLink.styles.ts' }],
};
// @ts-ignore
MoonSocialLinkStyle.Showcase = AttachedShowcase
// @ts-ignore
MoonSocialLinkStyle.metadata = metadata
// hide-end
