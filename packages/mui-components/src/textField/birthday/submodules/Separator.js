import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  ({ palette }) => ({
    root: {
      display: 'inline-flex',
      paddingLeft: 2,
      paddingRight: 8,
      color: palette.text.disabled,
    },
  }),
  { name: 'Separator' }
);

const Separator = ({ className, children = '/', ...props }) => {
  const classes = useStyles(props);
  return (
    <div className={cx(classes.root, className)} {...props}>
      {children}
    </div>
  );
};

export default Separator;
