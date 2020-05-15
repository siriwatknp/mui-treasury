import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import Search from '@material-ui/icons/Search';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';

const SizedIconButtonStyle = () => {
  const tiny = useSizedIconButtonStyles({
    color: '#6894ff',
    padding: '1rem',
    childSize: '1rem',
  });
  const small = useSizedIconButtonStyles({
    color: '#000',
    padding: 8,
    childSize: 24,
  });
  const large = useSizedIconButtonStyles({ padding: 16, childSize: 32 });
  return (
    <div>
      <IconButton classes={tiny}>
        <Search />
      </IconButton>
      <IconButton classes={small}>
        <Add />
      </IconButton>
      <IconButton classes={large}>
        <Delete color={'secondary'} />
      </IconButton>
    </div>
  );
};
// hide-start
SizedIconButtonStyle.metadata = {
  title: 'Sized',
  description: 'custom button and icon size dynamically',
  path: 'styles/iconButton/sized',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Thu May 14 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'iconButton/sized/sizedIconButton.styles.ts' },
  ],
};
// hide-end

export default SizedIconButtonStyle;
