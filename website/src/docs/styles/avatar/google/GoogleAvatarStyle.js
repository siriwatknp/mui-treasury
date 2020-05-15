import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { useGoogleAvatarStyles } from '@mui-treasury/styles/avatar/google';

const GoogleAvatarStyle = () => {
  const google = useGoogleAvatarStyles();
  const googleLarge = useGoogleAvatarStyles({ ringSize: 88, avatarSize: 76 });
  return (
    <Box display={'flex'} alignItems={'center'}>
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
    </Box>
  );
};
// hide-start
GoogleAvatarStyle.metadata = {
  title: 'Google',
  path: 'styles/avatar/google',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Fri May 15 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'avatar/google/googleAvatar.styles.ts' }],
};
// hide-end

export default GoogleAvatarStyle;
