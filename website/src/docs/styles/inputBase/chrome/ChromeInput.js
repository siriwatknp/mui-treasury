import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import StarBorder from '@material-ui/icons/StarBorder';
import { useChromeInputStyles } from '@mui-treasury/styles/input/chrome';

const ChromeInput = () => {
  const styles = useChromeInputStyles();
  return (
    <InputBase
      className={styles.root}
      placeholder={'https://'}
      startAdornment={
        <IconButton className={styles.icon}>
          <InfoOutlined />
        </IconButton>
      }
      endAdornment={
        <IconButton className={styles.icon}>
          <StarBorder />
        </IconButton>
      }
    />
  );
};

// hide-start
ChromeInput.metadata = {
  title: 'Chrome',
  path: 'styles/inputBase/chrome',
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'input/chrome/chromeInput.styles.js' }],
  relates: [],
};
// hide-end

export default ChromeInput;
