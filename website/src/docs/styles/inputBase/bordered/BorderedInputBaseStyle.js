import React from 'react';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Search from '@material-ui/icons/Search';
import { useBorderedInputBaseStyles } from '@mui-treasury/styles/inputBase/bordered';

const BorderedInputBaseStyle = () => {
  const styles = useBorderedInputBaseStyles();
  return (
    <div>
      <InputBase classes={styles} placeholder={'Placeholder'} />
      <Box pb={1} />
      <InputBase
        error
        classes={styles}
        placeholder={'Error state'}
      />
      <Box pb={1} />
      <InputBase
        classes={styles}
        placeholder={'Placeholder'}
        startAdornment={<Search />}
      />
      <Box pb={1} />
      <InputBase classes={styles} placeholder={'Disabled'} disabled />
      <Box pb={1} />
    </div>
  );
};
// hide-start
BorderedInputBaseStyle.metadata = {
  title: 'Bordered',
  path: 'styles/inputBase/bordered',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sun Mar 29 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    {
      pkg: 'mui-styles',
      path: 'inputBase/bordered/borderedInputBase.styles.js',
    },
  ],
};
// hide-end

export default BorderedInputBaseStyle;
