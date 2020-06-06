import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

// @ts-ignore
import { useGoogleAvatarStyles } from '@mui-treasury/styles/avatar/google';

// IComposition is for internal usage only
// you can remove IComposition in your project
export const GoogleAvatarStyle: React.FC<{}> & IComposition = () => {
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
};
// hide-start
// eslint-disable-next-line import/first
import Showcase, { IMetadata, ShowcaseProps } from '../../../../components/Showcase';

interface IComposition {
  Showcase: React.FC<ShowcaseProps>
  metadata: IMetadata
}

GoogleAvatarStyle.Showcase = props => (
  <Showcase
    {...props}
    title={'Google'}
    description={'Ring decoration'}
    creators={[require('constants/creators').siriwatknp]}
  >
    <GoogleAvatarStyle />
  </Showcase>
)
GoogleAvatarStyle.metadata = {
  path: 'styles/avatar/google',
  createdAt: 'Fri May 15 2020',
  files: [{ pkg: 'mui-styles', path: 'avatar/google/googleAvatar.styles.ts' }],
};
// hide-end
