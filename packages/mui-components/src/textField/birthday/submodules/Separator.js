import React from 'react';
import cx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(
  ({ palette }) => ({
    root: {
      display: 'inline-flex',
      paddingLeft: 4,
      paddingRight: 4,
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
