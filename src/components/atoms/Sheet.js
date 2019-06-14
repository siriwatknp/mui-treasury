import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette }) => ({
  root: ({ bgColor }) => ({
    backgroundColor: bgColor,
    ...(bgColor === 'light' && {
      backgroundColor: '#f5f5f5',
    }),
    ...(bgColor === 'dark' && {
      backgroundColor: '#242424',
    }),
    ...(bgColor === 'white' && {
      backgroundColor: palette.common.white,
    }),
    ...(bgColor === 'transparent' && {
      backgroundColor: 'rgba(0,0,0,0)',
    }),
  }),
}));

const Sheet = ({ className, bgColor, ...props }) => {
  const classes = useStyles({ bgColor });
  return (
    <Paper
      className={cx(
        'Sheet-root',
        classes.root,
        bgColor && `-bgColor-${bgColor}`,
        className,
      )}
      elevation={0}
      {...props}
    />
  );
};

Sheet.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
};
Sheet.defaultProps = {
  className: '',
  bgColor: 'light',
};

export default Sheet;
