import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FullscreenContext from '../../core/Context/FullscreenContext';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
}));

const Fullscreen: React.FC<{ className: string }> = ({
  children,
  className,
  ...props
}) => {
  const classes = useStyles();
  return (
    <FullscreenContext.Provider value={true}>
      <div {...props} className={cx(classes.root, className)}>
        {children}
      </div>
    </FullscreenContext.Provider>
  );
};

export default Fullscreen;
