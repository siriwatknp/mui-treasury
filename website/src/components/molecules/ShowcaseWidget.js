import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CodeRounded from '@material-ui/icons/CodeRounded';
import Link from '@material-ui/icons/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette }) => ({
  hiddenName: {
    position: 'absolute',
    top: -64,
    opacity: 0,
    pointerEvents: 'none',
  },
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
  description,
  onClickCode,
  frameProps,
  className,
  ...props
}) => {
  const styles = useStyles();
  return (
    <Box
      position={'relative'}
      display={'flex'}
      flexDirection={'column'}
      {...props}
      className={cx('Showcase-root', className)}
    >
      <h3 className={styles.hiddenName} id={anchor}>
        {name}
      </h3>
      <Box
        p={2}
        pb={1}
        flex={'auto'}
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
        <div>
          <a href={`#${anchor}`} className={styles.name} aria-label={'Anchor'}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <b>{name}</b> <Link />
          </a>
          {description && (
            <Typography variant={'body2'} color={'textSecondary'}>
              {description}
            </Typography>
          )}
        </div>
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
  description: PropTypes.string,
  onClickCode: PropTypes.func,
  frameProps: PropTypes.shape({}),
};
ShowcaseWidget.defaultProps = {
  className: '',
  anchor: undefined,
  name: '',
  description: '',
  onClickCode: () => {},
  frameProps: {},
};

export default ShowcaseWidget;
