import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from 'extensions/Button';

const useStyles = makeStyles(({ palette }) => ({
  page: {
    display: 'inline-block',
    width: 44,
    height: 44,
    lineHeight: '44px',
    borderLeft: '1px solid #f0f0f0',
    borderRight: '1px solid #f0f0f0',
    textDecoration: 'none',
    color: palette.text.primary,
    '&:not(:first-of-type)': {
      marginLeft: -1,
    },
    '&:hover': {
      background: palette.grey[200],
    },
  },
  activePage: {
    color: palette.common.white,
    background: palette.primary.main,
    '&:hover': {
      background: palette.primary.main,
    },
  },
}));

const Pagination = ({ rootBoxProps }) => {
  const classes = useStyles();
  return (
    <Box {...rootBoxProps}>
      <Grid container>
        <Grid item>
          <Button shape={'square'} icon={'keyboard_arrow_left'} />
        </Grid>
        <Grid item xs>
          <Box textAlign={'center'}>
            <a className={classes.page} href={'#1'}>
              1
            </a>
            <a className={cx(classes.page, classes.activePage)} href={'#2'}>
              2
            </a>
            <a className={classes.page} href={'#3'}>
              3
            </a>
            <a className={classes.page} href={'#4'}>
              4
            </a>
            <a className={classes.page} href={'#5'}>
              5
            </a>
          </Box>
        </Grid>
        <Grid item>
          <Button shape={'square'} icon={'keyboard_arrow_right'} />
        </Grid>
      </Grid>
    </Box>
  );
};

Pagination.propTypes = {
  rootBoxProps: PropTypes.shape({}),
};
Pagination.defaultProps = {
  rootBoxProps: {},
};

export default Pagination;
