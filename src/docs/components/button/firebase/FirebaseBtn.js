import React from 'react';
import Button from '@material-ui/core/Button';
import { useFirebaseBtnStyles } from '@mui-treasury/styles/button';
import { usePushingGutter } from '@mui-treasury/styles/gutter';

const FirebaseButton = () => {
  const styles = useFirebaseBtnStyles();
  const gutterStyles = usePushingGutter();
  return (
    <div className={gutterStyles.parent}>
      <Button classes={styles}>Default</Button>
      <Button classes={styles} variant={'contained'} color={'primary'}>
        Contained
      </Button>
    </div>
  );
};

// hide-start
FirebaseButton.metadata = {
  title: 'Firebase',
  path: 'button/firebase',
  files: [{ pkg: 'mui-styles', path: 'button/firebaseBtn.styles.js' }],
};
// hide-end

export default FirebaseButton;
