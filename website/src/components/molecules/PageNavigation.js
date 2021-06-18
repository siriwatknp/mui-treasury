import React from 'react';
import cx from 'clsx';
import { Link } from 'gatsby';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import ArrowRight from '@material-ui/icons/ChevronRight';
import ArrowLeft from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(({ breakpoints }) => ({
  wrapper: {
    flexWrap: 'wrap',
  },
  root: {
    minWidth: '48%',
    padding: '0 1rem 0.25rem',
    borderRadius: 4,
    border: '1px solid',
    borderColor: '#aadbef',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 'auto',
    marginBottom: '0.75rem',
    '&:hover': {
      boxShadow: '0 2px 8px 0 #065f8933',
    },
  },
  rootRight: {
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginRight: 0,
  },
  overline: {
    marginTop: '0.2rem',
    display: 'flex',
    alignItems: 'center',
  },
  overlineRight: {
    justifyContent: 'flex-end',
  },
}));

const Nav = ({ isOnRight, text, to, overline }) => {
  const classes = useStyles();
  return (
    <Link className={cx(classes.root, isOnRight && classes.rootRight)} to={to}>
      <div className={cx(classes.overline, isOnRight && classes.overlineRight)}>
        {!isOnRight && (
          <Box ml={-1} display={'flex'}>
            <ArrowLeft color={'inherit'} />
          </Box>
        )}
        <Typography variant={'overline'} color={'textSecondary'}>
          {overline}
        </Typography>
        {isOnRight && (
          <Box mr={-1} display={'flex'}>
            <ArrowRight color={'inherit'} />
          </Box>
        )}
      </div>
      <Typography variant={'h6'} color={'primary'}>
        {text}
      </Typography>
    </Link>
  );
};

const PageNavigation = ({ prev, next }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.wrapper}
      pt={{ xs: 2, sm: 3 }}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      color={'primary.main'}
    >
      {prev && <Nav {...prev} overline={'Previous'} />}
      {next && <Nav isOnRight {...next} overline={'Next'} />}
    </Box>
  );
};

PageNavigation.propTypes = {};
PageNavigation.defaultProps = {};

export default PageNavigation;
