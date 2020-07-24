import React from 'react';
import { orange } from '@material-ui/core/colors';
import { SocialProvider, SocialLink } from '@mui-treasury/components/socialLink'
import { useZoomSocialLinkStyles } from '@mui-treasury/styles/socialLink/zoom';

export const ZoomSocialLinkStyle = React.memo(
  function ZoomSocialLink() {
    return (
      <>
        <SocialProvider useStyles={useZoomSocialLinkStyles}>
          <SocialLink brand={'Facebook'} href={'https://www.facebook.com/siriwat.kunaporn/'} />
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
    title={'Zoom'}
    description={''}
    creators={[require('constants/creators').siriwatknp]}
    hasDarkTheme
    theme={{
      palette: {
        primary: {
          main: orange['500']
        }
      }
    }}
  >
    <ZoomSocialLinkStyle />
  </Showcase>
)
const metadata: IMetadata = {
  path: 'styles/socialLink/zoom',
  colSpan: 4,
  createdAt: 'Wed Jul 22 2020',
  files: [{ pkg: 'mui-styles', path: 'socialLink/zoom/zoomSocialLink.styles.ts' }],
};
// @ts-ignore
ZoomSocialLinkStyle.Showcase = AttachedShowcase
// @ts-ignore
ZoomSocialLinkStyle.metadata = metadata
// hide-end
