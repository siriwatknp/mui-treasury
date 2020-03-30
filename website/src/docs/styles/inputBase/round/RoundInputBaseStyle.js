import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useRoundInputBaseStyles } from '@mui-treasury/styles/inputBase/round';

const RoundInputBaseStyle = () => {
  const styles = useRoundInputBaseStyles();
  return (
    <div>
      <InputBase classes={styles} placeholder={'Placeholder'} />
      <Box pb={1} />
      <InputBase error classes={styles} placeholder={'Error state'} />
      <Box pb={1} />
      <InputBase
        classes={styles}
        color={'secondary'}
        placeholder={'Secondary color'}
        startAdornment={<AccountCircle />}
      />
      <Box pb={1} />
      <InputBase classes={styles} placeholder={'Disabled'} disabled />
      <Box pb={1} />
    </div>
  );
};
// hide-start
RoundInputBaseStyle.metadata = {
  title: 'Round',
  path: 'styles/inputBase/round',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Mon Mar 30 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'inputBase/round/roundInputBase.styles.js' },
  ],
};
// hide-end

export default RoundInputBaseStyle;
