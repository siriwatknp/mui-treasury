import React from 'react';
import Button from '@material-ui/core/Button';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const MuiButton = () => {
  const gutterStyles = usePushingGutterStyles({
    cssProp: 'margin',
    space: [2, 2, 0, 0],
  });
  return (
    <div className={gutterStyles.parent}>
      <Button>Simple Text</Button>
      <Button variant={'contained'} color={'primary'}>
        Contained
      </Button>
      <Button variant={'outlined'} color={'secondary'}>
        Outlined
      </Button>
    </div>
  );
};

// hide-start
MuiButton.metadata = {
  isDefault: true,
  title: 'Default',
  path: 'styles/button/default',
  relates: [
    {
      label: 'Official Demo',
      url: 'https://material-ui.com/components/buttons/',
    },
    { label: 'Official API', url: 'https://material-ui.com/api/button/' },
    { label: 'pushingGutter.styles.js', url: '/components/instruction' },
  ],
};
// hide-end

export default MuiButton;
