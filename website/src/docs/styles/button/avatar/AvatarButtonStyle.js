import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

const AvatarButtonStyle = () => {
  const small = useSizedIconButtonStyles({ padding: 4 });
  const large = useSizedIconButtonStyles({ padding: 8 });
  return (
    <div>
      <IconButton classes={small}>
        <Avatar src={'https://i.pravatar.cc/300'} />
      </IconButton>
      <IconButton classes={large}>
        <Avatar src={'https://i.pravatar.cc/300'} />
      </IconButton>
    </div>
  );
};
// hide-start
AvatarButtonStyle.metadata = {
  title: 'Avatar',
  path: 'styles/button/avatar',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Fri May 15 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'iconButton/sized/sizedIconButton.styles.ts' },
  ],
};
// hide-end

export default AvatarButtonStyle;
