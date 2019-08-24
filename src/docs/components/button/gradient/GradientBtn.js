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
GradientBtn.title = 'Gradient';
GradientBtn.path = 'button/gradient';
// hide-end

export default GradientBtn;
