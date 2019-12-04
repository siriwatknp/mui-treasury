import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { useBootstrapInputStyles } from '@mui-treasury/styles/input/bootstrap';

const BootstrapInput = () => {
  const styles = useBootstrapInputStyles();
  return (
    <div>
      <InputBase classes={styles} placeholder={'Normal input'} />
      <div style={{ paddingBottom: 8 }} />
      <InputBase error classes={styles} placeholder={'Error state'} />
      <div style={{ paddingBottom: 8 }} />
      <InputBase
        className={'-valid'}
        classes={styles}
        placeholder={'Valid state'}
      />
    </div>
  );
};

// hide-start
BootstrapInput.metadata = {
  title: 'Bootstrap',
  path: 'input/bootstrap',
  files: [
    { pkg: 'mui-styles', path: 'input/bootstrap/bootstrapInput.styles.js' },
  ],
  relates: [],
};
// hide-end

export default BootstrapInput;
