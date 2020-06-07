import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import { useGoogleAvatarStyles } from '@mui-treasury/styles/avatar/google';

export const GoogleAvatarStyle: React.FC<{}> = React.memo(
  function GoogleAvatar() {
    const google = useGoogleAvatarStyles();
    const googleLarge = useGoogleAvatarStyles({ ringSize: 88, avatarSize: 76 });
    return (
      <>
        <div className={google.root}>
          <Avatar
            src={
              'https://lh3.googleusercontent.com/ogw/ADGmqu8IRt2zAKQDEDvqL5Egm51VKCxJm2eb-N8YELr3=s192-c-mo'
            }
          />
        </div>
        <Box className={googleLarge.root} ml={3}>
          <Avatar
            src={
              'https://lh3.googleusercontent.com/ogw/ADGmqu8IRt2zAKQDEDvqL5Egm51VKCxJm2eb-N8YELr3=s192-c-mo'
            }
          />
        </Box>
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
    title={'Google'}
    description={'Ring decoration'}
    creators={[require('constants/creators').siriwatknp]}
  >
    <GoogleAvatarStyle />
  </Showcase>
);
const metadata: IMetadata = {
  path: 'styles/avatar/google',
  createdAt: 'Fri May 15 2020',
  files: [{ pkg: 'mui-styles', path: 'avatar/google/googleAvatar.styles.ts' }],
};
// @ts-ignore
GoogleAvatarStyle.Showcase = AttachedShowcase;
// @ts-ignore
GoogleAvatarStyle.metadata = metadata;
// hide-end
