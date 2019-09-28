import React from 'react';
import Button from '@material-ui/core/Button';
import { useGraphicBtnStyles } from '@mui-treasury/styles';

const GraphicBtn = () => {
  const styles = useGraphicBtnStyles();
  return (
    <Button classes={styles} variant={'contained'} color={'primary'}>
      Graphic
    </Button>
  );
};

// hide-start
GraphicBtn.metadata = {
  title: 'Graphic',
  path: 'button/graphic',
  files: [{ pkg: 'mui-styles', path: 'button/graphic/graphicBtn.styles.js' }],
};
// hide-end

export default GraphicBtn;
