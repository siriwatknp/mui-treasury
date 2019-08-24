import React from 'react';
import Button from '@material-ui/core/Button';
import { useFirebaseBtnStyles, usePushingGutter } from '@mui-treasury/styles';

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
FirebaseButton.title = 'Firebase';
FirebaseButton.path = 'button/firebase';
// hide-end

export default FirebaseButton;
