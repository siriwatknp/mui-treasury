import React from 'react';
import Button from '@material-ui/core/Button';
import { useFirebaseBtnStyles } from '@mui-treasury/styles/button/firebase';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const FirebaseButton = () => {
  const styles = useFirebaseBtnStyles();
  const gutterStyles = usePushingGutterStyles();
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
  createdAt: '2/2/2020',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'button/firebase/firebaseBtn.styles.js' }],
};
// hide-end

export default FirebaseButton;
