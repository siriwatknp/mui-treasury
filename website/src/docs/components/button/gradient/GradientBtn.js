import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const GradientBtn = () => {
  const styles = useGradientBtnStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
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
  creators: [require('constants/creators').siriwatknp],
  files: [{ pkg: 'mui-styles', path: 'button/gradient/gradientBtn.styles.js' }],
};
// hide-end

export default GradientBtn;
