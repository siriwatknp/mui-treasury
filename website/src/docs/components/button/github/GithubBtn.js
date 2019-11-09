import React from 'react';
import Button from '@material-ui/core/Button';
import { useGithubBtnStyles, usePushingGutter } from '@mui-treasury/styles';

const GithubButton = () => {
  const styles = useGithubBtnStyles();
  const gutterStyles = usePushingGutter();
  return (
    <div className={gutterStyles.parent}>
      <Button classes={styles} variant={'contained'}>
        Default
      </Button>
      <Button classes={styles} variant={'contained'} color={'primary'}>
        Contained
      </Button>
    </div>
  );
};

// hide-start
GithubButton.metadata = {
  title: 'Github',
  path: 'button/github',
  files: [{ pkg: 'mui-styles', path: 'button/github/githubBtn.styles.js' }],
};
// hide-end

export default GithubButton;
