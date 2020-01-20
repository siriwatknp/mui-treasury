import React from 'react';
import Button from '@material-ui/core/Button';
import { useTwitterBtnStyles } from '@mui-treasury/styles/button/twitter';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const TwitterButton = () => {
  const styles = useTwitterBtnStyles();
  const mainStyles = usePushingGutterStyles({
    cssProp: 'marginTop',
    space: 2,
    firstExcluded: true,
  });
  const wrapperStyles = usePushingGutterStyles();
  return (
    <div className={mainStyles.parent}>
      <div className={wrapperStyles.parent}>
        <Button classes={styles} color={'primary'} variant={'contained'}>
          Normal
        </Button>
        <Button
          classes={styles}
          color={'primary'}
          variant={'contained'}
          size={'large'}
        >
          Large Button
        </Button>
      </div>
      <div className={wrapperStyles.parent}>
        <Button classes={styles} variant={'outlined'} color={'primary'}>
          Normal
        </Button>
        <Button
          classes={styles}
          variant={'outlined'}
          color={'primary'}
          size={'large'}
        >
          Large Button
        </Button>
      </div>
    </div>
  );
};

// hide-start
TwitterButton.metadata = {
  title: 'Twitter',
  path: 'button/twitter',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'button/twitter/twitterBtn.styles.js' }],
};
// hide-end

export default TwitterButton;
