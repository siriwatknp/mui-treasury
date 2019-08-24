import React from 'react';
import Button from '@material-ui/core/Button';
import { usePushingGutter } from '@mui-treasury/styles';

const DefaultButton = () => {
  const gutterStyles = usePushingGutter({
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
DefaultButton.title = 'Default';
DefaultButton.path = 'button/default';
// hide-end

export default DefaultButton;
