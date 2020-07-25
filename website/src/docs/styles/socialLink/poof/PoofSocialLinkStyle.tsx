import React from 'react';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { usePoofSocialLinkStyles } from '@mui-treasury/styles/socialLink/poof';

export const PoofSocialLinkStyle = React.memo(
  function PoofSocialLink() {
    return (
      <>
        <SocialProvider useStyles={usePoofSocialLinkStyles}>
          <SocialLink brand={'Pinterest'} />
          <SocialLink brand={'Facebook'}  />
          <SocialLink brand={'Twitter'} />
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
    title={'Poof'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
  >
    <PoofSocialLinkStyle />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/socialLink/poof',
  colSpan: 4,
  createdAt: 'Fri Jul 24 2020',
  files: [{ pkg: 'mui-styles', path: 'socialLink/poof/poofSocialLink.styles.ts' }],
};
// @ts-ignore
PoofSocialLinkStyle.Showcase = AttachedShowcase
// @ts-ignore
PoofSocialLinkStyle.metadata = metadata
// hide-end
