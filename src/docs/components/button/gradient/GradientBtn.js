import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles, usePushingGutter } from '@mui-treasury/styles';

const GradientBtn = () => {
  const styles = useGradientBtnStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const gutterStyles = usePushingGutter({ cssProp: 'marginBottom', space: 2 });
  return (
    <div className={gutterStyles.parent}>
      <div>
        <Button classes={styles}>Default</Button>
      </div>
      <div>
        <Button classes={chubbyStyles}>Chubby</Button>
      </div>
    </div>
  );
};

// hide-start
GradientBtn.metadata = {
  title: 'Gradient',
  path: 'button/gradient',
  files: [{ pkg: 'mui-styles', path: 'button/gradientBtn.styles.js' }],
};
// hide-end

export default GradientBtn;
