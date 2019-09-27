import React from 'react';
import cx from 'clsx';
import startCase from 'lodash/startCase';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';
import Link from '@material-ui/icons/Link';

const useStyles = makeStyles(({ palette }) => ({
  name: {
    margin: 0,
    textDecoration: 'none',
    borderBottom: 'none',
    color: palette.text.primary,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    '& > svg': {
      opacity: 0,
      fontSize: 24,
      transform: 'rotateZ(-45deg) translate(-4px, 0.2em)',
    },
    '&:hover': {
      color: '#007aac',
      borderBottom: 'none',
      '& > svg': {
        opacity: 1,
      },
    },
  },
}));

const ShowcaseWidget = ({
  children,
  name,
  anchor = name,
  onClickCode,
  frameProps,
  className,
  ...props
}) => {
  const styles = useStyles();
  return (
    <Box {...props} className={cx('Showcase-root', className)}>
      <Box
        p={2}
        pb={1}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={{
          xs: 200,
          sm: 240,
          md: 280,
        }}
        {...frameProps}
        className={cx('Showcase-frame', frameProps.className)}
      >
        {children}
      </Box>
      <Box p={2} pt={1} display={'flex'} alignItems={'center'}>
        <a
          id={anchor}
          href={`#${anchor}`}
          className={styles.name}
          aria-label={'Anchor'}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <b>{startCase(name)}</b> <Link />
        </a>
        <Box ml={'auto'}>
          <IconButton onClick={onClickCode}>
            <CodeRounded />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

ShowcaseWidget.propTypes = {
  className: PropTypes.string,
  anchor: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClickCode: PropTypes.func,
  frameProps: PropTypes.shape({}),
};
ShowcaseWidget.defaultProps = {
  className: '',
  anchor: undefined,
  name: '',
  onClickCode: () => {},
  frameProps: {},
};

export default ShowcaseWidget;
